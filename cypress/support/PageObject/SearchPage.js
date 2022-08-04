/// <reference types="Cypress" />
class SearchPage{

    searchProduct(product){

        cy.get("[aria-label='Search store']").type(product)

        cy.get("[aria-label='Search store']").next().click()
    }

    selectProduct(product){

        cy.get('.product-title a').each(($e,index, list)=>{

            if($e.text()===product){

                cy.wrap($e).click()
            }
        })
    }

}

export default SearchPage;