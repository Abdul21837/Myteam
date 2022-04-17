const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("It should create an object with a name, id, and email",() => {
            const testEmployee = new Employee("TestEmployee",3453,"test@test.com");

            expect({name: testEmployee.name, id:testEmployee.id, email:testEmployee.email,}).toEqual({name: "TestEmployee", id: 3453, email: "test@test.com",});
        });
        it("It should return the name of the employee",() => {
            const testEmployee = new Employee("TestEmployee",3453,"test@test.com");

            expect(testEmployee.getName()).toEqual("TestEmployee");
        });
        it("It should return the id of the employee",() => {
            const testEmployee = new Employee("TestEmployee",3453,"test@test.com");

            expect(testEmployee.getId()).toEqual(3453);
        });
        it("It should return the email of the employee",() => {
            const testEmployee = new Employee("TestEmployee",3453,"test@test.com");

            expect(testEmployee.getEmail()).toEqual("test@test.com");
        });
        it("It should return 'Employee' as the role",() => {
            const testEmployee = new Employee("TestEmployee",3453,"test@test.com");

            expect(testEmployee.getRole()).toEqual("Employee");
        });
    });
});