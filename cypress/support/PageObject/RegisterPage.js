/// <reference types="Cypress" />

class RegisterPage{

    selectGender(gender){

        cy.get("[type='radio']").check(gender)

    }

    enterUserName(firstName, lastName){

        cy.get('#FirstName').type(firstName)

        cy.get('#LastName').type(lastName)
    }

    selectDateOfBirth(date, month, year){

        cy.get("[name='DateOfBirthDay']").select(date)

        cy.get("[name='DateOfBirthMonth']").select(month)

        cy.get("[name='DateOfBirthYear']").select(year)

    }

    enterEmailId(email){

        cy.get('#Email').clear()

        cy.get('#Email').type(email)

    }

    enterCompanyName(companyName){

        cy.get('#Company').type(companyName) 
    }

    enterPassword(password,confirmPassword){

        cy.get('#Password').type(password)

        cy.get('#ConfirmPassword').type(confirmPassword)

    }

    clickSubmitButton(){

        cy.get('#register-button').click()
    }

    submitUserDetails(){

        cy.url().should('include','register')

        cy.get('.register-continue-button').click()
    }
}

export default RegisterPage;