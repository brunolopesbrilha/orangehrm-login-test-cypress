describe('Orange HRM Test', () => {
  it('conect', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(".orangehrm-login-title").should('contain.text','Login');
  })
  })

  const selectorsList = {
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    submitloginButton:".oxd-button--main[type='submit']",
    copyrightLink: "[href='http://www.orangehrm.com']",
    errorAlert:".oxd-alert"
  }

  describe('Teste Name Fail', () => {
    it('pass', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
      cy.get(selectorsList.usernameField).type('admim');
      cy.get(selectorsList.passwordField).type('admin123');
      cy.get(selectorsList.submitloginButton).click();
      cy.get(selectorsList.errorAlert);
    })
  })

  describe('Teste Password Fail', () => {
    it('pass', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
      cy.get(selectorsList.usernameField).type('admim');
      cy.get(selectorsList.passwordField).type('admi123');
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
      cy.get(selectorsList.usernameField).type('Admin');
      cy.get(selectorsList.passwordField).type('admin123');
      cy.get(selectorsList.submitloginButton).click();
      cy.location('pathname').should('equal','/web/index.php/dashboard/index');
      cy.get('.orangehrm-dashboard-grid');
    })

  }) 
