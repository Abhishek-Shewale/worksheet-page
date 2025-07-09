// Global variables
let currentWorksheet = null;
let showingAnswers = false;
let currentCategory = 'math';

// Worksheet data organized by categories
const worksheetData = {
  math: [
    {
      id: 'multiplication-2digit',
      title: 'Multiplying 2-Digit by 2-Digit Numbers',
      description: 'Practice multiplication with 2-digit numbers',
      grade: '4-5',
      difficulty: 'medium',
      problems: 25,
      views: 2639
    },
    {
      id: 'addition-2digit',
      title: '2-Digit Plus 2-Digit Addition',
      description: 'Addition with some regrouping',
      grade: '4-5',
      difficulty: 'easy',
      problems: 25,
      views: 2677
    },
    {
      id: 'addition-single',
      title: '100 Single-Digit Addition Questions',
      description: 'Quick addition practice',
      grade: '3-4',
      difficulty: 'easy',
      problems: 100,
      views: 2212
    },
    {
      id: 'addition-3digit',
      title: '3-Digit Plus 3-Digit Addition',
      description: 'Addition with regrouping',
      grade: '4-5',
      difficulty: 'medium',
      problems: 25,
      views: 2014
    },
    {
      id: 'multiplication-facts',
      title: 'Multiplication Facts to 100',
      description: 'Basic multiplication tables',
      grade: '3-5',
      difficulty: 'easy',
      problems: 100,
      views: 1821
    },
    {
      id: 'division-basic',
      title: 'Basic Division Facts',
      description: 'Division with single digits',
      grade: '3-4',
      difficulty: 'easy',
      problems: 50,
      views: 1654
    },
    {
      id: 'fractions-basic',
      title: 'Introduction to Fractions',
      description: 'Basic fraction concepts',
      grade: '4-5',
      difficulty: 'medium',
      problems: 20,
      views: 1432
    },
    {
      id: 'decimals-basic',
      title: 'Decimal Operations',
      description: 'Addition and subtraction with decimals',
      grade: '5-6',
      difficulty: 'medium',
      problems: 25,
      views: 1298
    }
  ],
  
  algebra: [
    {
      id: 'linear-equations',
      title: 'Solving Linear Equations',
      description: 'Basic linear equations with one variable',
      grade: '7-8',
      difficulty: 'medium',
      problems: 15,
      views: 940
    },
    {
      id: 'translating-phrases',
      title: 'Translating Algebraic Phrases',
      description: 'Converting words to algebraic expressions',
      grade: '7-8',
      difficulty: 'easy',
      problems: 20,
      views: 747
    },
    {
      id: 'distributive-property',
      title: 'Distributive Property',
      description: 'Expanding expressions using distributive property',
      grade: '7-8',
      difficulty: 'medium',
      problems: 20,
      views: 490
    },
    {
      id: 'combining-like-terms',
      title: 'Combining Like Terms',
      description: 'Simplifying algebraic expressions',
      grade: '7-8',
      difficulty: 'medium',
      problems: 18,
      views: 432
    },
    {
      id: 'quadratic-equations',
      title: 'Quadratic Equations',
      description: 'Solving quadratic equations by factoring',
      grade: '9-10',
      difficulty: 'hard',
      problems: 12,
      views: 386
    },
    {
      id: 'systems-equations',
      title: 'Systems of Equations',
      description: 'Solving systems using substitution',
      grade: '9-10',
      difficulty: 'hard',
      problems: 10,
      views: 315
    }
  ],
  
  geometry: [
    {
      id: 'pythagorean-theorem',
      title: 'Pythagorean Theorem',
      description: 'Finding missing sides of right triangles',
      grade: '8-9',
      difficulty: 'medium',
      problems: 15,
      views: 285
    },
    {
      id: 'area-perimeter',
      title: 'Area and Perimeter',
      description: 'Basic shapes area and perimeter',
      grade: '6-7',
      difficulty: 'easy',
      problems: 20,
      views: 542
    },
    {
      id: 'coordinate-geometry',
      title: 'Coordinate Geometry',
      description: 'Distance and midpoint formulas',
      grade: '8-9',
      difficulty: 'medium',
      problems: 12,
      views: 398
    },
    {
      id: 'angles-triangles',
      title: 'Angles in Triangles',
      description: 'Finding missing angles',
      grade: '7-8',
      difficulty: 'medium',
      problems: 15,
      views: 321
    },
    {
      id: 'circle-geometry',
      title: 'Circle Geometry',
      description: 'Circumference and area of circles',
      grade: '7-8',
      difficulty: 'medium',
      problems: 18,
      views: 287
    }
  ],
  
  trigonometry: [
    {
      id: 'basic-trig-ratios',
      title: 'Basic Trigonometric Ratios',
      description: 'Sin, cos, tan for special angles',
      grade: '9-10',
      difficulty: 'medium',
      problems: 15,
      views: 234
    },
    {
      id: 'trig-identities',
      title: 'Trigonometric Identities',
      description: 'Basic trig identities and proofs',
      grade: '10-11',
      difficulty: 'hard',
      problems: 12,
      views: 198
    },
    {
      id: 'solving-triangles',
      title: 'Solving Triangles',
      description: 'Using sine and cosine rules',
      grade: '10-11',
      difficulty: 'hard',
      problems: 10,
      views: 176
    },
    {
      id: 'unit-circle',
      title: 'Unit Circle',
      description: 'Angles and coordinates on unit circle',
      grade: '10-11',
      difficulty: 'hard',
      problems: 20,
      views: 156
    }
  ],
  
  statistics: [
    {
      id: 'mean-median-mode',
      title: 'Mean, Median, Mode',
      description: 'Measures of central tendency',
      grade: '6-7',
      difficulty: 'easy',
      problems: 15,
      views: 412
    },
    {
      id: 'probability-basic',
      title: 'Basic Probability',
      description: 'Simple probability calculations',
      grade: '7-8',
      difficulty: 'medium',
      problems: 18,
      views: 356
    },
    {
      id: 'data-interpretation',
      title: 'Data Interpretation',
      description: 'Reading charts and graphs',
      grade: '6-8',
      difficulty: 'medium',
      problems: 12,
      views: 298
    },
    {
      id: 'standard-deviation',
      title: 'Standard Deviation',
      description: 'Calculating standard deviation',
      grade: '9-10',
      difficulty: 'hard',
      problems: 10,
      views: 187
    }
  ],
  
  calculus: [
    {
      id: 'derivatives-basic',
      title: 'Basic Derivatives',
      description: 'Power rule and basic derivatives',
      grade: '11-12',
      difficulty: 'hard',
      problems: 15,
      views: 167
    },
    {
      id: 'limits',
      title: 'Limits',
      description: 'Finding limits of functions',
      grade: '11-12',
      difficulty: 'hard',
      problems: 12,
      views: 143
    },
    {
      id: 'chain-rule',
      title: 'Chain Rule',
      description: 'Derivatives using chain rule',
      grade: '11-12',
      difficulty: 'hard',
      problems: 10,
      views: 124
    },
    {
      id: 'integration-basic',
      title: 'Basic Integration',
      description: 'Fundamental integration techniques',
      grade: '11-12',
      difficulty: 'hard',
      problems: 12,
      views: 108
    }
  ]
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  loadCategory('math');
  console.log('Math Worksheets loaded successfully!');
});

