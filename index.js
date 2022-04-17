const inquire = require("inquirer");
const fs = require('fs');
const HtmlBuilder = require("./helper/htmlBuilder");

const wrapupQuestion = {
  type: "list",
  name: "keepBuilding",
  message: "Would you like to add a team member or wrap-up your team?",
  choices: ["Add an Accountant", "Add an Intern", "Wrap-up your team"],
  filter(val) {
    if (val === "Wrap-up your team") {
      return "w";
    } else if (val === "Add an Intern") {
      return "i";
    } else {
      return "e";
    }
  },
};

const managerQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "What is your team name?",
  },
  {
    type: "input",
    name: "managerName",
    message: "What is your name?",
  },
  {
    type: "number",
    name: "managerId",
    message: "What is your id number?",
    validate(value) {
      if (!value) {
        return "Please enter a number";
      }
      return true;
    },
  },
  {
    type: "number",
    name: "github",
    message: "What is your github?",
    validate(value) {
      if (!value) {
        return "Please enter the github";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your email?",
    validate: (val) => {
      if(val.match("^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+.)+[a-z]{2,5}$") === null){
        return 'please enter a valid email address';
      } else {
        return true;
      }
    }
  },
  wrapupQuestion,
];

const accountantQuestions = [
  {
    type: "input",
    name: "accountantName",
    message: "What is their name?",
  },
  {
    type: "number",
    name: "acccountantId",
    message: "What is their ID?",
  },
  {
    type: "input",
    name: "accountantEmail",
    message: "What is their email?",
    validate: (val) => {
      if(val.match("^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+.)+[a-z]{2,5}$") === null){
        return 'please enter a valid email address';
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "accountantGit",
    message: "What is their Github username?",
  },
  wrapupQuestion,
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is their name?",
  },
  {
    type: "number",
    name: "internId",
    message: "What is their ID?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is their email?",
    validate: (val) => {
      if(val.match("^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+.)+[a-z]{2,5}$") === null){
        return 'please enter a valid email address';
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "internSchool",
    message: "What school did they attend?",
  },
  wrapupQuestion,
];

const fullTeam = {
  teamName: "",
  manager: new Manager(),
  members: [],
};

function Manager() {
  this.name = "";
  this.id = 0;
  this.office = 0;
  this.email = "";
}

function TeamMember() {
  this.name = "";
  this.role = "";
  this.id = 0;
  this.email = "";
  this.github = "";
  this.school = "";
}

const buildHTML = (teamObj) => {
  let htmlGenerator = new HtmlBuilder(teamObj);
  let htmlOut = htmlGenerator.renderHtml();

  fs.writeFile('./dist/index.html',htmlOut,err => {
    console.log(err ? 'Failed to write index.html':'Successfully created index.html');
  });
}

const addAccountant = async() => {
  const newAccountant = new TeamMember();
  newAccountant.role = 'e';

  const accountantPromise = await inquire.prompt(accountantQuestions);

  newAccountant.name = accountantPromise.accountantName;
  newAccountant.id = accountantPromise.accountantId;
  newAccountant.email = accountantPromise.accountantEmail;
  newAccountant.github = accountantPromise.accountantGit;
  fullTeam.members.push(newAccountant);

  return accountantPromise.keepBuilding;
}

const addIntern = async() => {
  const newIntern = new TeamMember();
  newIntern.role = 'i';

  const internPromise = await inquire.prompt(internQuestions);

  newIntern.name = internPromise.internName;
  newIntern.id = internPromise.internId;
  newIntern.email = internPromise.internEmail;
  newIntern.school = internPromise.internSchool;
  fullTeam.members.push(newIntern);

  return internPromise.keepBuilding;
}

const init = async () => {
  let contTeamBuilding = true;
  let memberRole = "";
  const managerPromise = await inquire.prompt(managerQuestions);
  if (managerPromise.keepBuilding !== "w") {
    fullTeam.teamName = managerPromise.teamName;
    fullTeam.manager.name = managerPromise.managerName;
    fullTeam.manager.id = managerPromise.managerId;
    fullTeam.manager.github = managerPromise.github;
    fullTeam.manager.email = managerPromise.managerEmail;
    memberRole = managerPromise.keepBuilding;
  } else {
    contTeamBuilding = false;
  }

  // memberRole needs to have a value that is not w before entering the loop
  while (contTeamBuilding) {
    if(memberRole === "e"){
      memberRole = await addAccountant();
    } else {
      memberRole = await addIntern();
    }

    contTeamBuilding = memberRole !== "w";
  }

  buildHTML(fullTeam);
};
init();
