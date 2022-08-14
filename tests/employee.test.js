const Employee = require('../lib/Employee.js');

describe('Employee', () =>  {
    describe('Functionality', () => {
        it("Should log entered Name, Id, Office Number and Email Address in the Employee object and return those values along with it's Role when called with the corresponding methods", () => {
            
            const Name = "Jared";
            const Id = 747;
            const Office = 89843;
            const Email = "jared@companyemail.com";
            const Role = "Employee"

            const theEmployee = new Employee(Name, Id, Office, Email);

            expect(theEmployee.getName()).toEqual(Name);
            expect(theEmployee.getId()).toEqual(Id);
            expect(theEmployee.officeNumber).toEqual(Office);
            expect(theEmployee.getEmail()).toEqual(Email);
            expect(theEmployee.getRole()).toEqual(Role);
        });
    })
})