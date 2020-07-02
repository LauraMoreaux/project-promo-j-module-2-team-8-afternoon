'use strict';

//COLOR PALLETE

//SELECTORS...
const coldPalette = document.querySelector('.cold-palette');
coldPalette.colorPalette = 'cold-';
const hotPalette = document.querySelector('.hot-palette');
hotPalette.colorPalette = 'red-';
const mixPalette = document.querySelector('.mix-palette');
mixPalette.colorPalette = 'mix-';

const cardObj = {
  //dont modify the property names !important
  name: document.querySelector('.js-name'),
  job: document.querySelector('.js-job'),
  border: document.querySelector('.js-border-color'),
  icons: document.querySelectorAll('.js-socialMedia-icons'),
};

//FUNCTIONS
function changePalette(event) {
  //for every property name inside card object
  for (const key in cardObj) {
    if (key === 'icons') {
      //for every property name inside icons object
      for (const item in cardObj[key]) {
        //remove every class related to color
        cardObj[key][item].classList.remove(
          `cold-icon`,
          `red-icon`,
          `mix-icon`
        );
        //add in the icon, inside the icons, the correct colorPalette, property defined
        //at the start below selectors
        cardObj[key][item].classList.add(
          `${event.currentTarget.colorPalette}icon`
        );
      }
    } else {
      //remove every key (name, job, etc) and add the correct palette related to the key
      cardObj[key].classList.remove(`cold-${key}`, `red-${key}`, `mix-${key}`);
      cardObj[key].classList.add(`${event.currentTarget.colorPalette}${key}`);
    }
  }
}

//LISTENERS
coldPalette.addEventListener('click', changePalette);
hotPalette.addEventListener('click', changePalette);
mixPalette.addEventListener('click', changePalette);

//////////////////////////////////////////////////////////

//DATA FORM

//SELECTORS...
const userNameElem = document.querySelector('.js-userName');
const userJobElem = document.querySelector('.js-userJob');
const userPhoneNumberElem = document.querySelector('.js-phoneNumber');
const userEmailElem = document.querySelector('.js-email');
const userLinkedinElem = document.querySelector('.js-linkedin');
const userGithubElem = document.querySelector('.js-github');
const userData = {};
const renderedUserName = document.querySelector('.js-userName-result');
const renderedUserJob = document.querySelector('.js-userJob-result');
const renderedUserPhoneNumber = document.querySelector('.js-phone-result');
const renderedUserEmail = document.querySelector('.js-email-result');
const renderedUserLinkedin = document.querySelector('.js-linkedin-result');
const renderedUserGithub = document.querySelector('.js-github-result');

//FUNCTIONS...
function getInputValues() {
  userData.name = userNameElem.value;
  userData.job = userJobElem.value;
  userData.photo = fr.result;
  userData.phone = userPhoneNumberElem.value;
  userData.email = userEmailElem.value;
  userData.linkedin = userLinkedinElem.value;
  //   if (userGithubElem.value === "@") {
  //     userData.github = userGithubElem.value.splice(0, 1);
  //   } else {
  //     userData.github = userGithubElem.value;
  //   }
  userData.github = userGithubElem.value;
}
function renderUserInfo(obj) {
  renderedUserName.innerHTML = obj.name;
  renderedUserJob.innerHTML = obj.job;
  renderedUserPhoneNumber.href = `tel:${obj.phone}`;
  renderedUserEmail.href = `mailto:${obj.email}`;
  renderedUserLinkedin.href = obj.linkedin;
  renderedUserGithub.href = `https://github.com/${obj.github}`;
  for (let key in userData) {
    if (userData[key] === '') {
      createButton.disabled = true;
      document.querySelector('.js-createText').classList.add('hidden');
      break;
    } else {
      createButton.disabled = false;
    }
  }
}

function updateInputHandler() {
  getInputValues();
  renderUserInfo(userData);
}
//LISTENERS...
userNameElem.addEventListener('keyup', updateInputHandler);
userJobElem.addEventListener('keyup', updateInputHandler);
userPhoneNumberElem.addEventListener('keyup', updateInputHandler);
userEmailElem.addEventListener('keyup', updateInputHandler);
userLinkedinElem.addEventListener('keyup', updateInputHandler);
userGithubElem.addEventListener('keyup', updateInputHandler);