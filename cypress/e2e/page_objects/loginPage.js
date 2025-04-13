class LoginPageClass {

    selectorList() {
        const Selectors = {
            usernameField: "[name='username']",
            PasswordField: "[name='password']",
            SubmitloginButton: ".oxd-button--main[type='submit']",
            ErrorAlert: ".oxd-alert",
            LoginTitle: ".orangehrm-login-title",
            CopyrightLink: "[href='http://www.orangehrm.com']",
            forgetPasswordTitle: ".orangehrm-login-forgot-header",
            forgetPasswordUrl: '/web/index.php/auth/requestPasswordResetCode',
            linkedinIcon: "[href='https://www.linkedin.com/company/orangehrm/mycompany/']", 
            facebookIcon: "[href='https://www.facebook.com/OrangeHRM/']",
            twitterIcon: "[href='https://twitter.com/orangehrm?lang=en']",
            ytIcon:"[href='https://www.youtube.com/c/OrangeHRMInc']",
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
        cy.get(this.selectorList().CopyrightLink).click();
        cy.get(this.selectorList().CopyrightLink).should('have.attr', 'href', 'http://www.orangehrm.com');
    }

    forgetPassword(){
        this.accessLoginPage();
        cy.get(this.selectorList().forgetPasswordTitle).click();
        cy.location('pathname').should('include', this.selectorList().forgetPasswordUrl);
    }

    socialmediaCheck() {
        this.accessLoginPage();
    
        const icons = [
            {
                icon: 'linkedinIcon',
                urls: ['linkedinString', 'orangehrmString']
            },
            {
                icon: 'facebookIcon',
                urls: ['facebookString', 'orangehrmString']
            },
            {
                icon: 'ytIcon',
                urls: ['ytString', 'orangehrmString']
            },
            {
                icon: 'twitterIcon',
                urls: ['twitterString', 'orangehrmString']
            }
        ];
    
        icons.forEach(({ icon, urls }) => {
            const selector = this.selectorList()[icon];
            cy.get(selector).click();
            cy.get(selector).should('have.attr', 'target', '_blank');
            urls.forEach(urlKey => {
                const expectedUrl = this.selectorList()[urlKey];
                cy.get(selector).should('have.attr', 'href').and('include', expectedUrl);
            });
        });
    }
    
}
export default LoginPageClass

// socialmediaCheck(){
    //     this.accessLoginPage()
    //     cy.get(this.selectorList().linkedinIcon).click();
    //     cy.get(this.selectorList().linkedinIcon).should('have.attr', 'target', '_blank');
    //     cy.get(this.selectorList().linkedinIcon).should('have.attr','href').and('include', this.selectorList().linkedinString);
    //     cy.get(this.selectorList().linkedinIcon).should('have.attr','href').and('include', this.selectorList().orangehrmString);
    //     cy.get(this.selectorList().facebookIcon).click();
    //     cy.get(this.selectorList().facebookIcon).should('have.attr', 'target', '_blank');
    //     cy.get(this.selectorList().facebookIcon).should('have.attr','href').and('include', this.selectorList().facebookString);
    //     cy.get(this.selectorList().facebookIcon).should('have.attr','href').and('include', this.selectorList().orangehrmString);
    //     cy.get(this.selectorList().ytIcon).click();
    //     cy.get(this.selectorList().ytIcon).should('have.attr', 'target', '_blank');
    //     cy.get(this.selectorList().ytIcon).should('have.attr','href').and('include', this.selectorList().ytString);
    //     cy.get(this.selectorList().ytIcon).should('have.attr','href').and('include', this.selectorList().orangehrmString);
    //     cy.get(this.selectorList().twitterIcon).click();
    //     cy.get(this.selectorList().twitterIcon).should('have.attr', 'target', '_blank');
    //     cy.get(this.selectorList().twitterIcon).should('have.attr','href').and('include', this.selectorList().twitterString);
    //     cy.get(this.selectorList().twitterIcon).should('have.attr','href').and('include', this.selectorList().orangehrmString);
    // }