class AuthClass {

    selectorList() {

        const Selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            submitloginButton: ".oxd-button--main[type='submit']",
            errorAlert: ".oxd-alert",
            loginTitle: ".orangehrm-login-title",
            copyrightLink: "[href='http://www.orangehrm.com']",
            forgetPasswordTitle: ".orangehrm-login-forgot-header",
            forgetPasswordUrl: '/web/index.php/auth/requestPasswordResetCode',
            linkedinIcon: "[href='https://www.linkedin.com/company/orangehrm/mycompany/']",
            facebookIcon: "[href='https://www.facebook.com/OrangeHRM/']",
            twitterIcon: "[href='https://twitter.com/orangehrm?lang=en']",
            ytIcon: "[href='https://www.youtube.com/c/OrangeHRMInc']",
            linkedinString: "linkedin",
            facebookString: "facebook",
            ytString: "youtube",
            twitterString: "twitter",
            orangehrmString: "range"
        } 
        return Selectors
    }

        accessLoginPage() {
            cy.visit('/auth/login');
        }

        loginAsValidUser(username, password) {
            this.accessLoginPage();
            const {usernameField, passwordField, submitloginButton } = this.selectorList();
            cy.get(usernameField).click().type(username);
            cy.get(passwordField).click().type(password);
            cy.get(submitloginButton).click();
            cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
        }

    }
     export default AuthClass