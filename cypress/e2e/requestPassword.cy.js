import userData from "../fixtures/userData.json";
import RequestPasswordPage from "../e2e/page_objects/requestPasswordPage.js";

const requestPasswordPage = new RequestPasswordPage()

describe('Orange HRM Test', () => {
    it('conect', () => {
      requestPasswordPage.accessForgotPassword();
    })
    })

    describe('Test Cancel Button', () => {
        it('Connected', () => {
        requestPasswordPage.cancelForgotPassword(userData.userSuccess.username);
        })
      })
    
    describe('Test Password Change', () => {
      it('Test Successful', () => {
        requestPasswordPage.submitUserName(userData.userSuccess.username);
      })
    })
    describe('Test Button Reset', () => {
        it('Test Successful', () => {
          requestPasswordPage.clickButtonReset();
        })  
      })
      
      describe('Test Link Copyright', () => {
        it('Test Successful', () => {
          requestPasswordPage.copyright();      
        })
      })