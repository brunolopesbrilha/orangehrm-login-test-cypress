import userData from "../fixtures/userData.json";

const selectorsList = {
  usernameField:"[name='username']",
  passwordField:"[name='password']",
  submitloginButton:".oxd-button--main[type='submit']",
  copyrightLink: "[href='http://www.orangehrm.com']",
  errorAlert:".oxd-alert",
  loginTitle:".orangehrm-login-title"
}

describe('Orange HRM Test', () => {
  it('conect', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.loginTitle).contains('Login');
  })
  })

  describe('Teste Name Fail', () => {
    it('pass', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
      cy.get(selectorsList.usernameField).type(userData.userFail.username);
      cy.get(selectorsList.passwordField).type(userData.userSucess.password);
      cy.get(selectorsList.submitloginButton).click();
      cy.get(selectorsList.errorAlert);
    })
  })

  describe('Teste Password Fail', () => {
    it('pass', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
      cy.get(selectorsList.usernameField).type(userData.userSucess.username);
      cy.get(selectorsList.passwordField).type(userData.userFail.password);
      cy.get(selectorsList.submitloginButton).click();
      cy.get(selectorsList.errorAlert);
    })
  })
    
  describe('Teste Link Copyright', () => {
      it('pass', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
        cy.get(selectorsList.copyrightLink).click();
        cy.get(selectorsList.copyrightLink).should('have.attr', 'href', 'http://www.orangehrm.com')
      })
  })

  describe('Teste Login - Sucess', () => {
    it('pass', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
      cy.get(selectorsList.usernameField).type(userData.userSucess.username);
      cy.get(selectorsList.passwordField).type(userData.userSucess.password);
      cy.get(selectorsList.submitloginButton).click();
      cy.location('pathname').should('equal','/web/index.php/dashboard/index');
      cy.get('.orangehrm-dashboard-grid');
    })

  }) 
