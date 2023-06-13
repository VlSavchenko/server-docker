
const CV4 = `
<!DOCTYPE html>
<html>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  * {
    font-family: "Inter";
  }

  html {
    -webkit-print-color-adjust: exact;
  }

  body {
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

  .CVContainer .cv4 {
    min-width: 210mm;
    min-height: 297mm;
    max-width: 210mm;
    max-height: 297mm;
    box-sizing: border-box;
    padding: 50px 30px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: initial;
  }

  .CVContainer .cv4 .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .CVContainer .cv4 .header .nameAndPosition {
    display: flex;
    flex-direction: column;
    gap: initial;
    margin-bottom: 40px;
  }

  .CVContainer .cv4 .header .nameAndPosition .name {
    font-size: 38px;
    font-weight: 500;
    color: black;
  }

  .CVContainer .cv4 .header .nameAndPosition .position {
    font-size: 16px;
    font-weight: 400;
    color: #4F4F4F;
  }

  .CVContainer .cv4 .header .photo {
    width: 130px;
    height: 130px;
    border-radius: 999px;
  }

  .CVContainer .cv4 .asides {
    display: flex;
    gap: 30px;
    height: 100%;
  }

  .CVContainer .cv4 .asides .blockTitle {
    font-size: 20px;
    font-weight: 700;
    color: #F6888B;
  }

  .CVContainer .cv4 .asides .block {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .CVContainer .cv4 .asides .block .language {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
    font-weight: 500;
    color: #333333;
  }

  .CVContainer .cv4 .asides .block .description {
    font-size: 14px;
    font-weight: 400;
    color: #4F4F4F;
  }

  .CVContainer .cv4 .asides .block  {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .CVContainer .cv4 .asides .block .item {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .CVContainer .cv4 .asides .block .item .placeAndPosition {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 2px 10px;
  }

  .CVContainer .cv4 .asides .block .item .placeAndPosition .place {
    font-size: 16px;
    font-weight: 700;
    color: #333333;
  }

  .CVContainer .cv4 .asides .block .item .placeAndPosition .position {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }

  .CVContainer .cv4 .asides .block .item .period {
    font-size: 12px;
    font-weight: 500;
    color: #A9A9A9;
  }

  .CVContainer .cv4 .asides .sidebar {
    width: 30%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .CVContainer .cv4 .asides .sidebar .contacts {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    font-weight: 500;
    color: #333333;
  }

  .CVContainer .cv4 .asides .sidebar .skillsAndInterests {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  .CVContainer .cv4 .asides .sidebar .skillsAndInterests .list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 24px;
  }

  .CVContainer .cv4 .asides .sidebar .skillsAndInterests .list div {
    font-size: 12px;
    font-weight: 400;
    color: #333333;
  }

  .CVContainer .cv4 .asides .main {
    width: 70%;
    height: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
</style>

<body>
  <div class="CVContainer">
    <div class="cv4">
      <div class="header">
        <div class="nameAndPosition">
          <div class="name" id="name"></div>
          <div class="position" id="position"></div>
        </div>
        <img class="photo"
            id = "photo"
            src="*"
            alt="user" />
      </div>
      <div class="asides">
        <aside class="sidebar">
          <div class="contacts">
            <div id="phone"></div>
            <div id="email"></div>
          </div>
          <div class="skillsAndInterests">
            <div class="blockTitle">НАВЫКИ</div>
            <div class="list" id="listOfSkills">
              
            </div>
          </div>
          <div class="block">
            <div class="blockTitle">ЯЗЫКИ</div>
            <div class="language" id="languages">

            </div>
          </div>
        </aside>
        <aside class="main">
          <div class="block">
            <div class="block" id="aboutBlock">
              <div class="blockTitle">ОБО МНЕ</div>
              <div class="description" id="aboutText">

              </div>
            </div>
          </div>
          <div class="block" id="experienceBlock">
            <div class="blockTitle">ОПЫТ РАБОТЫ</div>
            
              <div class="item" id="experienceBlockContent">
                <div class="placeAndPosition">
                  <div class="place" id="expCompany"></div>
                  <div class="position" id="expPosition"></div>
                </div>
                <div class="period" id="expDate">
                  
                </div>
                <div class="description" id="expInfo">
                 
                </div>
              </div>
              
            
          </div>
          <div class="block" id="educationBlock">
            <div class="blockTitle">ОБРАЗОВАНИЕ</div>
            
              <div class="item" id="educationBlockContent">
                <div class="placeAndPosition">
                  <div class="place"  id="edInstit"></div>
                  <div class="position" id="edDegree">
                    
                  </div>
                </div>
                <div class="period" id="edDate">
                  
                </div>
                <div class="description" id="edInfo">
                  
                </div>
              </div>
            
          </div>
        </aside>
      </div>
    </div>
  </div>
</body>

</html>
`

export default CV4;