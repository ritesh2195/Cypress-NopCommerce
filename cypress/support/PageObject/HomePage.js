class HomePage{

    launchURL(){

        cy.visit(Cypress.env('url'))

    }

    navigateToRegisterPage(){

        cy.contains('Register').click()
    }

    navigateToLoginPage(){

        cy.contains('Log in').click()
    }

}

export default HomePage;