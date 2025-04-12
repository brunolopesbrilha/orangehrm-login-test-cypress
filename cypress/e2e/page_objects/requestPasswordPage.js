class RequestPasswordPage {

    selectorsList() {
        const Selectors = {
            forgotpasswordField: ".orangehrm-login-forgot-header",
            usernameField: "[name='username']",
            resetButton: "[type='submit']",
            copyrightLink: "[href='http://www.orangehrm.com']",
            forgotPasswordTitle: ".orangehrm-forgot-password-title",
            cancelButton: ".orangehrm-forgot-password-button--cancel",
            errorMenssage: ".oxd-input-field-error-message",
            CopyrightLink: "[href='http://www.orangehrm.com']",
        }
        return Selectors
    }
    accessForgotPassword() {
        cy.get('/auth/requestPasswordResetCode');
    }

    submitUserName(username) {
        cy.get(this.selectorsList().usernameField).click().type(username);
        cy.get(this.selectorsList().resetButton).click();
        cy.get(this.selectorsList().forgotPasswordTitle);
    }

    cancelForgotPassword(username) {
        cy.get(this.selectorsList().usernameField).click().type(username);
        cy.get(this.selectorsList().cancelButton).click();
        cy.location('pathname').should('equal', '/auth/login');
    }
    clickButtonReset() {
        cy.get(this.selectorsList().resetButton).click();
        cy.get(this.selectorsList().errorMenssage);
    }

    copyright() {
        this.accessLoginPage();
        cy.get(this.selectorList().CopyrightLink).click()
        cy.get(this.selectorList().CopyrightLink).should('have.attr', 'href', 'http://www.orangehrm.com');
    }
}