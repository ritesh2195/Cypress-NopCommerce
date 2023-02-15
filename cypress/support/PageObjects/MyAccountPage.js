class MyAccount{

    getEmailId(){

        return cy.get('#Email')
    }

    getFirstName(){

        return cy.get('#FirstName')
    }

    getLastName(){

        return cy.get('#LastName')
    }
}

export default MyAccount