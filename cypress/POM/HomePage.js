
class Home
{
    homeLink()
    {
        return cy.get('.navbar-nav a .fa-home');
    }

    ProductLink()
    {
        return cy.get('.navbar-nav a[href*= \'products\']');
    }

    cartLink()
    {
        return cy.get('.navbar-nav a[href*= \'view_cart\']');
    }

    loginLink()
    {
        return cy.get('.navbar-nav a[href*= \'login\']');
    }

    logoutLink()
    {
        return cy.get('.navbar-nav a[href*= \'logout\']');
    }

}

export default new Home();