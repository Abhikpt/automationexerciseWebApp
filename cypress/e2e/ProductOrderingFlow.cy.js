import ProductPage from '../POM/ProductPage';
import Home from '../POM/HomePage';
import CartPage from '../POM/CartPage';
import CheckoutPage from '../POM/Checkout';
import Payment from '../POM/Payment';

describe('Validate the cart flow ', () => 
{ 
 
  it('Go to Products page', () =>
  {
    cy.setCookie('sessionid', 'kggy6ae6sxuvcq4kvsdonv5todlpc5i2');
    cy.visit('https://www.automationexercise.com/')
    Home.ProductLink().click()
    ProductPage.addTOCart('Fancy Green Top') 
    ProductPage.NavigatefromPopupTo('continue').click() 
    ProductPage.addTOCart('Men Tshirt') 
    ProductPage.NavigatefromPopupTo('viewCart').click()
    CartPage.checkoutButton.click()
    CheckoutPage.clickOncheckout()
    Payment.enterPaymentdetails('John Doe', '4111111111111111', '12', '2025', '123')
    Payment.ClickOnPayAndConfirmOrder()
    cy.get('.container .row div>p').should('have.text','Congratulations! Your order has been confirmed!')

    
  })

})

