import LoginPage from "./loginPage.js";

class RequestPasswordPage {
    constructor() {
        this.loginPage = new LoginPage();
    }
    selectorsList() {
        const Selectors = {
            forgotpasswordField: ".orangehrm-login-forgot-header",
            usernameField: "[name='username']",
            resetButton: "[type='submit']",
            copyrightLink: "[href='http://www.orangehrm.com']",
            forgotPasswordTitle: ".orangehrm-forgot-password-title",
            cancelButton: ".orangehrm-forgot-password-button--cancel",
            errorMenssage: ".oxd-input-field-error-message",
            copyrightLink: "[href='http://www.orangehrm.com']",
        }
        return Selectors
    }
    accessForgotPassword() {
        cy.visit('/auth/requestPasswordResetCode');
    }

    submitUserName(username) {
        this.accessForgotPassword()
        const {usernameField, resetButton, forgotPasswordTitle} = this.selectorsList();
        cy.get(usernameField).type(username);
        cy.get(resetButton).click();
        cy.get(forgotPasswordTitle).should('be.visible');
    }

    cancelForgotPassword(username) {
        this.accessForgotPassword();
        const {usernameField, cancelButton} = this.selectorsList();
        cy.get(usernameField).type(username);
        cy.get(cancelButton).click();
        cy.location('pathname').should('equal', '/web/index.php/auth/login');
        cy.get(this.loginPage.selectorList().loginTitle).should('be.visible');
    }
    clickButtonReset() {
        this.accessForgotPassword()
        const {resetButton, errorMenssage} = this.selectorsList();
        cy.get(resetButton).click();
        cy.get(errorMenssage).should('be.visible');
    }

    copyright() {
        this.accessForgotPassword()
        const {copyrightLink} = this.selectorsList();
        cy.get(copyrightLink).click()
        cy.get(copyrightLink).should('have.attr', 'target', '_blank')
        cy.get(copyrightLink).should('have.attr', 'href', 'http://www.orangehrm.com');
    }
}
export default RequestPasswordPage