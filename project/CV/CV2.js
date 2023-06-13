
const CV2 = `
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
    display: flex;
    justify-content: center;
  }

  .CVContainer .cv2 {
    min-width: 210mm;
    min-height: 297mm;
    max-width: 210mm;
    max-height: 297mm;
    background-color: #FCFBF7;
    border: 1px solid black;
    padding: 40px;
    box-sizing: border-box;
    display: flex;
    gap: 32px;
  }

  .CVContainer .cv2 .blockTitle {
    font-size: 20px;
    font-weight: 500;
    color: #323232;
    margin-bottom: 10px;
  }

  .CVContainer .cv2 .yellowDescription {
    font-size: 16px;
    font-weight: 500;
    color: #F1B43E;
  }

  .CVContainer .cv2 .grayText {
    font-size: 14px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .grayText12 {
    font-size: 12px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .sidebar {
    width: 40%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .CVContainer .cv2 .sidebar .personalInfo {
    height: 263px;
    padding: 32px;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: 0px 6px 50px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .CVContainer .cv2 .sidebar .personalInfo .photo {
    width: 100px;
    height: 100px;
    border-radius: 999px;
  }

  .CVContainer .cv2 .sidebar .personalInfo .nameAndPosition {
    display: flex;
    flex-direction: column;
  }

  .CVContainer .cv2 .sidebar .personalInfo .links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .sidebar .skillsAndInterests {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    box-sizing: border-box;
  }

  .CVContainer .cv2 .sidebar .skillsAndInterests .list {
    display: flex;
    flex-wrap: wrap;
    gap: 14px 24px;
  }

  .CVContainer .cv2 .sidebar .skillsAndInterests .list div {
    font-size: 14px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .sidebar .language {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #727272;
  }

  .CVContainer .cv2 .main {
    width: 60%;
    height: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .CVContainer .cv2 .main .aboutBlock {
    display: flex;
    flex-direction: column;
  }

  .CVContainer .cv2 .main .block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  .CVContainer .cv2 .main .block .item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .CVContainer .cv2 .main .block .item .placeAndPosition {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 2px 10px;
  }

  .CVContainer .cv2 .main .block .item .placeAndPosition .place {
    font-size: 16px;
    font-weight: 500;
    color: #F1B43E;
  }

  .CVContainer .cv2 .main .block .item .placeAndPosition .position {
    font-size: 14px;
    font-weight: 400;
    color: #F1B43E;
  }
</style>

<body>
  <div class="CVContainer">
    <div class="cv2">
      <aside class="sidebar">
        <div class="personalInfo">
          <img class="photo"
              id = "photo"
              src="*"
              alt="user" />
          <div class="nameAndPosition">
            <div class="blockTitle" id="name"></div>
            <div class="yellowDescription" id="position">
              
            </div>
          </div>
          <div class="links">
            <div id="phone">+11012223344</div>
            <div id="email">hello@andrew.com</div>
          </div>
        </div>
        <div class="skillsAndInterests">
          <div class="blockTitle">Навыки</div>
          <div class="list" id="listOfSkills">
            
          </div>
        </div>
        <div class="skillsAndInterests">
          <div class="blockTitle">Языки</div>
          <div class="language" id="languages">

          </div>
        </div>
      </aside>
      <aside class="main">
        <div class="aboutBlock" id="aboutBlock">
          <div class="blockTitle">Обо мне</div>
          <div class="grayText" id="aboutText">
  
          </div>
        </div>
        <div class="block" id="experienceBlock">
          <div class="blockTitle">Опыт работы</div>
          
          <div class="item" id="experienceBlockContent">
            <div class="placeAndPosition">
              <div class="place" id="expCompany"></div>
              <div class="position" id="expPosition"></div>
            </div>
            <div class="grayText12" id="expDate">
              
            </div>
            <div class="grayText" id="expInfo">
              
            </div>
          </div>
            
          
        </div>
        <div class="block" id="educationBlock">
          <div class="blockTitle">Образование</div>
          
            <div class="item" id="educationBlockContent">
              <div class="placeAndPosition">
                <div class="place" id="edInstit"></div>
                <div class="position" id="edDegree">
                  
                </div>
              </div>
              <div class="grayText12" id="edDate">
                
              </div>
              <div class="grayText" id="edInfo">
                
              </div>
            </div>
          
        </div>
      </aside>
    </div>
  </div>
</body>
</html>
`;

export default CV2;