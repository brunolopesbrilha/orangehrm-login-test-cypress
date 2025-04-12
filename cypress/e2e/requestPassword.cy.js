import userData from "../fixtures/userData.json"
  import RequestPasswordPage from "../e2e/page_objects/requestPasswordPage.js" 

  const requestPasswordPage = new RequestPasswordPage()

describe('Orange HRM Test', () => {
    it('conect', () => {
      cy.visit('/auth/login')
    })
    })

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