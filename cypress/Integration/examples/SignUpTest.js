/// <reference types="Cypress" />
import PageObjectManager from "../../support/manager/PageObjectManager"

describe('SignUp Test', function(){

    before(function(){

        cy.fixture('example').then(function(data){

            this.data = data
        })
    })

    it('Create new User', function(){

        const pageObjectManager = new PageObjectManager()

        const homePage = pageObjectManager.getHomePage()

        const registerPage = pageObjectManager.getRegisterPage()

        const loginPage = pageObjectManager.getLoginPage()

        const accountPage = pageObjectManager.getMyAccountPage()

        homePage.launchURL()

        homePage.navigateToRegisterPage()

        registerPage.selectGender(this.data.Gender)

        registerPage.enterUserName(this.data.FirstName,this.data.LastName)

        registerPage.selectDateOfBirth(this.data.date,this.data.month,this.data.year)

        registerPage.enterEmailId(this.data.email)

        registerPage.enterCompanyName(this.data.company)

        registerPage.enterPassword(this.data.password,this.data.confirmPassword)

        registerPage.clickSubmitButton()

        loginPage.navigateToMyAccountPage()

        accountPage.getEmailId().should('have.value',this.data.email)

        accountPage.getFirstName().should('have.value', this.data.FirstName)

        accountPage.getLastName().should('have.value',this.data.LastName)

    })
})