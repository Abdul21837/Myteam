const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,office){
        super(name,id,email);
        this.github = github;
    }

    getOfficeNumber(){
        return this.github;
    }

    getRole(){
        return 'Manager';
    }

    renderHeader(){
        return `<h2 class="winter-text">${this.getName()}</h2>
                         <h3 class="winter-text"><i class="fas fa-mug-hot"></i> ${this.getRole()}</h3>`;
    }

    renderBody(){
        return `<li class="list-group-item winter-bg">ID: ${this.getId()}</li>
                <li class="list-group-item winter-bg">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                <li class="list-group-item winter-bg">Office Number: ${this.getOfficeNumber()}</li>`;
    }
}

module.exports = Manager;