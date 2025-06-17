class CheckoutPage
{

    clickOncheckout()
    {
        cy.get('a.check_out').click()
    }

}

export default new CheckoutPage();