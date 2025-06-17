
class ProductPage 
{   

    getProductElement(productName)
    {
        cy.get('.features_items .productinfo.text-center').each(($el) => 
        {
            const prodcut = $el.find('p').text().trim()
      
            if (product === productName) {                
              // Step 5: Click "Add to cart" inside this product box
            //  cy.wrap($el).find('.add-to-cart').eq(0).click()      
              return $el
            }
        }) 
     }

  getProductTitle(product) {
    item = this.getProductElement(product);
    return cy.wrap(item).find('.product-title');
  }

  getProductPrice(product) {
    item = this.getProductElement(product);
    return cy.get('.product-price');
  }

  getAddToCartButton(product) {
    item = this.getProductElement(product);
    return cy.get('.add-to-cart-button');
  }

  getProductDescription(product) {
    item = this.getProductElement(product);
    return cy.get('.product-description');
  }

  getProductImage() {
    item = this.getProductElement(product);
    return cy.get('.product-image');
  }


  //productName = 'Summer White Top';
  addTOCart(productName)
  {
    cy.get('.features_items .productinfo.text-center').each(($el) => 
        {
            const product = $el.find('p').text().trim()
      
            if (product === productName) {                
              // Step 5: Click "Add to cart" inside this product box
              cy.wrap($el).find('.add-to-cart').eq(0).click()             
              // Stop the loop by returning false
              return false
            }
        }) 
  }


  NavigatefromPopupTo(operation)
  {
    if (operation == 'viewCart')
    return cy.get('.modal-content .modal-body a');
    else
    return cy.get('.modal-content button');

  }

}

export default new ProductPage;

// export default  ProductPage;    -> it will require creation of object before use
