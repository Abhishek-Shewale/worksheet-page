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
      description: 'Practice multiplication with 2-digit numbers (25 problems)',
      grade: '4-5',
      difficulty: 'medium',
    
    },
    {
      id: 'addition-2digit',
      title: '2-Digit Plus 2-Digit Addition',
      description: 'Addition with some regrouping (25 problems)',
      grade: '4-5',
      difficulty: 'easy',
     
    },
    {
      id: 'addition-single',
      title: '100 Single-Digit Addition Questions',
      description: 'Quick addition practice (100 problems)',
      grade: '4-5',
      difficulty: 'easy',
     
    },
    {
      id: 'addition-3digit',
      title: '3-Digit Plus 3-Digit Addition',
      description: 'Addition with regrouping (25 problems)',
      grade: '4-5',
      difficulty: 'medium',
     
    },
    {
      id: 'multiplication-facts',
      title: 'Multiplication Facts to 100',
      description: 'Basic multiplication tables (100 problems)',
      grade: '4-5',
      difficulty: 'easy',
     
    },
    {
      id: 'division-basic',
      title: 'Basic Division Facts',
      description: 'Division with single digits (50 problems)',
      grade: '5-6',
      difficulty: 'easy',
     
    },
    {
      id: 'fractions-basic',
      title: 'Introduction to Fractions',
      description: 'Basic fraction concepts (20 problems)',
      grade: '4-5',
      difficulty: 'medium',
     
    },
    {
      id: 'decimals-basic',
      title: 'Decimal Operations',
      description: 'Addition and subtraction with decimals (25 problems)',
      grade: '5-6',
      difficulty: 'medium',
     
    }
  ],
  
  algebra: [
    {
      id: 'linear-equations',
      title: 'Solving Linear Equations',
      description: 'Basic linear equations with one variable (15 problems)',
      grade: '7-8',
      difficulty: 'medium',
     
    },
    {
      id: 'translating-phrases',
      title: 'Translating Algebraic Phrases',
      description: 'Converting words to algebraic expressions (20 problems)',
      grade: '7-8',
      difficulty: 'easy',
     
    },
    {
      id: 'distributive-property',
      title: 'Distributive Property',
      description: 'Expanding expressions using distributive property (20 problems)',
      grade: '7-8',
      difficulty: 'medium',
     
    },
    {
      id: 'combining-like-terms',
      title: 'Combining Like Terms',
      description: 'Simplifying algebraic expressions (18 problems)',
      grade: '7-8',
      difficulty: 'medium',
     
    },
    {
      id: 'quadratic-equations',
      title: 'Quadratic Equations',
      description: 'Solving quadratic equations by factoring (12 problems)',
      grade: '9-10',
      difficulty: 'hard',
     
    },
    {
      id: 'systems-equations',
      title: 'Systems of Equations',
      description: 'Solving systems using substitution (10 problems)',
      grade: '9-10',
      difficulty: 'hard',
     
    }
  ],
  
  geometry: [
    {
      id: 'pythagorean-theorem',
      title: 'Pythagorean Theorem',
      description: 'Finding missing sides of right triangles (15 problems)',
      grade: '8-9',
      difficulty: 'medium',
     
    },
    {
      id: 'area-perimeter',
      title: 'Area and Perimeter',
      description: 'Basic shapes area and perimeter (20 problems)',
      grade: '6-7',
      difficulty: 'easy',
     
    },
    {
      id: 'coordinate-geometry',
      title: 'Coordinate Geometry',
      description: 'Distance and midpoint formulas (12 problems)',
      grade: '8-9',
      difficulty: 'medium',
     
    },
    {
      id: 'angles-triangles',
      title: 'Angles in Triangles',
      description: 'Finding missing angles (15 problems)',
      grade: '7-8',
      difficulty: 'medium',
     
    },
    {
      id: 'circle-geometry',
      title: 'Circle Geometry',
      description: 'Circumference and area of circles (18 problems)',
      grade: '7-8',
      difficulty: 'medium',
     
    }
  ],
  
  trigonometry: [
    {
      id: 'basic-trig-ratios',
      title: 'Basic Trigonometric Ratios',
      description: 'Sin, cos, tan for special angles (15 problems)',
      grade: '9-10',
      difficulty: 'medium',
     
    },
    {
      id: 'trig-identities',
      title: 'Trigonometric Identities',
      description: 'Basic trig identities and proofs (12 problems)',
      grade: '10-11',
      difficulty: 'hard',
     
    },
    {
      id: 'solving-triangles',
      title: 'Solving Triangles',
      description: 'Using sine and cosine rules (10 problems)',
      grade: '10-11',
      difficulty: 'hard',
     
    },
    {
      id: 'unit-circle',
      title: 'Unit Circle',
      description: 'Angles and coordinates on unit circle (20 problems)',
      grade: '10-11',
      difficulty: 'hard',
     
    }
  ],
  
  statistics: [
    {
      id: 'mean-median-mode',
      title: 'Mean, Median, Mode',
      description: 'Measures of central tendency (15 problems)',
      grade: '6-7',
      difficulty: 'easy',
     
    },
    {
      id: 'probability-basic',
      title: 'Basic Probability',
      description: 'Simple probability calculations (18 problems)',
      grade: '7-8',
      difficulty: 'medium',
     
    },
    {
      id: 'data-interpretation',
      title: 'Data Interpretation',
      description: 'Reading charts and graphs (12 problems)',
      grade: '6-8',
      difficulty: 'medium',
     
    },
    {
      id: 'standard-deviation',
      title: 'Standard Deviation',
      description: 'Calculating standard deviation (10 problems)',
      grade: '9-10',
      difficulty: 'hard',
     
    }
  ],
  
  calculus: [
    {
      id: 'derivatives-basic',
      title: 'Basic Derivatives',
      description: 'Power rule and basic derivatives (15 problems)',
      grade: '11-12',
      difficulty: 'hard',
     
    },
    {
      id: 'limits',
      title: 'Limits',
      description: 'Finding limits of functions (12 problems)',
      grade: '11-12',
      difficulty: 'hard',
     
    },
    {
      id: 'chain-rule',
      title: 'Chain Rule',
      description: 'Derivatives using chain rule (10 problems)',
      grade: '11-12',
      difficulty: 'hard',
     
    },
    {
      id: 'integration-basic',
      title: 'Basic Integration',
      description: 'Fundamental integration techniques (12 problems)',
      grade: '11-12',
      difficulty: 'hard',
     
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
    

  `;
  
  return card;
}

// Get preview content for worksheet
function getPreviewContent(worksheetId) {
  const previews = {
    // Math worksheets
    'multiplication-2digit': '<div>14 × 23 = ___</div><div>56 × 47 = ___</div><div>38 × 29 = ___</div><div>67 × 54 = ___</div><div>45 × 36 = ___</div><div>82 × 19 = ___</div>',
    
    'addition-2digit': '<div>23 + 45 = ___</div><div>67 + 34 = ___</div><div>89 + 12 = ___</div><div>56 + 78 = ___</div><div>34 + 29 = ___</div><div>45 + 67 = ___</div>',
    
    'addition-single': '<div class="grid grid-cols-4 gap-1"><div>2+3=</div><div>5+4=</div><div>7+1=</div><div>8+2=</div><div>3+6=</div><div>9+1=</div><div>4+5=</div><div>6+3=</div><div>1+8=</div><div>7+2=</div><div>5+5=</div><div>9+0=</div></div>',
    
    'addition-3digit': '<div>234 + 567 = ___</div><div>456 + 789 = ___</div><div>123 + 456 = ___</div><div>678 + 234 = ___</div><div>345 + 678 = ___</div><div>789 + 123 = ___</div>',
    
    'multiplication-facts': '<div class="grid grid-cols-3 gap-1"><div>7×8=</div><div>9×6=</div><div>4×7=</div><div>8×5=</div><div>6×9=</div><div>5×7=</div><div>9×4=</div><div>8×6=</div><div>7×5=</div></div>',
    
    'division-basic': '<div>56 ÷ 8 = ___</div><div>45 ÷ 9 = ___</div><div>36 ÷ 6 = ___</div><div>72 ÷ 8 = ___</div><div>48 ÷ 6 = ___</div><div>63 ÷ 7 = ___</div>',
    
    'fractions-basic': '<div>1/2 + 1/4 = ___</div><div>3/4 - 1/2 = ___</div><div>2/3 + 1/6 = ___</div><div>5/6 - 1/3 = ___</div><div>1/4 + 1/8 = ___</div><div>7/8 - 1/4 = ___</div>',
    
    'decimals-basic': '<div>12.5 + 8.3 = ___</div><div>15.7 - 9.2 = ___</div><div>23.4 + 11.8 = ___</div><div>28.6 - 14.9 = ___</div><div>16.2 + 7.8 = ___</div><div>31.5 - 18.7 = ___</div>',
    
    // Algebra worksheets
    'linear-equations': '<div>2x + 3 = 15</div><div>5x - 7 = 21</div><div>3x + 8 = 31</div><div>4x - 9 = 23</div><div>6x + 5 = 41</div><div>7x - 12 = 35</div>',
    
    'translating-phrases': '<div>• Five more than a number</div><div>• Twice a number</div><div>• A number divided by 4</div><div>• Three less than a number</div><div>• Six times a number plus 2</div><div>• Half of a number</div>',
    
    'distributive-property': '<div>3(x + 4) = ___</div><div>5(2x - 3) = ___</div><div>2(x + 7) = ___</div><div>4(3x - 5) = ___</div><div>6(x + 2) = ___</div><div>7(2x - 1) = ___</div>',
    
    'combining-like-terms': '<div>3x + 5x = ___</div><div>7x - 2x + 4 = ___</div><div>2x + 3x + 1 = ___</div><div>8x - 3x + 7 = ___</div><div>4x + 6x - 2 = ___</div><div>9x - 4x + 5 = ___</div>',
    
    'quadratic-equations': '<div>x² + 5x + 6 = 0</div><div>x² - 3x - 4 = 0</div><div>x² + 2x - 8 = 0</div><div>x² - 7x + 12 = 0</div><div>x² + 4x - 5 = 0</div><div>x² - 6x + 9 = 0</div>',
    
    'systems-equations': '<div>2x + y = 8</div><div>x - y = 1</div><div style="margin-top:8px;">3x + 2y = 12</div><div>x + y = 4</div><div style="margin-top:8px;">4x - y = 7</div><div>2x + 3y = 13</div>',
    
    // Geometry worksheets
    'pythagorean-theorem': '<div>a² + b² = c²</div><div>Find c: a=3, b=4</div><div>Find c: a=5, b=12</div><div>Find c: a=8, b=15</div><div>Find c: a=7, b=24</div><div>Find c: a=9, b=12</div>',
    
    'area-perimeter': '<div>Rectangle: l=8cm, w=5cm</div><div>Area = ___ cm²</div><div>Square: side=6cm</div><div>Perimeter = ___ cm</div><div>Triangle: base=10cm, h=7cm</div><div>Area = ___ cm²</div>',
    
    'coordinate-geometry': '<div>Distance formula:</div><div>A(2,3) to B(5,7)</div><div>d = ___</div><div>C(-1,4) to D(3,1)</div><div>d = ___</div><div>E(0,0) to F(6,8)</div>',
    
    'angles-triangles': '<div>∠A = 60°, ∠B = 50°</div><div>Find ∠C = ___°</div><div>∠X = 75°, ∠Y = 45°</div><div>Find ∠Z = ___°</div><div>∠P = 90°, ∠Q = 35°</div><div>Find ∠R = ___°</div>',
    
    'circle-geometry': '<div>Circle: r = 5cm</div><div>Area = πr² = ___</div><div>Circumference = 2πr = ___</div><div>Circle: r = 8cm</div><div>Area = ___ cm²</div><div>Circumference = ___ cm</div>',
    
    // Trigonometry worksheets
    'basic-trig-ratios': '<div>sin(30°) = ___</div><div>cos(45°) = ___</div><div>tan(60°) = ___</div><div>sin(90°) = ___</div><div>cos(60°) = ___</div><div>tan(45°) = ___</div>',
    
    'trig-identities': '<div>sin²θ + cos²θ = ___</div><div>tan θ = sin θ / ___</div><div>sin(90° - θ) = ___</div><div>cos(90° - θ) = ___</div><div>1 + tan²θ = ___</div><div>sec²θ - tan²θ = ___</div>',
    
    'solving-triangles': '<div>Triangle: a=8, b=6, C=45°</div><div>Find c using cosine rule</div><div>c² = a² + b² - 2ab cos C</div><div>Triangle: a=10, b=12, C=60°</div><div>Find c = ___</div><div>Show your work</div>',
    
    'unit-circle': '<div>θ = 90°: (cos θ, sin θ) = ?</div><div>θ = 180°: (cos θ, sin θ) = ?</div><div>θ = 270°: (cos θ, sin θ) = ?</div><div>θ = 45°: (cos θ, sin θ) = ?</div><div>θ = 30°: (cos θ, sin θ) = ?</div>',
    
    // Statistics worksheets
    'mean-median-mode': '<div>Data: 2, 4, 6, 8, 10</div><div>Mean = ___</div><div>Median = ___</div><div>Data: 5, 7, 3, 9, 1, 6</div><div>Mean = ___</div><div>Mode = ___</div>',
    
    'probability-basic': '<div>Coin flip: P(Heads) = ___</div><div>Die roll: P(6) = ___</div><div>P(Even number) = ___</div><div>Card draw: P(Red) = ___</div><div>P(Ace) = ___</div><div>P(Face card) = ___</div>',
    
    'data-interpretation': '<div>Bar chart shows:</div><div>Math: 25 students</div><div>Science: 30 students</div><div>English: 20 students</div><div>What % chose Math?</div><div>Answer: ___%</div>',
    
    'standard-deviation': '<div>Data: 10, 12, 14, 16, 18</div><div>Mean = ___</div><div>Variance = ___</div><div>Standard deviation = ___</div><div>Show calculation steps</div><div>Round to 2 decimal places</div>',
    
    // Calculus worksheets
    'derivatives-basic': '<div>d/dx(x³) = ___</div><div>d/dx(5x²) = ___</div><div>d/dx(2x + 3) = ___</div><div>d/dx(x⁴ - 3x) = ___</div><div>d/dx(6x² + 4x - 1) = ___</div><div>d/dx(x⁵) = ___</div>',
    
    'limits': '<div>lim(x→2) (x + 3) = ___</div><div>lim(x→1) (x² - 1) = ___</div><div>lim(x→0) (sin x)/x = ___</div><div>lim(x→∞) 1/x = ___</div><div>lim(x→3) (x² - 9)/(x - 3) = ___</div>',
    
    'chain-rule': '<div>d/dx[(3x + 1)²] = ___</div><div>d/dx[sin(2x)] = ___</div><div>d/dx[(x² + 1)³] = ___</div><div>d/dx[cos(3x - 1)] = ___</div><div>d/dx[(5x - 2)⁴] = ___</div>',
    
    'integration-basic': '<div>∫ x² dx = ___</div><div>∫ 3x dx = ___</div><div>∫ (x + 1) dx = ___</div><div>∫ 2x³ dx = ___</div><div>∫ (4x² - 2x) dx = ___</div><div>∫ x⁻¹ dx = ___</div>'
  };
  
  return previews[worksheetId] || '<div>Math problems...</div><div>Practice exercises...</div><div>Step-by-step solutions...</div>';
}

// Get grade range for styling
function getGradeRange(grade) {
  if (grade.includes('4') || grade.includes('5') || grade.includes('6')) {
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