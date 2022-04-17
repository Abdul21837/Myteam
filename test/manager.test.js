const Manager = require("../lib/Manager");

describe("Intern", () => {
    describe("Initialization", () => {
        it("It should create an object with a property for the school",() => {
            const testManager = new Manager("TestEmployee",3453,"test@test.com",48);

            expect(testManager.github).toEqual(48);
        });
        it("It should return the name of the employee",() => {
            const testManager = new Manager("TestEmployee",3453,"test@test.com",48);

            expect(testManager.getName()).toEqual("TestEmployee");
        });
        it("It should return the id of the employee",() => {
            const testManager = new Manager("TestEmployee",3453,"test@test.com",48);
            expect(testManager.getId()).toEqual(3453);
        });
        it("It should return the email of the employee",() => {
            const testManager = new Manager("TestEmployee",3453,"test@test.com",48);

            expect(testManager.getEmail()).toEqual("test@test.com");
        });
        it("It should return 'Manager' as the role",() => {
            const testManager = new Manager("TestEmployee",3453,"test@test.com",48);

            expect(testManager.getRole()).toEqual("Manager");
        });
    });
});