import PageObjectManager from "../../support/manager/PageObjectManager"

describe('Data Driven Test', function(){

    before(function(){

        cy.fixture('datadriven').then(function(data){

            this.data = data
        })
    })

    it('Login with multiple data', function(){

        this.data.forEach(user => {
            
        const pageObjectManager = new PageObjectManager()

        const homePage = pageObjectManager.getHomePage()

        const loginPage = pageObjectManager.getLoginPage()

        const accountPage = pageObjectManager.getMyAccountPage()

        homePage.launchURL()

        homePage.navigateToLoginPage()

        loginPage.doLogin(user.email,user.password)

        loginPage.navigateToMyAccountPage()

       // accountPage.getEmailId().should('have.text',user.email)

       cy.wait(2000)

        });

    })
})