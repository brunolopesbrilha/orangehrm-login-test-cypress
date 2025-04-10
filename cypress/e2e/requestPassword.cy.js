describe('Orange HRM Test', () => {
    it('conect', () => {
      cy.visit('/auth/login')
    })
    })

    const selectorsList = {
        forgotpasswordField: ".orangehrm-login-forgot-header",
        cancelButton:".orangehrm-forgot-password-button--cancel",
        usernameField: "[name='username']",
        submitButton: "[type='submit']",
        copyrightLink: "[href='http://www.orangehrm.com']"  
    }

    describe('Test Link Copyright', () => {
      it('pass', () => {
        cy.visit('/auth/requestPasswordResetCode')
        cy.get("[href='http://www.orangehrm.com']").click()
      })
    })

    describe('Test Link do forgot-password na pagina login', () => {
        it('pass', () => {
          cy.visit('/auth/login')
          cy.get(selectorsList.forgotpasswordField).click()
        })
      })

    describe('Test cancel button', () => {
        it('pass', () => {
          cy.visit('/auth/requestPasswordResetCode')
          cy.get(selectorsList.cancelButton).click()
        })
      })
    
    describe('Test password change', () => {
      it('pass', () => {
        cy.visit('/auth/requestPasswordResetCode')
        cy.get(selectorsList.usernameField).type("Admin")
        cy.get(selectorsList.submitButton).click()
      })
    })
    describe('Test button Reset', () => {
        it('pass', () => {
          cy.visit('/auth/requestPasswordResetCode')
          cy.get(selectorsList.submitButton).click()
        })
      })