import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// 🔑 Replace with your Gemini API key (note: exposing keys on client is insecure)
const genAI = new GoogleGenerativeAI("AIzaSyAfzmPZwL-fGE0pOzzUiF0jNlOLsrY4Uus");

// Get class + olympiad from localStorage
const classLevel = localStorage.getItem("selectedClass");
const olympiad = localStorage.getItem("selectedOlympiad");

const guideTitle = document.getElementById("guide-title");
guideTitle.textContent = `${olympiad} Olympiad Guide - Class ${classLevel}`;

const tabs = document.querySelectorAll(".tab-btn");
const tabContent = document.getElementById("tab-content");
const downloadBtn = document.getElementById("downloadCurrentTab");

// Track current tab
let currentTab = "syllabus";

// Cache loaded tabs
const loadedTabs = {};

// Function to generate PDF for the current tab
async function downloadCurrentTab() {
  if (!loadedTabs[currentTab]) {
    await loadContent(currentTab, true);
  }

  // Create a container for the PDF content
  const pdfContainer = document.createElement("div");
  pdfContainer.className = "p-8";

  // ✅ Use direct public URL for your logo
  const logoPath = "https://i.ibb.co/nsh5NvBk/Student-AI.png";

  // Add logo and header
  pdfContainer.innerHTML = `
    <div class="text-center mb-6">
      <img src="${logoPath}"
           crossorigin="anonymous"
           alt="Logo"
           class="h-20 mx-auto mb-4"
           onerror="this.style.display='none'">
      <h1 class="text-2xl font-bold">${olympiad} Olympiad - ${formatTabName(currentTab)}</h1>
      <p class="text-gray-600">Class ${classLevel}</p>
      <div class="border-t my-4"></div>
    </div>
    ${loadedTabs[currentTab]}
  `;

  // PDF options
  const opt = {
    margin: 10,
    filename: `${olympiad}_${currentTab.replace(/[- ]/g, "_")}_Class_${classLevel}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,   // Enable CORS for remote images
      logging: true,
      allowTaint: false
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  };

  try {
    // Generate and download PDF
    await html2pdf().set(opt).from(pdfContainer).save();
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Error generating PDF. Please try again.");
  }
}

// Helper function to format tab names for display
function formatTabName(tab) {
  return tab
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Add click handler for download button
downloadBtn.addEventListener("click", downloadCurrentTab);

// Update current tab when a tab is clicked
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active class to clicked tab
    tab.classList.add('active');
    currentTab = tab.dataset.tab;
    loadContent(currentTab);
  });
});

// Auto-load the syllabus tab when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const syllabusTab = document.querySelector('.tab-btn[data-tab="syllabus"]');
  if (syllabusTab) {
    syllabusTab.click();
  }
});

async function loadContent(tab, hideLoading = false) {
  // If already loaded, use cache
  if (loadedTabs[tab]) {
    tabContent.innerHTML = loadedTabs[tab];
    return;
  }

  if (!hideLoading) {
    tabContent.innerHTML = `<p class="text-gray-500">Loading ${tab}...</p>`;
  }

  const prompt = generatePrompt(tab);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);

    // Raw text from Gemini
    const rawText = await result.response.text();

    // Clean and process the HTML
    let cleaned = rawText
      .replace(/```html/g, "")
      .replace(/```/g, "")
      .replace(/Key improvements[\s\S]*/g, "")
      .replace(/Explanation and Improvements[\s\S]*/g, "")
      .trim();

    // Process tables to fix structure and remove duplicates
    cleaned = cleaned
      // Remove any inline styles or margins
      .replace(/<table([^>]*)style=["'][^"']*margin[^"']*["']/gi, '<table$1')
      // Add proper table classes
      .replace(/<table([^>]*)>/gi, '<table class="w-full border-collapse my-4">')
      // Process table cells
      .replace(/<td([^>]*)>/gi, '<td class="p-2 border border-gray-300">')
      .replace(/<th([^>]*)>/gi, '<th class="p-2 border border-gray-300 bg-gray-100 font-semibold">')
      // Remove duplicate headers (keep only the first thead if there are multiple)
      .replace(/<thead[^>]*>.*?<\/thead>\s*(?=<thead)/gis, '');

    console.log("[Gemini raw] ===\n", rawText);
    console.log("[Gemini cleaned] ===\n", cleaned);

    // Create a container with proper styling
    const container = document.createElement('div');
    container.className = 'prose max-w-none overflow-x-auto';
    container.innerHTML = cleaned;

    // Remove any remaining inline styles and empty elements
    container.querySelectorAll('*').forEach(el => {
      el.removeAttribute('style');
      // Remove empty elements that might be causing spacing issues
      if (!el.textContent.trim() && el.children.length === 0) {
        el.remove();
      }
    });

    // Remove any duplicate headers in tables
    container.querySelectorAll('table').forEach(table => {
      const headers = table.querySelectorAll('thead');
      // Keep only the first thead if there are multiple
      for (let i = 1; i < headers.length; i++) {
        headers[i].remove();
      }
    });

    if (!hideLoading) {
      tabContent.innerHTML = '';
      tabContent.appendChild(container);
    }
    
    // Cache the HTML as a string
    loadedTabs[tab] = container.outerHTML;
  } catch (error) {
    console.error(error);
    if (!hideLoading) {
      tabContent.innerHTML = `<p class="text-red-500">Error loading content. Try again.</p>`;
    }
  }
}

function generatePrompt(tab) {
  switch (tab) {
    case "syllabus":
  return `
Generate a detailed ${olympiad} Olympiad syllabus in HTML format for Class ${classLevel}.

Requirements:
- Output ONLY valid HTML (no markdown, no code fences, no extra commentary).
- Wrap everything inside a single root container: <div class="syllabus-container"> ... </div>.
- Start with an <h2> heading: <h2>${olympiad} Olympiad – Class ${classLevel} Syllabus</h2>.
- Include an "Overview" section with a short (1-3 sentence) formal educational introduction.
- Include a "Syllabus Breakdown" section. Present topics and subtopics using a table exactly like this structure:

<table class="syllabus-table">
  <thead>
    <tr><th>Topic</th><th>Subtopics</th></tr>
  </thead>
  <tbody>
    <tr><td>Main Topic</td><td>Subtopic 1, Subtopic 2, Subtopic 3</td></tr>
    <tr><td>Main Topic</td><td>Subtopic 1, Subtopic 2</td></tr>
  </tbody>
</table>

- Provide 6–8 main topics appropriate for Class ${classLevel} and the ${olympiad} domain. Each topic must have 3–6 concise comma-separated subtopics.
- Keep topic titles short (5–7 words max). Keep subtopic phrases concise (1–6 words each).
- Use semantic HTML only (headings, paragraphs, tables, <section> blocks). Do not include scripts, styles, or external links.
- Use a formal, educational tone.
- Do not include any text outside the root <div>.

End.
`.trim();



    case "exam-pattern":
      return `Generate the complete exam pattern and marking scheme for the ${olympiad} Olympiad for Class ${classLevel}. 
              Include number of sections, marks distribution, time duration, and negative marking details if any. 
              Give the response in clean HTML format.`;

    case "question-bank":
      return `Generate a question bank of 20 practice questions with answers for the ${olympiad} Olympiad for Class ${classLevel}. 
Present questions in a well-structured HTML format using tables, lists, or cards. 
Make sure:
- Each question has exactly one number (1, 2, 3, …). 
- Each option is labeled only once as a), b), c), d) — no duplicates. 
- Do not repeat numbering or option letters.
`;

    case "preparation-tips":
      return `Generate preparation tips and study strategies for the ${olympiad} Olympiad for Class ${classLevel}. 
              Structure the response in HTML format with headings, bullet points.`;

    default:
      return `Generate study content for the ${olympiad} Olympiad for Class ${classLevel}. 
              Give the response in HTML format.`;
  }
}
