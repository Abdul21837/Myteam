const Employee = require('./Employee');

// TeamMember handles generating the team member cards
class Accountant extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Accountant';
    }

    renderHeader(){
        return `<h2 class="winter-text">${this.getName()}</h2>
                         <h3 class="winter-text"><i class="fas fa-glasses"></i> ${this.getRole()}</h3>`;
    }

    renderBody(){
        return `<li class="list-group-item winter-bg">ID: ${this.getId()}</li>
                <li class="list-group-item winter-bg">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                <li class="list-group-item winter-bg">Github: <a href="https://github.com/${this.getGithub()}">${this.getGithub()}</a></li>`;
    }
}

module.exports = Engineer;