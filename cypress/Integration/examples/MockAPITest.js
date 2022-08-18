describe('XHR Testing', function(){

    it('Mocking API', function(){

        const product = 'htc'

        cy.visit('https://demo.nopcommerce.com/')

        cy.intercept({

            method:'GET',
            url:`https://demo.nopcommerce.com/catalog/searchtermautocomplete?term=${product}`

        }, {

            statusCode:200,
            body:[{"label":"HTC One M8 Android L 5.0 Lollipop","producturl":"/htc-one-m8-android-l-50-lollipop","productpictureurl":null,"showlinktoresultsearch":false}]

        }).as('searchResult')

        cy.get('#small-searchterms').type(product)

        cy.wait('@searchResult')
        
    })
})