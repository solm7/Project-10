const Intern = require('../lib/Intern.js');

describe('Intern', () =>  {
    describe('Functionality', () => {
        it("Should log entered Name, Id, Office Number and Email Address in the Intern object and return those values along with it's Role when called with the corresponding methods", () => {
            
            const Name = "Solomon";
            const Id = 56657;
            const Office = 76767;
            const Email = "Solomon@companyemail.com";
            const Role = "Intern"

            const theIntern = new Employee(Name, Id, Office, Email);

            expect(theIntern.getName()).toEqual(Name);
            expect(theIntern.getId()).toEqual(Id);
            expect(theIntern.officeNumber).toEqual(Office);
            expect(theIntern.getEmail()).toEqual(Email);
            expect(theIntern.getRole()).toEqual(Role);
        });
    })
})