// Switch category function
function switchCategory(category) {
  if (currentCategory === category) return;
  
 // Update active button
// Remove active class from ALL category cards
document.querySelectorAll('.category-card').forEach(card => {
  card.classList.remove('active');
});

// Add active class only to the selected category
const selectedCard = document.querySelector(`[data-category="${category}"]`);
if (selectedCard) {
  selectedCard.classList.add('active');
}
document.querySelector(`[data-category="${category}"]`).classList.add('active');
  // Update current category
  currentCategory = category;
  
  // Load new category with animation
  loadCategory(category);
}

// Load category worksheets
function loadCategory(category) {
  const container = document.getElementById('worksheets-container');
  const title = document.getElementById('category-title');
  
  // Add fade out effect
  container.classList.add('fade-out');
  
  setTimeout(() => {
    // Update title
    const categoryTitles = {
      math: 'Most Popular Math Worksheets this Week',
      algebra: 'Most Popular Algebra Worksheets this Week',
      geometry: 'Geometry Worksheets',
      trigonometry: 'Trigonometry Worksheets',
      statistics: 'Statistics Worksheets',
      calculus: 'Calculus Worksheets'
    };
    
    title.innerHTML = `<span class="text-orange-500">🔥</span> ${categoryTitles[category]}`;
    
    // Clear container
    container.innerHTML = '';
    
    // Load worksheets for this category
    const worksheets = worksheetData[category] || [];
    
    worksheets.forEach(worksheet => {
      const card = createWorksheetCard(worksheet);
      container.appendChild(card);
    });
    
    // Remove fade out effect
    container.classList.remove('fade-out');
  }, 150);
}

