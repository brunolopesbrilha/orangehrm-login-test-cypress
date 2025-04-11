import userData from "../fixtures/userData.json";

const selectorsList = {
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    submitloginButton:".oxd-button--main[type='submit']",
    copyrightLink: "[href='http://www.orangehrm.com']",
    errorAlert:".oxd-alert",
    loginTitle:".orangehrm-login-title",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    pimTitle: ".oxd-topbar-header-breadcrumb-module"
  }

describe('Teste Login - Sucess', () => {
    it('pass', () => {
      cy.visit('/auth/login');   
      cy.get(selectorsList.usernameField).type(userData.userSucess.username);
      cy.get(selectorsList.passwordField).type(userData.userSucess.password);
      cy.get(selectorsList.submitloginButton).click();
      cy.location('pathname').should('equal','/web/index.php/dashboard/index');
      cy.get('.orangehrm-dashboard-grid');
      cy.get(selectorsList.myInfoButton).click();
      cy.get(selectorsList.pimTitle).contains('PIM');
    })
})
