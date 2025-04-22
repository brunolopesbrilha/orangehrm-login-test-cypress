import LoginPageClass from "./page_objects/loginPage.js";
import TimePageClass from "./page_objects/timePage.js";
import DashBoardPageClass from "./page_objects/dashboardPage.js";
import userData from "../fixtures/userData.json"

const loginPage = new LoginPageClass();
const timePage = new TimePageClass();
const dashBoardPage = new DashBoardPageClass();


describe('Orange HRM Test Page', () => {
    it('Connected', () => {
        loginPage.accessLoginPage();
        loginPage.loginAsValidUser(userData.userSuccess.username, userData.userSuccess.password);
        cy.get(dashBoardPage.selectorList().menuBar).each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                if (text.trim().includes("Time")) {
                    cy.wrap($el).click()
                } else {
                    cy.log(`Ignore: ${text.trim()}`);
                }
            })
        
        })
        cy.get(timePage.selectAttendance());
    })
    
})