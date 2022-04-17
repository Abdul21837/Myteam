const Accountant = require("../lib/Accountant");

describe("Accountant", () => {
    describe("Initialization", () => {
        it("It should create an object with a property for the github",() => {
            const testAccountant = new Accountant("TestEmployee",3453,"test@test.com","testTester");

            expect(testAccountant.github).toEqual("testTester");
        });
        it("It should return the name of the employee",() => {
            const testAccountant = new Accountant("TestEmployee",3453,"test@test.com","testTester");

            expect(testAccountant.getName()).toEqual("TestEmployee");
        });
        it("It should return the id of the employee",() => {
            const testAccountant = new Accountant("TestEmployee",3453,"test@test.com","testTester");
            expect(testAccountant.getId()).toEqual(3453);
        });
        it("It should return the email of the employee",() => {
            const testAccountant = new Accountant("TestEmployee",3453,"test@test.com","testTester");

            expect(testAccountant.getEmail()).toEqual("test@test.com");
        });
        it("It should return 'Employee' as the role",() => {
            const testAccountant = new Accountant("TestEmployee",3453,"test@test.com","testTester");

            expect(testAccountant.getRole()).toEqual("Accountant");
        });
    });
});