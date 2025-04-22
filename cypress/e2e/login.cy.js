  import userData from "../fixtures/userData.json"
  import LoginPageClass from "../e2e/page_objects/loginPage.js" 
  import DashBoardPage from "../e2e/page_objects/dashboardPage.js"
 

  const loginPage = new LoginPageClass()
  const dashboardPage = new DashBoardPage()

  describe('Orange HRM Test Page', () => {
    it('Connected', () => {
      loginPage.accessLoginPage()
    })
  })

describe('Test Name - Input: Incorrect', () => {
  it('Test Successful', () => {
    loginPage.invalidUsername(userData.userFail.username,userData.userSuccess.password);
  })
})

describe('Test Password - Input: Incorrect', () => {
  it('Test Successful', () => {
    loginPage.invalidPassword(userData.userSuccess.username,userData.userFail.password);
  })
})

describe('Test Link Copyright - Input: Functional', () => {
  it('Test Successful', () => {
    loginPage.copyright()
  })
})

describe('Test Login - Input: Correct', () => {
  it('Test Successful', () => {
    loginPage.loginAsValidUser(userData.userSuccess.username,userData.userSuccess.password);
  })
})

describe('Test Forgot Password Link on Login Page', () => {
  it('Test Successful', () => {
   loginPage.forgetPassword()
  })
})

describe('Test Social Media Links', () => {
  it('Test Successful', () => {
   loginPage.socialmediaCheck()
  })
})