describe('Add to cart functionality for Mamacita', function() {

    beforeEach(() => {
        if (cy.state("test").currentRetry() > 0) {
        cy.visit("/");
        cy.clearCookies();
        }
      });
      before(() => {
        cy.visit("/");
        cy.clearCookies();
    });

    it('Guest user flow', function() {
        cy.get('.button-home').eq(0).scrollIntoView();
        cy.get('.agree-cookie').contains('Ok').click();
        cy.get('.button-home').eq(1).scrollIntoView();
        cy.get('.button-home').eq(2).scrollIntoView().click({force:true});
        cy.get('[id="address-input"]').type('Seidengasse 44, 1070 Wien, Austria',{ delay: 100 }).type('{enter}');
        cy.wait(200);
        cy.get('.image-link-container').eq(1).scrollIntoView().should('be.visible').click();
        //Page is getting loaded after this, do not know the exact reason, need to know the flow of this and its related apis  and cookies if any
        //Checkout page shows that the kitchen is not taking any orders, so it couldn't be tested
    });
    });
