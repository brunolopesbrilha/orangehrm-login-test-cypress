import Auth from "./auth"
import PunchOutPageClass from "./timePage-PuchOutPage.js";
import PunchInPageClass from "./timePage-PuchInPage.js";

class DashBoardPageClass {
   
    constructor() {
        this.auth = new Auth();
        this.punchOutPage = new PunchOutPageClass();
        this.punchInPage = new PunchInPageClass();
    }

    selectorList() {
        const Selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            widgetName: ".orangehrm-dashboard-widget-name", //são 7 widget na página
            widgetTimeButton: ".oxd-icon-button--solid-main",
            menuBar: ".oxd-main-menu-item--name", //são 12 na página

        }

        return Selectors
    }

    widgetTitles() {
        return [
            'Time at Work',
            'My Actions',
            'Quick Launch',
            'Buzz Latest Posts',
            'Employees on Leave Today',
            'Employee Distribution by Sub Unit',
            'Employee Distribution by Location',
        ]
    }

    loginSuccess(username, password) {
        this.auth.loginAsValidUser(username, password);
    }

    widgetCheck(username, password) {
        this.loginSuccess(username, password);
        cy.get(this.selectorList().widgetName).should('have.length', 7).each(($el, index)=> {
            cy.wrap($el).should('have.text', this.widgetTitles()[index]);
        })
    }

    widgetTimeAtWork(){
        cy.get(this.selectorList().widgetTimeButton).click();
        cy.wait(4000);
        cy.get(this.punchOutPage.selectorList().mainTitle).invoke('text').then((text)=> {
            const titleReturn = text.trim()
            const today = new Date()
            const yesterday = new Date(today)
            yesterday.setDate(today.getDate() - 1);
            const todayFormatted = today.toISOString().split('T')[0];
            const yesterdayFormatted = yesterday.toISOString().split('T')[0];

            if (titleReturn === 'Punch In') {
                console.log(text);  
                cy.get(this.punchInPage.selectorList().datePlaceHolder).click().clear().type(yesterdayFormatted);
                cy.get(this.punchInPage.selectorList().sendButton).click();
                cy.wait(4000);
                this.widgetTimeAtWork();

            } else {
                console.log(text);
                cy.get(this.punchInPage.selectorList().datePlaceHolder).click().clear().type(todayFormatted);
                cy.get(this.punchOutPage.selectorList().sendButton).click();
                cy.wait(4000);
            }
        })
        
    }

}
export default DashBoardPageClass