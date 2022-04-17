class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }

    renderBody(){
        return `<li class="list-group-item winter-bg">ID: ${this.id}</li>`;
    }

    renderCard(){
        return `<div class="col-4 card m-3 border-0">
                    <div class="card-header p-3 secondary-bg">
                        ${this.renderHeader()}
                    </div>
                    <div class="p-3 winter-bg">
                        <ul class="list-group list-group-flush">
                            ${this.renderBody()}
                        </ul>
                    </div>
                </div>`;
    }

}

module.exports = Employee;