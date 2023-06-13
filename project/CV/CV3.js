
const CV3 = `
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

  .CVContainer .cv3 {
    min-width: 210mm;
    min-height: 297mm;
    max-width: 210mm;
    max-height: 297mm;
    padding: 40px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .CVContainer .cv3 .f10_400_black {
    font-size: 10px;
    font-weight: 400;
    color: #000;
  }

  .CVContainer .cv3 .f14_700_blue {
    font-size: 14px;
    font-weight: 700;
    color: #005BA2;
  }

  .CVContainer .cv3 .f12_400_gray {
    font-size: 12px;
    font-weight: 400;
    color: #454545;
  }

  .CVContainer .cv3 .f12_500_gray {
    font-size: 12px;
    font-weight: 500;
    color: #454545;
  }

  .CVContainer .cv3 .f14_500_black {
    font-size: 14px;
    font-weight: 500;
    color: #000;
  }

  .CVContainer .cv3 .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .CVContainer .cv3 .header .nameAndPosition {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }

  .CVContainer .cv3 .header .nameAndPosition .name {
    font-size: 30px;
    font-weight: 700;
    color: #005BA2;
  }

  .CVContainer .cv3 .header .nameAndPosition .position {
    font-size: 14px;
    font-weight: 500;
    color: #000;
  }

  .CVContainer .cv3 .header .photo {
    width: 130px;
    height: 130px;
    border-radius: 999px;
  }

  .CVContainer .cv3 .asides {
    display: flex;
    gap: 24px;
    height: 100%;
  }

  .CVContainer .cv3 .asides .blockTitle {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
    color: #000;
    border-bottom: 1px solid #000;
  }

  .CVContainer .cv3 .asides .sidebar {
    width: 40%;
    height: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .CVContainer .cv3 .asides .sidebar .block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    word-wrap: break-word;
    font-size: 12px;
    font-weight: 500;
    color: #454545;
  }

  .list{
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    color: #454545;
  }

  .listOfSkills{
    display: flex;
    flex-wrap: wrap;
    gap: 14px 24px;
    font-size: 12px;
    font-weight: 500;
    color: #454545;
  }

  .CVContainer .cv3 .asides .main {
    width: 60%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .CVContainer .cv3 .asides .main .block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    word-wrap: break-word;
  }

  .CVContainer .cv3 .asides .main .block  {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .CVContainer .cv3 .asides .main .block .item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .CVContainer .cv3 .asides .main .block .item .placeAndPosition {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 2px 10px;
  }

  .CVContainer .cv3 .asides .main .block .item .placeAndPosition .place {
    font-size: 14px;
    font-weight: 700;
    color: #005BA2;
  }

  .CVContainer .cv3 .asides .main .block .item .placeAndPosition .position {
    font-size: 12px;
    font-weight: 600;
    color: #005BA2;
  }
</style>

<body>
  <div class="CVContainer">
    <div class="cv3">
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
        <aside class="main">
          <div class="block" id="educationBlock">
            <div class="blockTitle">Образование</div>
            
              <div class="item" id="educationBlockContent">
                <div class="placeAndPosition">
                  <div class="place" id="edInstit">
                    
                  </div>
                  <div class="position" id="edDegree">
                    
                  </div>
                </div>
                <div class="f10_400_black" id="edDate">
                  
                </div>
                <div class="f12_400_gray" id="edInfo"></div>
              </div>  
          </div>

          <div class="block" id="experienceBlock">
            <div class="blockTitle">Опыт работы</div>

              <div class="item" id="experienceBlockContent">
                <div class="placeAndPosition">
                  <div class="place" id="expCompany"></div>
                  <div class="position" id="expPosition"></div>
                </div>
                <div class="f10_400_black" id="expDate">
                  
                </div>
                <div class="f12_400_gray" id="expInfo">
                  
                </div>
              </div>
              
              

          </div>
        </aside>
        <aside class="sidebar">
          <div class="block">
            <div class="blockTitle">Контакты</div>

              <div class="f14_500_black" id="email"></div>
              <div class="f14_500_black" id="phone"></div>

          </div>
          <div class="block" id="aboutBlock">
            <div class="blockTitle">Обо мне</div>
            <div class="f12_500_gray" id="aboutText">

            </div>
          </div>
          <div class="block">
            <div class="blockTitle">Навыки</div>
            <div class="listOfSkills" id="listOfSkills">
              
            </div>
          </div>
          <div class="block">
            <div class="blockTitle">Языки</div>
            <div class="list" id="languages">
              
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</body>
</html>
`

export default CV3;