// Create worksheet card - FIXED VERSION
function createWorksheetCard(worksheet) {
  const card = document.createElement('div');
  card.className = 'worksheet-card';
  card.onclick = () => openWorksheet(worksheet.id);
  
  const difficultyClass = `difficulty-${worksheet.difficulty}`;
  
  card.innerHTML = `
    <div class="worksheet-thumbnail bg-gray-100 h-48 flex items-center justify-center mb-4">
      <div class="w-full h-full bg-white p-3 border rounded">
        <div class="text-center text-xs font-bold mb-2">${worksheet.title}</div>
        <div class="text-xs text-gray-600 space-y-1">
          ${getPreviewContent(worksheet.id)}
        </div>
      </div>
    </div>
    
    <div class="flex items-center justify-between mb-2">
      <span class="grade-indicator grade-${getGradeRange(worksheet.grade)}">
        Grade ${worksheet.grade}
      </span>
      <span class="difficulty-badge ${difficultyClass}">
        ${worksheet.difficulty}
      </span>
    </div>
    
    <h3>${worksheet.title}</h3>
    <p>${worksheet.description}</p>
    
    <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
      <span>📝 ${worksheet.problems} problems</span>
      <span class="text-red-600 font-medium">(${worksheet.views} views this week)</span>
    </div>
  `;
  
  return card;
}

// Get preview content for worksheet
function getPreviewContent(worksheetId) {
  const previews = {
    'multiplication-2digit': '<div>14 × 23 = ___</div><div>56 × 47 = ___</div><div>38 × 29 = ___</div>',
    'addition-2digit': '<div>23 + 45 = ___</div><div>67 + 34 = ___</div><div>89 + 12 = ___</div>',
    'addition-single': '<div>2+3=</div><div>5+4=</div><div>7+1=</div><div>8+2=</div>',
    'linear-equations': '<div>2x + 3x = 15</div><div>5x - 2x = 21</div><div>4x + 7 = 31</div>',
    'pythagorean-theorem': '<div>a² + b² = c²</div><div>Find c: a=3, b=4</div><div>Find c: a=5, b=12</div>',
    'basic-trig-ratios': '<div>sin(30°) = ?</div><div>cos(45°) = ?</div><div>tan(60°) = ?</div>',
    'mean-median-mode': '<div>Data: 2, 4, 6, 8, 10</div><div>Find: Mean = ?</div><div>Median = ?</div>',
    'derivatives-basic': '<div>d/dx(x³) = ?</div><div>d/dx(5x²) = ?</div><div>d/dx(2x + 3) = ?</div>'
  };
  
  return previews[worksheetId] || '<div>Sample problems...</div><div>Practice exercises...</div><div>Step-by-step solutions...</div>';
}

// Get grade range for styling
function getGradeRange(grade) {
  if (grade.includes('3') || grade.includes('4') || grade.includes('5') || grade.includes('6')) {
    return '4-6';
  }
  if (grade.includes('7') || grade.includes('8') || grade.includes('9')) {
    return '7-9';
  }
  return '10-12';
}

// Open worksheet function
function openWorksheet(worksheetId) {
  currentWorksheet = worksheetId;
  showingAnswers = false;
  
  // Find worksheet info
  let worksheetInfo = null;
  for (const category in worksheetData) {
    const found = worksheetData[category].find(w => w.id === worksheetId);
    if (found) {
      worksheetInfo = found;
      break;
    }
  }
  
  if (!worksheetInfo) return;
  
  document.getElementById('modalTitle').textContent = worksheetInfo.title;
  generateWorksheet(worksheetId);
  showModal();
}

// Generate worksheet content
function generateWorksheet(worksheetId) {
  const content = document.getElementById('worksheetContent');
  const problems = generateProblems(worksheetId);
  
  content.innerHTML = `
    <div class="bg-white border border-gray-200 rounded-lg p-8 min-h-[500px]">
      <div class="text-center mb-8 border-b-2 border-gray-800 pb-4">
        <h1 class="text-2xl font-bold text-gray-800 mb-2">${getWorksheetTitle(worksheetId)}</h1>
        <div class="text-gray-600 space-y-1">
          <p>Problems: ${problems.length} | Time: ~${Math.ceil(problems.length * 1.5)} minutes</p>
          <p>Name: __________________ Date: __________________</p>
        </div>
      </div>
      
      <div class="grid ${getGridClass(worksheetId)} gap-4 mb-8">
        ${problems.map((problem, index) => `
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <div class="text-sm text-gray-500 mb-2">${index + 1}.</div>
            <div class="text-lg font-mono mb-3">${problem.question}</div>
            <div class="border-b-2 border-gray-800 inline-block min-w-[60px] ml-2 answer-line" data-answer="${problem.answer}"></div>
          </div>
        `).join('')}
      </div>
      
      <div class="text-center text-sm text-gray-500">
        <p>Show your work when necessary. Check your answers carefully.</p>
      </div>
    </div>
  `;
}

