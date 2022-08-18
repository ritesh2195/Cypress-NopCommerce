describe('API Testing',function(){

    it('Search Product API', function(){

        cy.request('GET','https://demo.nopcommerce.com/catalog/searchtermautocomplete?term=htc').then(function(response){

        expect(response.status).to.be.equal(200)

        expect(response.isOkStatusCode).to.be.equal(true)

        expect(response.body[0]).to.have.property('label','HTC One M8 Android L 5.0 Lollipop')

        })
    })
})