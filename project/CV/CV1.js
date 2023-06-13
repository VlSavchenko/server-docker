
const CV1 = `
<!DOCTYPE html>
<html>
  <style>

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

    *{
      font-family: "Inter";
    }

    html {
      -webkit-print-color-adjust: exact;
    }
    body{
      margin: 0;
    }
    .CVContainer {
      min-width: 210mm;
      min-height: 297mm;
      max-width: 210mm;
      max-height: 297mm;
      // width: 100%;
      // height: 100%;
      display: flex;
      justify-content: center;
      
    }
    .CVContainer .cv1 {
      min-width: 210mm;
      min-height: 297mm;
      max-width: 210mm;
      max-height: 297mm;
      background-color: #ffffff;

    }
    .sidebar {
      width: 35%;
      min-height: 297mm;
      max-height: 297mm;
      // height: 100%;
      background-color: #233a5f;
      float: left;
      padding: 25px 12px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-bottom: 0;
    }
    .CVContainer .cv1 .sidebar .photo {
      width: 120px;
      height: 120px;
      border-radius: 999px;
    }
    .CVContainer .cv1 .sidebar .nameAndPosition {
      display: flex;
      flex-direction: column;
    }
    .CVContainer .cv1 .sidebar .nameAndPosition .name {
      margin: 0px;
      margin-bottom: 5px;
      font-weight: 600;
      color: white;
      font-size: 24px;
    }
    .CVContainer .cv1 .sidebar .nameAndPosition .position {
      margin: 0;
      color: #C3C2C2;
      font-size: 13px;
    }
    .CVContainer .cv1 .sidebar .personalInfo {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .CVContainer .cv1 .sidebar .personalInfo .info {
      display: flex;
      background-color: #E5E5E5;
      color: #233A5F;
      width: 100%;
      min-height: 23px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      box-sizing: border-box;
      padding: 4px 8px;
      align-items: center;
    }
    .CVContainer .cv1 .sidebar .personalInfo .blockTitle {
      color: white;
      font-size: 18px;
      font-weight: 500;
    }
    .CVContainer .cv1 .sidebar .personalInfo .list {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 24px;
      font-size: 14px;
      color: #fff;
    }

    .CVContainer .cv1 .sidebar .personalInfo .language {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 14px;
      color: #fff;
    }
    .CVContainer .cv1 .main {
      float: right;
      height: 100%;
      width: 65%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 30px;
      gap: 24px;
    }
    .CVContainer .cv1 .main .blockTitle {
      color: #233A5F;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .CVContainer .cv1 .main hr {
      height: 2px;
      width: 40px;
      margin-top: 6px;
      background-color: #233A5F;
      border: 1px solid #233A5F;
      border-radius: 4px;
      float: left;
    }
    .CVContainer .cv1 .main .aboutBlock {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .CVContainer .cv1 .main .aboutBlock .aboutText {
      font-size: 12px;
    }
    .CVContainer .cv1 .main .block {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .CVContainer .cv1 .main .block .blockContent {
      display: flex;
      gap: 20px;
    }
    .CVContainer .cv1 .main .block .blockContent .time {
      min-width: 100px;
    }
    .CVContainer .cv1 .main .block .blockContent .dot {
      height: 20px;
      margin-right: 8px;
    }
    .CVContainer .cv1 .main .block .blockContent .text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f14_400 {
      font-size: 14px;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f12_600 {
      font-size: 12px;
      font-weight: 600;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f12_400_grey {
      font-size: 12px;
      color: #878787;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f14_600 {
      font-size: 14px;
      font-weight: 600;
    }
    .CVContainer .cv1 .main .block .blockContent .text .f12_400 {
      font-size: 12px;
    }
  </style>
  <body>
    <div class="CVContainer">
      <div class="cv1">
        <aside class="sidebar" id="sidebar">
          <img
            class="photo"
            id = "photo"
            src="*"
            alt="user"
          />
          <div class="nameAndPosition">
            <p class="name" id="name"></p>
            <p class="position" id="position"></p>
          </div>
          <div class="personalInfo">
            <div class="info" id="phone"></div>
            <div class="info" id="email"></div>
          </div>
          <div class="personalInfo" id="personalInfo">
            <div class="blockTitle">Навыки</div>
            <div class="list" id="listOfSkills">
            </div>
          </div>
          <div class="personalInfo">
            <div class="blockTitle">Языки</div>
            <div class="language" id="languages">
            </div>
          </div>
        </aside>
        <aside class="main">
          <div class="aboutBlock" id="aboutBlock">
            <div>
              <div class="blockTitle">Обо мне</div>
              <hr />
            </div>
            <div class="aboutText" id="aboutText">
              
            </div>
          </div>
          <div class="block" id="educationBlock">
            <div>
              <div class="blockTitle">Образование</div>
              <hr />
            </div>
            <div class="blockContent" id="educationBlockContent">
              <div class="time" id="edDate"></div>
              <div class="d-flex flex-row">
                <div class="text">
                  <div class="f14_400" id="edInstit">
                    
                  </div>
                  <div class="f12_600" id="edDegree">
                    
                  </div>
                  <div class="f12_400_grey" id="edInfo">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="block" id="experienceBlock">
            <div>
              <div class="blockTitle">Опыт работы</div>
              <hr />
            </div>
            <div class="blockContent" id="experienceBlockContent">
              <div class="time" id="expDate"></div>
              <div class="d-flex flex-row">
                <div class="text">
                  <div class="f14_600" id="expCompany"> </div>
                  <div class="f12_400" id="expPosition"> </div>
                  <div class="f12_400_grey" id="expInfo">
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </aside>
      </div>
    </div>
  </body>
</html>`;

export default CV1;