// Get grid class based on worksheet type
function getGridClass(worksheetId) {
  const singleColumnTypes = ['linear-equations', 'translating-phrases', 'quadratic-equations', 'systems-equations'];
  const twoColumnTypes = ['multiplication-2digit', 'addition-3digit', 'pythagorean-theorem', 'coordinate-geometry'];
  
  if (singleColumnTypes.includes(worksheetId)) return 'grid-cols-1 md:grid-cols-2';
  if (twoColumnTypes.includes(worksheetId)) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
}

// Generate problems based on worksheet type
function generateProblems(worksheetId) {
  const problems = [];
  let count = 25;
  
  switch(worksheetId) {
    case 'multiplication-2digit':
      count = 25;
      for(let i = 0; i < count; i++) {
        problems.push(generateMultiplication2Digit());
      }
      break;
      
    case 'addition-2digit':
      count = 25;
      for(let i = 0; i < count; i++) {
        problems.push(generateAddition2Digit());
      }
      break;
      
    case 'addition-single':
      count = 100;
      for(let i = 0; i < count; i++) {
        problems.push(generateAdditionSingle());
      }
      break;
      
    case 'addition-3digit':
      count = 25;
      for(let i = 0; i < count; i++) {
        problems.push(generateAddition3Digit());
      }
      break;
      
    case 'multiplication-facts':
      count = 100;
      for(let i = 0; i < count; i++) {
        problems.push(generateMultiplicationFacts());
      }
      break;
      
    case 'division-basic':
      count = 50;
      for(let i = 0; i < count; i++) {
        problems.push(generateDivisionBasic());
      }
      break;
      
    case 'fractions-basic':
      count = 20;
      for(let i = 0; i < count; i++) {
        problems.push(generateFractionsBasic());
      }
      break;
      
    case 'decimals-basic':
      count = 25;
      for(let i = 0; i < count; i++) {
        problems.push(generateDecimalsBasic());
      }
      break;
      
    case 'linear-equations':
      count = 15;
      for(let i = 0; i < count; i++) {
        problems.push(generateLinearEquations());
      }
      break;
      
    case 'translating-phrases':
      count = 20;
      for(let i = 0; i < count; i++) {
        problems.push(generateTranslatingPhrases());
      }
      break;
      
    case 'distributive-property':
      count = 20;
      for(let i = 0; i < count; i++) {
        problems.push(generateDistributiveProperty());
      }
      break;
      
    case 'combining-like-terms':
      count = 18;
      for(let i = 0; i < count; i++) {
        problems.push(generateCombiningLikeTerms());
      }
      break;
      
    case 'quadratic-equations':
      count = 12;
      for(let i = 0; i < count; i++) {
        problems.push(generateQuadraticEquations());
      }
      break;
      
    case 'systems-equations':
      count = 10;
      for(let i = 0; i < count; i++) {
        problems.push(generateSystemsEquations());
      }
      break;
      
    case 'pythagorean-theorem':
      count = 15;
      for(let i = 0; i < count; i++) {
        problems.push(generatePythagoreanTheorem());
      }
      break;
      
    case 'area-perimeter':
      count = 20;
      for(let i = 0; i < count; i++) {
        problems.push(generateAreaPerimeter());
      }
      break;
      
    case 'coordinate-geometry':
      count = 12;
      for(let i = 0; i < count; i++) {
        problems.push(generateCoordinateGeometry());
      }
      break;
      
    case 'angles-triangles':
      count = 15;
      for(let i = 0; i < count; i++) {
        problems.push(generateAnglesTriangles());
      }
      break;
      
    case 'circle-geometry':
      count = 18;
      for(let i = 0; i < count; i++) {
        problems.push(generateCircleGeometry());
      }
      break;
      
    case 'basic-trig-ratios':
      count = 15;
      for(let i = 0; i < count; i++) {
        problems.push(generateBasicTrigRatios());
      }
      break;
      
    case 'trig-identities':
      count = 12;
      for(let i = 0; i < count; i++) {
        problems.push(generateTrigIdentities());
      }
      break;
      
    case 'solving-triangles':
      count = 10;
      for(let i = 0; i < count; i++) {
        problems.push(generateSolvingTriangles());
      }
      break;
      
    case 'unit-circle':
      count = 20;
      for(let i = 0; i < count; i++) {
        problems.push(generateUnitCircle());
      }
      break;
      
    case 'mean-median-mode':
      count = 15;
      for(let i = 0; i < count; i++) {
        problems.push(generateMeanMedianMode());
      }
      break;
      
    case 'probability-basic':
      count = 18;
      for(let i = 0; i < count; i++) {
        problems.push(generateProbabilityBasic());
      }
      break;
      
    case 'data-interpretation':
      count = 12;
      for(let i = 0; i < count; i++) {
        problems.push(generateDataInterpretation());
      }
      break;
      
    case 'standard-deviation':
      count = 10;
      for(let i = 0; i < count; i++) {
        problems.push(generateStandardDeviation());
      }
      break;
      
    case 'derivatives-basic':
      count = 15;
      for(let i = 0; i < count; i++) {
        problems.push(generateDerivativesBasic());
      }
      break;
      
    case 'limits':
      count = 12;
      for(let i = 0; i < count; i++) {
        problems.push(generateLimits());
      }
      break;
      
    case 'chain-rule':
      count = 10;
      for(let i = 0; i < count; i++) {
        problems.push(generateChainRule());
      }
      break;
      
    case 'integration-basic':
      count = 12;
      for(let i = 0; i < count; i++) {
        problems.push(generateIntegrationBasic());
      }
      break;
      
    default:
      for(let i = 0; i < 25; i++) {
        problems.push(generateAddition2Digit());
      }
  }
  
  return problems;
}

