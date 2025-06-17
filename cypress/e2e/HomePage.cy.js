describe('Validate the cart flow ', () => 
    {
    it('validated home page elements', () => 
      {
        cy.setCookie('sessionid', 'kggy6ae6sxuvcq4kvsdonv5todlpc5i2');
        cy.visit('https://www.automationexercise.com/')
        cy.get('div#slider-carousel h1').eq(0).should('have.text', 'AutomationExercise')    
        cy.get('.features_items .productinfo.text-center').each(($el) => 
          {
              const productName = $el.find('p').text().trim()
        
              if (productName === 'Summer White Top') {
                  
                // Step 5: Click "Add to cart" inside this product box
                cy.wrap($el).find('.add-to-cart').eq(0).click()
        
                // Step 6: Click "Continue Shopping"  or "view cart" on modal
                cy.get('.modal-content .modal-body a').click()
                //cy.get('.modal-content .btn.btn-success.close-modal').click()               
        
                // Stop the loop by returning false
                return false
              }
          })
      
           
      })
})