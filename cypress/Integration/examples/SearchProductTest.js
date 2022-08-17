import CartPage from "../../support/PageObject/CartPage"
import HomePage from "../../support/PageObject/HomePage"
import ProductDetailsPage from "../../support/PageObject/ProductDetailsPage"
import SearchPage from "../../support/PageObject/SearchPage"

describe('Searching product', function(){

    before(function(){

        cy.fixture('product').then(function(data){

            this.data = data
        })
    })

    it('search product and add in card', function(){

        const homePage = new HomePage()

        const searchPage = new SearchPage()

        const detailsPage = new ProductDetailsPage()

        const cartPage = new CartPage()

        homePage.launchURL()

        searchPage.searchProduct(this.data.product)

        searchPage.selectProduct(this.data.selectedProduct)

        let unitPrice;

        detailsPage.getProductPrice().then(function(price){

            unitPrice =  Number(price.text().trim().replace(/[^0-9\.]+/g,""))

            detailsPage.addProductToCart(String(this.data.quantity))

            detailsPage.navigateToCartPage()

        })

        cartPage.getTotalPrice().then(function(sumPrice){

            const totalPrice = Number(sumPrice.text().trim().replace(/[^0-9\.]+/g,""))

            expect(totalPrice).equal(this.data.quantity*unitPrice)

           })

    })
})