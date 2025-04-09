describe('Orange HRM Test', () => {
  it('conect', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
  })

  const selectorsList = {
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    submitloginButton:".oxd-button--main[type='submit']",
    copyrightLink: "[href='http://www.orangehrm.com']"
  }
  
  describe('Teste Login', () => {
    it('pass', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
      cy.get(selectorsList.usernameField).type('Admin');
      cy.get(selectorsList.passwordField).type('admin123');
      cy.get(selectorsList.submitloginButton).click();
    })
  })
  describe('Teste Name Error', () => {
    it('pass', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
      cy.get(selectorsList.usernameField).type('admim');
      cy.get(selectorsList.passwordField).type('admin123');
      cy.get(selectorsList.submitloginButton).click();
    })
  })
  describe('Teste Password Error', () => {
    it('pass', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
      cy.get(selectorsList.usernameField).type('admim');
      cy.get(selectorsList.passwordField).type('admi123');
      cy.get(selectorsList.submitloginButton).click();
    })
  })
    
  describe('Teste Link Copyright', () => {
      it('pass', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
        cy.get(selectorsList.copyrightLink).click();
      })
  })

  // login 