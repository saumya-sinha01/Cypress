import { LoginPage } from  "./Pages/login_page"
const  loginPage = new LoginPage()
it('POM demo', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
   
    // cy.contains('Username').type('Admin')
    // cy.contains('Password').type('admin123')
    // cy.get('.oxd-button').click()
})