import userData from "../fixtures/userData.json"
import DashBoardPage from "../e2e/page_objects/dashboardPage.js"

const dashBoardPage = new DashBoardPage()

describe('Start Work Timer', () =>{
  it('Successful', () => {
    dashBoardPage.widgetCheck(userData.userSuccess.username, userData.userSuccess.password);
    dashBoardPage.widgetTimeAtWork();
    })
})