// Problem generators for Math category
function generateMultiplication2Digit() {
  const a = Math.floor(Math.random() * 90) + 10;
  const b = Math.floor(Math.random() * 90) + 10;
  return {
    question: `${a} × ${b} =`,
    answer: a * b
  };
}

function generateAddition2Digit() {
  const a = Math.floor(Math.random() * 90) + 10;
  const b = Math.floor(Math.random() * 90) + 10;
  return {
    question: `${a} + ${b} =`,
    answer: a + b
  };
}

function generateAdditionSingle() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  return {
    question: `${a} + ${b} =`,
    answer: a + b
  };
}

function generateAddition3Digit() {
  const a = Math.floor(Math.random() * 900) + 100;
  const b = Math.floor(Math.random() * 900) + 100;
  return {
    question: `${a} + ${b} =`,
    answer: a + b
  };
}

function generateMultiplicationFacts() {
  const a = Math.floor(Math.random() * 12) + 1;
  const b = Math.floor(Math.random() * 12) + 1;
  return {
    question: `${a} × ${b} =`,
    answer: a * b
  };
}

function generateDivisionBasic() {
  const divisor = Math.floor(Math.random() * 9) + 2;
  const quotient = Math.floor(Math.random() * 15) + 1;
  const dividend = divisor * quotient;
  return {
    question: `${dividend} ÷ ${divisor} =`,
    answer: quotient
  };
}

function generateFractionsBasic() {
  const num1 = Math.floor(Math.random() * 8) + 1;
  const den1 = Math.floor(Math.random() * 8) + 2;
  const num2 = Math.floor(Math.random() * 8) + 1;
  const den2 = den1; // Same denominator for simplicity
  
  const operation = Math.random() < 0.5 ? '+' : '-';
  
  if (operation === '+') {
    return {
      question: `${num1}/${den1} + ${num2}/${den2} =`,
      answer: `${num1 + num2}/${den1}`
    };
  } else {
    if (num1 >= num2) {
      return {
        question: `${num1}/${den1} - ${num2}/${den2} =`,
        answer: `${num1 - num2}/${den1}`
      };
    } else {
      return {
        question: `${num2}/${den2} - ${num1}/${den1} =`,
        answer: `${num2 - num1}/${den2}`
      };
    }
  }
}

function generateDecimalsBasic() {
  const a = (Math.random() * 50 + 1).toFixed(2);
  const b = (Math.random() * 50 + 1).toFixed(2);
  const operation = Math.random() < 0.5 ? '+' : '-';
  
  if (operation === '+') {
    return {
      question: `${a} + ${b} =`,
      answer: (parseFloat(a) + parseFloat(b)).toFixed(2)
    };
  } else {
    const larger = Math.max(parseFloat(a), parseFloat(b));
    const smaller = Math.min(parseFloat(a), parseFloat(b));
    return {
      question: `${larger} - ${smaller} =`,
      answer: (larger - smaller).toFixed(2)
    };
  }
}

