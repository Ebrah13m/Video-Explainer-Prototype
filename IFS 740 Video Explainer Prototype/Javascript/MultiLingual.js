const translations = {
  en: {
    title: "Simple Job Contract Explainer",
    workingHours: "💼 Working Hours",
    workingHoursText: "Check that the contract clearly states how many hours you will work per day or week. Make sure it fits with your lifestyle and transport.",
    pay: "💰 Pay",
    payText: "Understand how much you will be paid, how often, and if there are any deductions. Ask if it's above the minimum wage.",
    leave: "🌴 Leave",
    leaveText: "Check your rights to sick leave, annual leave, and family responsibility leave. Know when and how you can take time off.",
    termination: "🛑 Termination",
    terminationText: "Make sure the contract says how the job can end. Know what notice you need to give or receive before leaving the job."
  },
  xh: {
    title: "Inkcazo Elula Ngesivumelwano Somsebenzi",
    workingHours: "💼 Iiyure Zomsebenzi",
    workingHoursText: "Qinisekisa ukuba isivumelwano sichaza kakuhle iiyure oza kusebenza kuzo ngosuku okanye ngeveki.",
    pay: "💰 Umvuzo",
    payText: "Funda ukuba uza kufumana malini, kangaphi, kwaye ukuba kukho naziphi na iintlawulo ezithatyathwayo.",
    leave: "🌴 Iiholide",
    leaveText: "Jonga amalungelo akho kwiiholide zonyaka, ezokugula, nezosapho.",
    termination: "🛑 Ukuyeka Umsebenzi",
    terminationText: "Isivumelwano masichaze ukuba umsebenzi unokupheliswa njani kwaye kufuneka unikezele ngexesha elifanelekileyo."
  },
  af: {
    title: "Eenvoudige Werk Kontrak Uitleg",
    workingHours: "💼 Werkure",
    workingHoursText: "Maak seker die kontrak wys hoeveel ure jy per dag of week gaan werk. Dit moet by jou lewe pas.",
    pay: "💰 Salaris",
    payText: "Weet hoeveel jy gaan verdien, hoe gereeld, en of daar enige aftrekkings is. Vra of dit bo minimum loon is.",
    leave: "🌴 Verlof",
    leaveText: "Kyk na jou regte op siekteverlof, jaarlikse verlof en familieverantwoordelikheidsverlof.",
    termination: "🛑 Beëindiging",
    terminationText: "Die kontrak moet sê hoe die werk beëindig kan word. Weet hoeveel kennisgewing vereis word."
  }
};

function switchLanguage() {
  const lang = document.getElementById('language-select').value;
  const t = translations[lang];

  // Update the text content
  document.getElementById('title').innerText = t.title;
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    el.innerText = t[key];
  });

  // Update video source
  const videoSource = document.getElementById('video-source');
  const video = document.getElementById('contract-video');

  switch (lang) {
    case 'en':
      videoSource.src = 'videos/english.mp4';
      break;
    case 'xh':
      videoSource.src = 'videos/english.mp4'; //Xhosa
      break;
    case 'af':
      videoSource.src = 'videos/english.mp4'; //Afrikaans
      break;
  }

  video.load(); // Reload video with new source
}

function toggleSection(element) {
  const content = element.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Load default language when page loads
document.addEventListener('DOMContentLoaded', switchLanguage);
