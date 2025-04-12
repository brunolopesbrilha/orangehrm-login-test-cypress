import userData from "../fixtures/userData.json"
import DashBoardPage from "../e2e/page_objects/dashboardPage.js" 

  const dashBoardPage = new DashBoardPage()

  describe('Orange HRM Test Page', () => {
    it('Connected', () => {
      dashBoardPage.acessLoginPage()
    })
  })
