class CartPage
{
    open()
    {
        cy.visit('/cart.html');
    }    


    // by using as get this will work as property so can use like cartItem.click()
    get cartItem() {
        return cy.get('tbody  td');

    }
   
    get checkoutButton() {
        return cy.get('a.check_out');
    }

    get removeButton() {
        return cy.get('.cart_quantity_delete');
    }

    get cartQuantity() {         
        return cy.get('tbody .cart_quantity button');
    }
}

export default new CartPage();