// Problem generators for Algebra category
function generateLinearEquations() {
  const a = Math.floor(Math.random() * 10) + 2;
  const b = Math.floor(Math.random() * 20) + 1;
  const c = Math.floor(Math.random() * 50) + 10;
  
  return {
    question: `${a}x + ${b} = ${c}`,
    answer: `x = ${((c - b) / a).toFixed(2)}`
  };
}

function generateTranslatingPhrases() {
  const phrases = [
    { question: "Five more than a number", answer: "x + 5" },
    { question: "Three less than a number", answer: "x - 3" },
    { question: "Twice a number", answer: "2x" },
    { question: "A number divided by four", answer: "x/4" },
    { question: "Six times a number plus two", answer: "6x + 2" },
    { question: "A number minus seven", answer: "x - 7" },
    { question: "Four more than three times a number", answer: "3x + 4" },
    { question: "Half of a number", answer: "x/2" },
    { question: "The sum of a number and eight", answer: "x + 8" },
    { question: "Five times a number minus one", answer: "5x - 1" }
  ];
  
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function generateDistributiveProperty() {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 10) + 1;
  const c = Math.floor(Math.random() * 10) + 1;
  
  return {
    question: `${a}(x + ${b}) =`,
    answer: `${a}x + ${a * b}`
  };
}

function generateCombiningLikeTerms() {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 1;
  const c = Math.floor(Math.random() * 15) + 1;
  
  return {
    question: `${a}x + ${b}x + ${c} =`,
    answer: `${a + b}x + ${c}`
  };
}

function generateQuadraticEquations() {
  const a = 1;
  const p = Math.floor(Math.random() * 8) + 1;
  const q = Math.floor(Math.random() * 8) + 1;
  const b = p + q;
  const c = p * q;
  
  return {
    question: `x² + ${b}x + ${c} = 0`,
    answer: `x = -${p}, -${q}`
  };
}

function generateSystemsEquations() {
  const a = Math.floor(Math.random() * 5) + 1;
  const b = Math.floor(Math.random() * 5) + 1;
  const c = Math.floor(Math.random() * 20) + 5;
  const d = Math.floor(Math.random() * 20) + 5;
  
  return {
    question: `${a}x + ${b}y = ${c}<br>x + y = ${d}`,
    answer: `Solve by substitution`
  };
}

// Problem generators for Geometry category
function generatePythagoreanTheorem() {
  const a = Math.floor(Math.random() * 12) + 3;
  const b = Math.floor(Math.random() * 12) + 3;
  const c = Math.sqrt(a * a + b * b);
  
  return {
    question: `Right triangle: a = ${a}, b = ${b}, find c`,
    answer: c.toFixed(2)
  };
}

function generateAreaPerimeter() {
  const shapes = ['rectangle', 'square', 'triangle', 'circle'];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  const measure = Math.random() < 0.5 ? 'area' : 'perimeter';
  
  if (shape === 'rectangle') {
    const length = Math.floor(Math.random() * 15) + 5;
    const width = Math.floor(Math.random() * 10) + 3;
    if (measure === 'area') {
      return {
        question: `Area of rectangle: l = ${length}cm, w = ${width}cm`,
        answer: `${length * width} cm²`
      };
    } else {
      return {
        question: `Perimeter of rectangle: l = ${length}cm, w = ${width}cm`,
        answer: `${2 * (length + width)} cm`
      };
    }
  } else if (shape === 'square') {
    const side = Math.floor(Math.random() * 12) + 4;
    if (measure === 'area') {
      return {
        question: `Area of square: side = ${side}cm`,
        answer: `${side * side} cm²`
      };
    } else {
      return {
        question: `Perimeter of square: side = ${side}cm`,
        answer: `${4 * side} cm`
      };
    }
  } else if (shape === 'triangle') {
    const base = Math.floor(Math.random() * 15) + 5;
    const height = Math.floor(Math.random() * 12) + 3;
    return {
      question: `Area of triangle: base = ${base}cm, height = ${height}cm`,
      answer: `${(base * height) / 2} cm²`
    };
  } else {
    const radius = Math.floor(Math.random() * 8) + 3;
    if (measure === 'area') {
      return {
        question: `Area of circle: r = ${radius}cm (π = 3.14)`,
        answer: `${(3.14 * radius * radius).toFixed(2)} cm²`
      };
    } else {
      return {
        question: `Circumference of circle: r = ${radius}cm (π = 3.14)`,
        answer: `${(2 * 3.14 * radius).toFixed(2)} cm`
      };
    }
  }
}

