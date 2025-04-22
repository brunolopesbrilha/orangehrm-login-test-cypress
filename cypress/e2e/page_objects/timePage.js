class TimePageClass {
    selectorList() {
        const Selectors = {
            topBarNav: ".oxd-topbar-body-nav-tab",
            subBarNav: ".oxd-topbar-body-nav-tab-link",
            noRecordsFoundMensage: ".oxd-text--toast-title",

        }
        return Selectors

    }

    selectAttendance() {
        cy.get(this.selectorList().topBarNav).each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
            if (text.trim().includes("Attendance")) {
                cy.wrap($el).click()
                cy.get(this.selectorList().subBarNav).should('be.visible').each(($subEl) => {
                    cy.wrap($subEl).invoke('text').then((subText) => {
                        if (subText.trim() === 'My Records') {
                            cy.wrap($subEl).click()
                        } else {
                            cy.log(`Ignore: ${text.trim()}`);
                        }
                    }

                    )

                })
            } else {
                cy.log(`Not is Attendance: ${text.trim()}`);
            }
        })}
        )

    }

} export default TimePageClass