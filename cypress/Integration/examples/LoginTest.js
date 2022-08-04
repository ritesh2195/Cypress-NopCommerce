import PageObjectManager from "../../support/manager/PageObjectManager"

describe('Login Test', function(){


    before(function(){

        cy.fixture('login').then(function(data){

            this.data = data
        })
    })

    it('Login valid credentails', function(){

        const pageObjectManager = new PageObjectManager()

        const homePage = pageObjectManager.getHomePage()

        const loginPage = pageObjectManager.getLoginPage()

        const accountPage = pageObjectManager.getMyAccountPage()

        homePage.launchURL()

        homePage.navigateToLoginPage()

        loginPage.doLogin(this.data.email,this.data.password)

        loginPage.navigateToMyAccountPage()

        accountPage.getEmailId().should('have.value',this.data.email)

    })
})