function generateCoordinateGeometry() {
  const x1 = Math.floor(Math.random() * 20) - 10;
  const y1 = Math.floor(Math.random() * 20) - 10;
  const x2 = Math.floor(Math.random() * 20) - 10;
  const y2 = Math.floor(Math.random() * 20) - 10;
  
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  
  return {
    question: `Distance between (${x1}, ${y1}) and (${x2}, ${y2})`,
    answer: distance.toFixed(2)
  };
}

function generateAnglesTriangles() {
  const angle1 = Math.floor(Math.random() * 80) + 30;
  const angle2 = Math.floor(Math.random() * (150 - angle1)) + 30;
  const angle3 = 180 - angle1 - angle2;
  
  return {
    question: `Triangle angles: ${angle1}°, ${angle2}°, find third angle`,
    answer: `${angle3}°`
  };
}

function generateCircleGeometry() {
  const radius = Math.floor(Math.random() * 10) + 3;
  const measure = Math.random() < 0.5 ? 'area' : 'circumference';
  
  if (measure === 'area') {
    return {
      question: `Circle area: radius = ${radius}cm (π = 3.14)`,
      answer: `${(3.14 * radius * radius).toFixed(2)} cm²`
    };
  } else {
    return {
      question: `Circle circumference: radius = ${radius}cm (π = 3.14)`,
      answer: `${(2 * 3.14 * radius).toFixed(2)} cm`
    };
  }
}

// Problem generators for Trigonometry category
function generateBasicTrigRatios() {
  const angles = [30, 45, 60, 90];
  const angle = angles[Math.floor(Math.random() * angles.length)];
  const functions = ['sin', 'cos', 'tan'];
  const func = functions[Math.floor(Math.random() * functions.length)];
  
  const values = {
    'sin': { 30: '1/2', 45: '√2/2', 60: '√3/2', 90: '1' },
    'cos': { 30: '√3/2', 45: '√2/2', 60: '1/2', 90: '0' },
    'tan': { 30: '1/√3', 45: '1', 60: '√3', 90: 'undefined' }
  };
  
  return {
    question: `${func}(${angle}°) =`,
    answer: values[func][angle]
  };
}

function generateTrigIdentities() {
  const identities = [
    { question: 'sin²θ + cos²θ =', answer: '1' },
    { question: 'tan θ =', answer: 'sin θ / cos θ' },
    { question: 'sin(90° - θ) =', answer: 'cos θ' },
    { question: 'cos(90° - θ) =', answer: 'sin θ' }
  ];
  
  return identities[Math.floor(Math.random() * identities.length)];
}

function generateSolvingTriangles() {
  const a = Math.floor(Math.random() * 15) + 5;
  const b = Math.floor(Math.random() * 15) + 5;
  const angleC = Math.floor(Math.random() * 60) + 30;
  
  return {
    question: `Triangle: a = ${a}, b = ${b}, C = ${angleC}°. Find c using cosine rule`,
    answer: 'Use c² = a² + b² - 2ab cos C'
  };
}

function generateUnitCircle() {
  const angles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
  const angle = angles[Math.floor(Math.random() * angles.length)];
  
  return {
    question: `Unit circle: Find coordinates at ${angle}°`,
    answer: `(cos ${angle}°, sin ${angle}°)`
  };
}

// Problem generators for Statistics category
function generateMeanMedianMode() {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(Math.floor(Math.random() * 50) + 10);
  }
  
  const measures = ['mean', 'median', 'mode'];
  const measure = measures[Math.floor(Math.random() * measures.length)];
  
  if (measure === 'mean') {
    const sum = data.reduce((a, b) => a + b, 0);
    return {
      question: `Find mean: ${data.join(', ')}`,
      answer: (sum / data.length).toFixed(2)
    };
  } else if (measure === 'median') {
    const sorted = [...data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 === 0 ? 
      ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2) : 
      sorted[mid].toString();
    return {
      question: `Find median: ${data.join(', ')}`,
      answer: median
    };
  } else {
    return {
      question: `Find mode: ${data.join(', ')}`,
      answer: 'Most frequent value'
    };
  }
}

