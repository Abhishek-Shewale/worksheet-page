import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// 🔑 Replace with your Gemini API key
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
  const pdfContainer = document.createElement('div');
  pdfContainer.className = 'p-8';
  
  // Get the full path to the logo
  const logoPath = window.location.origin + 
  window.location.pathname.replace(/\/[^/]*$/, '') + 
  '/assets/studentailogo.jpg';

  
  // Add logo and header
  pdfContainer.innerHTML = `
    <div class="text-center mb-6">
      <img src="${logoPath}" 
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
    filename: `${olympiad}_${currentTab.replace(/[- ]/g, '_')}_Class_${classLevel}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true, // Enable CORS for external images
      logging: true, // Enable logging for debugging
      allowTaint: true, // Allow tainted canvas
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  try {
    // Generate and download PDF
    await html2pdf().set(opt).from(pdfContainer).save();
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
}

// Helper function to format tab names for display
function formatTabName(tab) {
  return tab.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Add click handler for download button
downloadBtn.addEventListener('click', downloadCurrentTab);

// Update current tab when a tab is clicked
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    currentTab = tab.dataset.tab;
  });
});

// Auto-load the syllabus tab when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const syllabusTab = document.querySelector('.tab-btn[data-tab="syllabus"]');
  if (syllabusTab) {
    syllabusTab.click();
  }
});

tabs.forEach((tab) => {
  tab.addEventListener("click", async () => {
    const selectedTab = tab.dataset.tab;

    // Reset tab styles
    tabs.forEach((t) => {
      t.classList.remove("border-indigo-600", "text-indigo-600");
      t.classList.add("text-gray-600");
    });
    tab.classList.add("border-indigo-600", "text-indigo-600");

    // Load content
    await loadContent(selectedTab);
  });
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

    // Clean unwanted markdown/code fences
    const cleaned = rawText
      .replace(/```html/g, "")
      .replace(/```/g, "")
      .replace(/Key improvements[\s\S]*/g, "")
      .trim();

    // Render cleaned HTML directly
    if (!hideLoading) {
      tabContent.innerHTML = `<div class="prose max-w-none">${cleaned}</div>`;
    }
    loadedTabs[tab] = `<div class="prose max-w-none">${cleaned}</div>`; // cache it
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
      return `Generate a detailed syllabus outline for the ${olympiad} Olympiad for Class ${classLevel}. give me response in html format`;

    case "exam-pattern":
      return `Generate the complete exam pattern and marking scheme for the ${olympiad} Olympiad for Class ${classLevel}. 
              Include number of sections, marks distribution, time duration, and negative marking details if any. 
              Give the response in clean HTML format.`;

    case "question-bank":
      return `Generate a question bank of 20 practice questions with answers for the ${olympiad} Olympiad for Class ${classLevel}. 
              Present questions in a well-structured HTML format using tables, lists, or cards.`;

    case "preparation-tips":
      return `Generate preparation tips and study strategies for the ${olympiad} Olympiad for Class ${classLevel}. 
              Structure the response in HTML format with headings, bullet points.`;

    default:
      return `Generate study content for the ${olympiad} Olympiad for Class ${classLevel}. 
              Give the response in HTML format.`;
  }
}
