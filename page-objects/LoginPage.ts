import { Locator, Page, expect } from "@playwright/test";


export class LoginPage{

    readonly page: Page
    readonly userInput: Locator
    readonly passInput: Locator
    readonly submitButton: Locator
    readonly errMessage: Locator

    constructor(page: Page){
        this.page = page
        this.userInput = page.getByPlaceholder('Username')
        this.passInput = page.getByPlaceholder('Password')
        this.submitButton = page.locator("[type='submit']")
        this.errMessage = page.getByRole('alert')
    }

    async visit(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        return this
    }

    async login(username:string, password:string){
        await this.userInput.fill(username)
        await this.passInput.fill(password)
        await this.submitButton.click()
        return this
    }

    async assertLoginFail(){
        await expect(this.errMessage).toBeVisible()        
    }

    async assertLoginRight(){
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }

    async getSessionCookie(){
        return (await this.page.context().cookies()).find(cookie => cookie.name === "orangehrm")
    }


}









