const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class HtmlBuilder {
  constructor(fullTeam) {
    this.teamName = fullTeam.teamName;
    this.manager = new Manager(
      fullTeam.manager.name,
      fullTeam.manager.id,
      fullTeam.manager.email,
      fullTeam.manager.office
    );
    this.memberList = this.loadTeamList(fullTeam.members);
  }

  loadTeamList(membersArr){
    const outArr = [];
    for(let member of membersArr){
      if(member.role === 'e'){
        const newEngineer = new Engineer(
          member.name,
          member.id,
          member.email,
          member.github
        );
        outArr.push(newEngineer);
      } else {
        const newIntern = new Intern(
          member.name,
          member.id,
          member.email,
          member.school
        );
          outArr.push(newIntern);
      }
    }

    return outArr;
  }

  getManagerCard() {
    return this.manager.renderCard();
  }

  getMemberCards() {
    let cardHtml = ``;
    for (let member of this.memberList){
      cardHtml += member.renderCard() + `\n             `;
    }
    return cardHtml;
  }

  getBody() {
    return `<header class="primary-bg">
              <h1 class="winter-text">${this.teamName}</h1>
                </header>
                <main class="d-flex flex-column align-items-center">
                    <section class="team-section w-75 border-bottom border-dark border-2">
                        ${this.getManagerCard()}
                    </section>
                    <section class="team-section w-75">
                        ${this.getMemberCards()}
                    </section>
                </main>`;
  }

  renderHtml() {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${this.teamName} Homepage</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../assets/css/style.css" />
    </head>
    <body>
        ${this.getBody()}
        <script
        src="https://kit.fontawesome.com/2b8c674079.js"
        crossorigin="anonymous"
        ></script>
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
        ></script>
    </body>
</html>`;
  }
}

module.exports = HtmlBuilder;