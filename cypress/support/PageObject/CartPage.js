class CartPage{

    getTotalPrice(){

        return cy.get('.value-summary > strong')
    }
}

export default CartPage;