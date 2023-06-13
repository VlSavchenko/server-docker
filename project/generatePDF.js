import { launch } from 'puppeteer';

import CV1 from './CV/CV1.js';
import CV2 from './CV/CV2.js';
import CV3 from './CV/CV3.js';
import CV4 from './CV/CV4.js';
import CV5 from './CV/CV5.js';

const CVs = { 'CV1': CV1, 'CV2': CV2, 'CV3': CV3, 'CV4': CV4, 'CV5': CV5 };

async function generatePDF(data, photo) {
  const browser = await launch({ headless: "new" });
  const page = await browser.newPage();
  const CV = CVs[data.CV];
  await page.setContent(CV);

  await page.$eval('#photo', (element, src) => {
    element.src = src;
  }, await imgSrc(photo));

  let name = data.firstName.trim() + ' ' + data.secondName.trim();
  await page.$eval('#name', (element, data) => {
    element.textContent = data;
  }, name);

  await page.$eval('#position', (element, data) => {
    element.textContent = data;
  }, data.position.trim());

  await page.$eval('#phone', (element, data) => {
    element.textContent = data;
  }, data.phone);

  await page.$eval('#email', (element, data) => {
    element.textContent = data;
  }, data.email);

  let skills = data.skills.split(' ').join('').split(',');
  await page.$eval('#listOfSkills', (element, array) => {
    for (const value of array) {
      const div = document.createElement('div');
      div.textContent = value;
      element.appendChild(div);
    }
  }, skills);

  let languages = data.languages.split(' ').join('').split(',');
  await page.$eval('#languages', (element, array) => {
    for (const value of array) {
      const div = document.createElement('div');
      div.textContent = value;
      element.appendChild(div);
    }
  }, languages);

  if (data.aboutMe.trim().length == 0) {
    await page.$eval('#aboutBlock', (element) => {
      element.remove();
    });
  } else {
    await page.$eval('#aboutText', (element, data) => {
      element.textContent = data.trim();
    }, data.aboutMe);
  }

  if (typeof (data.educationDate) != typeof ([])) {
    await page.$eval('#edDate', (element, data) => {
      element.textContent = data.trim();
    }, data.educationDate);
    await page.$eval('#edInstit', (element, data) => {
      element.textContent = data.trim();
    }, data.educationInstitution);
    await page.$eval('#edDegree', (element, data) => {
      element.textContent = data.trim();
    }, data.educationDegree);
    await page.$eval('#edInfo', (element, data) => {
      element.textContent = data.trim();
    }, data.educationInfo);

  } else {

    const copiedContent = await page.$eval('#educationBlockContent', (element) => {
      return element.outerHTML
    });
    for (let i = 1; i < data.educationDate.length; i++) {
      await page.$eval('#educationBlock', (element, data) => {
        element.insertAdjacentHTML('beforeend', data);
      }, copiedContent);
    }
    await page.$$eval('#edDate', (element, data) => {
      for (let i = 0; i < element.length; i++) {
        element[i].textContent = data[i].trim();
      }
    }, data.educationDate);
    await page.$$eval('#edInstit', (element, data) => {
      for (let i = 0; i < element.length; i++) {
        element[i].textContent = data[i].trim();
      }
    }, data.educationInstitution);
    await page.$$eval('#edDegree', (element, data) => {
      for (let i = 0; i < element.length; i++) {
        element[i].textContent = data[i].trim();
      }
    }, data.educationDegree);
    await page.$$eval('#edInfo', (element, data) => {
      for (let i = 0; i < element.length; i++) {
        element[i].textContent = data[i].trim();
      }
    }, data.educationInfo);
  }
  let deleted = false;
  if (typeof (data.experienceDate) != typeof ([])) {
    if ((data.experienceDate.trim() + data.experienceCompany.trim() + data.experiencePosition.trim() + data.experienceInfo.trim()).length == 0) {
      await page.$eval('#experienceBlock', (element) => {
        element.remove();
      });
      deleted = true;
    }
  }
  if (!deleted) {
    if (typeof (data.experienceDate) != typeof ([])) {
      await page.$eval('#expDate', (element, data) => {
        element.textContent = data.trim();
      }, data.experienceDate);
      await page.$eval('#expCompany', (element, data) => {
        element.textContent = data.trim();
      }, data.experienceCompany);
      await page.$eval('#expPosition', (element, data) => {
        element.textContent = data.trim();
      }, data.experiencePosition);
      await page.$eval('#expInfo', (element, data) => {
        element.textContent = data.trim();
      }, data.experienceInfo);

    } else {
      const copiedContent = await page.$eval('#experienceBlockContent', (element) => {
        return element.outerHTML
      });
      for (let i = 1; i < data.experienceDate.length; i++) {
        await page.$eval('#experienceBlock', (element, data) => {
          element.insertAdjacentHTML('beforeend', data);
        }, copiedContent);
      }
      await page.$$eval('#expDate', (element, data) => {
        for (let i = 0; i < element.length; i++) {
          element[i].textContent = data[i].trim();
        }
      }, data.experienceDate);
      await page.$$eval('#expCompany', (element, data) => {
        for (let i = 0; i < element.length; i++) {
          element[i].textContent = data[i].trim();
        }
      }, data.experienceCompany);
      await page.$$eval('#expPosition', (element, data) => {
        for (let i = 0; i < element.length; i++) {
          element[i].textContent = data[i].trim();
        }
      }, data.experiencePosition);
      await page.$$eval('#expInfo', (element, data) => {
        for (let i = 0; i < element.length; i++) {
          element[i].textContent = data[i].trim();
        }
      }, data.experienceInfo);

    }
  }


  const pdfBuffer = await page.pdf({ format: 'A4' });
  await browser.close();
  return pdfBuffer;
}

async function imgSrc(photo) {
  const base64Image = photo.buffer.toString('base64');
  const imgSrc = `data:${photo.mimetype};base64,${base64Image}`;
  return imgSrc;
}

export default generatePDF;