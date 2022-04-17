const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("It should create an object with a property for the school",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","Institute of Public Administration and Management");

            expect(testIntern.school).toEqual("Institute of Public Administration and Management");
        });
        it("It should return the name of the employee",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","Institute of Public Administration and Management");

            expect(testIntern.getName()).toEqual("TestEmployee");
        });
        it("It should return the id of the employee",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","Institute of Public Administration and Management");
            expect(testIntern.getId()).toEqual(3453);
        });
        it("It should return the email of the employee",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","Institute of Public Administration and Management");

            expect(testIntern.getEmail()).toEqual("test@test.com");
        });
        it("It should return 'Intern' as the role",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","Institute of Public Administration and Management");

            expect(testIntern.getRole()).toEqual("Intern");
        });
    });
});