class LoginPage{

    doLogin(email, password){

        cy.get('#Email').type(email)

        cy.get('[type="password"]').type(password)

        cy.get(".buttons [type='submit']").click()
    }

    navigateToMyAccountPage(){

        cy.contains('My account').click()
    }
}

export default LoginPage;