function generateProbabilityBasic() {
  const scenarios = [
    { question: 'Probability of heads in coin flip', answer: '1/2' },
    { question: 'Probability of rolling 6 on dice', answer: '1/6' },
    { question: 'Probability of drawing red card from deck', answer: '1/2' },
    { question: 'Probability of rolling even number on dice', answer: '1/2' }
  ];
  
  return scenarios[Math.floor(Math.random() * scenarios.length)];
}

function generateDataInterpretation() {
  const values = [10, 15, 20, 25, 30, 35, 40];
  const value = values[Math.floor(Math.random() * values.length)];
  
  return {
    question: `Bar chart shows value of ${value}. What percentage of total (100)?`,
    answer: `${value}%`
  };
}

function generateStandardDeviation() {
  const data = [10, 12, 14, 16, 18];
  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const variance = data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / data.length;
  
  return {
    question: `Find standard deviation: ${data.join(', ')}`,
    answer: Math.sqrt(variance).toFixed(2)
  };
}

// Problem generators for Calculus category
function generateDerivativesBasic() {
  const power = Math.floor(Math.random() * 6) + 2;
  const coefficient = Math.floor(Math.random() * 10) + 1;
  
  return {
    question: `d/dx(${coefficient}x^${power}) =`,
    answer: `${coefficient * power}x^${power - 1}`
  };
}

function generateLimits() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  
  return {
    question: `lim(x→${a}) (x + ${b}) =`,
    answer: `${a + b}`
  };
}

function generateChainRule() {
  const outer = Math.floor(Math.random() * 5) + 2;
  const inner = Math.floor(Math.random() * 5) + 2;
  
  return {
    question: `d/dx[(${inner}x + 1)^${outer}] =`,
    answer: `${outer * inner}(${inner}x + 1)^${outer - 1}`
  };
}

function generateIntegrationBasic() {
  const power = Math.floor(Math.random() * 5) + 1;
  const coefficient = Math.floor(Math.random() * 10) + 1;
  
  return {
    question: `∫ ${coefficient}x^${power} dx =`,
    answer: `${(coefficient / (power + 1)).toFixed(2)}x^${power + 1} + C`
  };
}

// Get worksheet title
function getWorksheetTitle(worksheetId) {
  for (const category in worksheetData) {
    const worksheet = worksheetData[category].find(w => w.id === worksheetId);
    if (worksheet) {
      return worksheet.title;
    }
  }
  return 'Math Worksheet';
}

// Show answer key
function showAnswerKey() {
  showingAnswers = !showingAnswers;
  const answerLines = document.querySelectorAll('.answer-line');
  const button = document.querySelector('[onclick="showAnswerKey()"]');
  
  if (showingAnswers) {
    answerLines.forEach(line => {
      line.textContent = line.dataset.answer;
      line.classList.add('bg-yellow-100', 'text-black', 'font-bold', 'px-2', 'py-1');
    });
    button.textContent = 'Hide Answers';
  } else {
    answerLines.forEach(line => {
      line.textContent = '';
      line.classList.remove('bg-yellow-100', 'text-black', 'font-bold', 'px-2', 'py-1');
    });
    button.textContent = 'Show Answers';
  }
}

// Print worksheet
function printWorksheet() {
  const printContent = document.getElementById('worksheetContent').innerHTML;
  const printWindow = window.open('', '_blank');
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Math Worksheet</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .worksheet-header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 15px; }
        .grid { display: grid; gap: 15px; margin-bottom: 30px; }
        .grid-cols-1 { grid-template-columns: 1fr; }
        .md\\:grid-cols-2 { grid-template-columns: 1fr 1fr; }
        .lg\\:grid-cols-3 { grid-template-columns: 1fr 1fr 1fr; }
        .xl\\:grid-cols-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
        .problem { padding: 15px; border: 1px solid #ddd; text-align: center; }
        .answer-line { border-bottom: 1px solid #333; display: inline-block; min-width: 60px; margin-left: 10px; }
        @media print { .no-print { display: none !important; } }
      </style>
    </head>
    <body>
      ${printContent}
    </body>
    </html>
  `);
  
  printWindow.document.close();
  printWindow.print();
}

// Modal functions
function showModal() {
  document.getElementById('worksheetModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('worksheetModal').classList.add('hidden');
  document.body.style.overflow = 'auto';
  currentWorksheet = null;
  showingAnswers = false;
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('worksheetModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
});

console.log('Math Worksheets JavaScript loaded successfully!');