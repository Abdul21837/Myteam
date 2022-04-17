const Employee = require('./Employee');

// TeamMember handles generating the team member cards
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }

    renderHeader(){
        return `<h2 class="winter-text">${this.getName()}</h2>
                         <h3 class="winter-text"><i class="fas fa-user-graduate"></i> ${this.getRole()}</h3>`;
    }

    renderBody(){
        return `<li class="list-group-item winter-bg">ID: ${this.getId()}</li>
                <li class="list-group-item winter-bg">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                <li class="list-group-item winter-bg">School: ${this.getSchool()}</li>`;
    }
}

module.exports = Intern;