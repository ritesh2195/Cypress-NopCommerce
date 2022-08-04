class ProductDetailsPage{

    getProductPrice(){

       return cy.get('.product-price span')
    }

    addProductToCart(number){

        cy.get("[aria-label='Enter a quantity']").clear()

        cy.get("[aria-label='Enter a quantity']").type(number)

        cy.contains('Add to cart').click()
    }

    navigateToCartPage(){

        cy.wait(2000)

        cy.contains('Shopping cart').click()
    }
}

export default ProductDetailsPage