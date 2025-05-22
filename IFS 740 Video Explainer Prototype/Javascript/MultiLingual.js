const translations = {
  en: {
    title: "Simple Job Contract Explainer",
    workingHours: "💼 Working Hours",
    workingHoursText: "Check that the contract clearly states how many hours you will work per day or week.",
    pay: "💰 Pay",
    payText: "Understand how much you will be paid, how often, and if there are any deductions.",
    leave: "🌴 Leave",
    leaveText: "Check your rights to sick leave, annual leave, and family responsibility leave.",
    termination: "🛑 Termination",
    terminationText: "Make sure the contract says how the job can end.",
    quizButton: "📝 Take a Quiz",
    legalHelp: "📞 Legal Help",
    submitAnswer: "Submit Answer",
    questions: [
      { question: "What should be included in a job contract?", options: ["Favorite color", "Salary and working hours", "Pet's name"], answer: "Salary and working hours" },
      { question: "What does 'termination' in a contract mean?", options: ["Vacation days", "How the job ends", "Lunch breaks"], answer: "How the job ends" },
      { question: "Is it important to check deductions from your salary?", options: ["Yes", "No"], answer: "Yes" }
    ]
  },
  xh: {
    title: "Inkcazo Elula Ngesivumelwano Somsebenzi",
    workingHours: "💼 Iiyure Zomsebenzi",
    workingHoursText: "Qinisekisa ukuba isivumelwano sichaza kakuhle iiyure oza kusebenza kuzo.",
    pay: "💰 Umvuzo",
    payText: "Funda ukuba uza kufumana malini, kangaphi, kwaye ukuba kukho naziphi na iintlawulo ezithatyathwayo.",
    leave: "🌴 Iiholide",
    leaveText: "Jonga amalungelo akho kwiiholide zonyaka, ezokugula, nezosapho.",
    termination: "🛑 Ukuyeka Umsebenzi",
    terminationText: "Isivumelwano masichaze ukuba umsebenzi unokupheliswa njani.",
    quizButton: "📝 Thatha Uvavanyo",
    legalHelp: "📞 Uncedo Lwezomthetho",
    submitAnswer: "Thumela Impendulo",
    questions: [
      { question: "Yintoni ekufuneka ibe kwisivumelwano somsebenzi?", options: ["Umbala owuthandayo", "Umvuzo kunye neeyure zomsebenzi", "Igama lesilwanyana"], answer: "Umvuzo kunye neeyure zomsebenzi" },
      { question: "Kuthetha ukuthini 'ukuyeka umsebenzi' kwisivumelwano?", options: ["Iiholide", "Indlela umsebenzi ophela ngayo", "Ikhefu lesidlo"], answer: "Indlela umsebenzi ophela ngayo" },
      { question: "Ngaba kubalulekile ukukhangela izithintelo emvuzweni wakho?", options: ["Ewe", "Hayi"], answer: "Ewe" }
    ]
  },
  af: {
    title: "Eenvoudige Werk Kontrak Uitleg",
    workingHours: "💼 Werkure",
    workingHoursText: "Maak seker die kontrak wys hoeveel ure jy per dag of week gaan werk.",
    pay: "💰 Salaris",
    payText: "Weet hoeveel jy gaan verdien, hoe gereeld, en of daar enige aftrekkings is.",
    leave: "🌴 Verlof",
    leaveText: "Kyk na jou regte op siekteverlof, jaarlikse verlof en familieverantwoordelikheidsverlof.",
    termination: "🛑 Beëindiging",
    terminationText: "Die kontrak moet sê hoe die werk beëindig kan word.",
    quizButton: "📝 Neem 'n Vasvra",
    legalHelp: "📞 Regshulp",
    submitAnswer: "Dien Antwoord In",
    questions: [
      { question: "Wat moet in 'n werk kontrak ingesluit word?", options: ["Gunsteling kleur", "Salaris en werkure", "Troeteldier se naam"], answer: "Salaris en werkure" },
      { question: "Wat beteken 'beëindiging' in 'n kontrak?", options: ["Vakansiedae", "Hoe die werk eindig", "Middagete pouses"], answer: "Hoe die werk eindig" },
      { question: "Is dit belangrik om aftrekkings van jou salaris na te gaan?", options: ["Ja", "Nee"], answer: "Ja" }
    ]
  }
};

let quizQuestions = translations["en"].questions; 
let currentQuestionIndex = 0;

function startQuiz() {
  document.getElementById('quiz-section').style.display = 'block';
  currentQuestionIndex = 0; // Reset quiz progress
  displayQuestion();
}

function displayQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    document.getElementById('quiz-question').innerText = "🎉 Quiz Completed!";
    document.getElementById('quiz-options').innerHTML = "";
    return;
  }

  const quiz = quizQuestions[currentQuestionIndex];
  document.getElementById('quiz-question').innerText = quiz.question;

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = "";

  quiz.options.forEach(option => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = option;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + option));
    
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement("br"));
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  const userAnswer = selectedOption.value;
  const correctAnswer = quizQuestions[currentQuestionIndex].answer;

  // Show result
  if (userAnswer === correctAnswer) {
    document.getElementById('quiz-result').innerText = "✅ Correct!";
  } else {
    document.getElementById('quiz-result').innerText = `❌ Incorrect! Correct answer: ${correctAnswer}`;
  }

  // Proceed to next question after delay
  currentQuestionIndex++;
  setTimeout(() => {
    document.getElementById('quiz-result').innerText = "";
    displayQuestion();
  }, 1500);
}

function switchLanguage() {
  const lang = document.getElementById('language-select').value;
  const t = translations[lang];

  // Update all text elements dynamically
  document.getElementById('title').innerText = t.title;

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    el.innerText = t[key];
  });

  document.querySelector("button[onclick='startQuiz()']").innerText = t.quizButton;
  document.querySelector("button[onclick='openLegalSupport()']").innerText = t.legalHelp;
  document.querySelector("button[onclick='checkAnswer()']").innerText = t.submitAnswer;

  quizQuestions = t.questions; // Update quiz dynamically
  currentQuestionIndex = 0;
  displayQuestion();

  // 🎥 Change video source based on selected language
  const videoSource = document.getElementById('video-source');
  const video = document.getElementById('contract-video');

  switch (lang) {
    case 'en':
      videoSource.src = 'videos/english.mp4';
      break;
    case 'xh':
      videoSource.src = 'videos/xhosa.mp4';
      break;
    case 'af':
      videoSource.src = 'videos/afrikaans.mp4';
      break;
  }

  video.load(); // Refresh video player with new source
}

function openLegalSupport() {
  window.open("https://legal-aid.co.za/domestic-workers/", "_blank");
}

document.addEventListener('DOMContentLoaded', switchLanguage);
