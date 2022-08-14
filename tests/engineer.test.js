const Engineer = require('../lib/Engineer.js');

describe('Engineer', () =>  {
    describe('Functionality', () => {
        it("Should log entered Name, Id, Office Number and Email Address in the Engineer object and return those values along with it's Role when called with the corresponding methods", () => {
            
            const Name = "Rashad";
            const Id = 848;
            const Office = 433;
            const Email = "rashad@companyemail.com";
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