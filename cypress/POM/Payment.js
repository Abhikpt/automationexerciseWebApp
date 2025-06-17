class Payment
{
    
    enterPaymentdetails(NameOnCard, cardNumber, cardExpiryMM, cardExpiryYY, cardCVC)
    {   
        cy.get('.form-group [name *= \'name\']').type(NameOnCard);

        cy.get('.form-group [name *= "card_number"]').type(cardNumber);
        cy.get('.form-group [name *= \'expiry_month\']').type(cardExpiryMM);
        cy.get('.form-group [name *= "expiry_year"]').type(cardExpiryYY);
        cy.get('.form-group [name *= "cvc"]').type(cardCVC);
    }

    ClickOnPayAndConfirmOrder()
    {
        cy.get('#submit').click();
    }
}
export default new Payment();