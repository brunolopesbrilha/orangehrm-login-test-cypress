class LoginPageClass {

    selectorList() {
        const Selectors = {
            usernameField: "[name='username']",
            PasswordField: "[name='password']",
            SubmitloginButton: ".oxd-button--main[type='submit']",
            ErrorAlert: ".oxd-alert",
            LoginTitle: ".orangehrm-login-title",
            CopyrightLink: "[href='http://www.orangehrm.com']",
        }
        return Selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login');
    }

    loginAsValidUser(username, password) {
        this.accessLoginPage();
        cy.get(this.selectorList().usernameField).click().type(username);
        cy.get(this.selectorList().PasswordField).click().type(password);
        cy.get(this.selectorList().SubmitloginButton).click();
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
        //cy.get('.orangehrm-dashboard-grid');
    }

    invalidUsername(username, password) {
        this.accessLoginPage();
        cy.get(this.selectorList().usernameField).click().type(username);
        cy.get(this.selectorList().PasswordField).click().type(password);
        cy.get(this.selectorList().SubmitloginButton).click();
        cy.get(this.selectorList().ErrorAlert);
    }

    invalidPassword(username, password) {
        this.accessLoginPage();
        cy.get(this.selectorList().usernameField).click().type(username);
        cy.get(this.selectorList().PasswordField).click().type(password);
        cy.get(this.selectorList().SubmitloginButton).click();
        cy.get(this.selectorList().ErrorAlert); 
    }

    copyright() {
        this.accessLoginPage();
        cy.get(this.selectorList().CopyrightLink).click()
        cy.get(this.selectorList().CopyrightLink).should('have.attr', 'href', 'http://www.orangehrm.com');
    }
}
export default LoginPageClass