const Manager = require('../lib/Manager.js');

describe('Manager', () =>  {
    describe('Functionality', () => {
        it("Should log entered Name, Id, Office Number and Email Address in the Manager object and return those values along with it's Role when called with the corresponding methods", () => {
            
            const Name = "Mia";
            const Id = 657;
            const Office = 998;
            const Email = "mia@companyemail.com";
            const Role = "Manager"

            const theManager = new Manager(Name, Id, Office, Email);

            expect(theManager.getName()).toEqual(Name);
            expect(theManager.getId()).toEqual(Id);
            expect(theManager.officeNumber).toEqual(Office);
            expect(theManager.getEmail()).toEqual(Email);
            expect(theManager.getRole()).toEqual(Role);
        });
    })
})