import { Locator, Page, expect } from "@playwright/test";


export class AdminPage {

    readonly page: Page
    readonly btnAddUser: Locator
    readonly slctUserRole: Locator
    readonly slctStatus: Locator
    readonly inputEmployee: Locator
    readonly inputUsername: Locator
    readonly inputPassword: Locator
    readonly inputConfirmPassword: Locator
    readonly saveButton: Locator
    readonly successMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.btnAddUser = page.getByRole('button', { name: ' Add ' })
        this.slctUserRole = page.locator('.oxd-select-text').first()
        this.slctStatus = page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2)
        this.inputEmployee = page.getByPlaceholder('Type for hints...')
        this.inputUsername = page.getByRole('textbox').nth(2)
        this.inputPassword = page.getByRole('textbox').nth(3)
        this.inputConfirmPassword = page.getByRole('textbox').nth(4)
        this.saveButton = page.getByRole('button', { name: 'Save' })
        this.successMessage = page.getByText('SuccessSuccessfully Saved×')
        
    }
    async selectUserRole(role:string) {
        await this.slctUserRole.click()
        await this.page.getByRole('option', { name: role }).click()
    }

    async selectAcountStatus(status:string) {
        await this.slctStatus.click()
        await this.page.getByRole('option', { name: status }).click()
    }

    async selectEmployee(name:string) {
        await this.inputEmployee.fill(name)
        await this.page.getByRole('option', { name: name }).click()
    }

    
    async adduser(data:{role:string, status:string, employeeName:string, username:string, password:string, confirmPassword:string}) {
        await this.btnAddUser.click()
        await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
        await this.selectUserRole(data.role)
        await this.selectAcountStatus(data.status)
        await this.selectEmployee(data.employeeName)

        await this.inputUsername.fill(data.username)
        await this.inputPassword.fill(data.password)
        await this.inputConfirmPassword.fill(data.confirmPassword)
        await this.page.pause()
        await this.saveButton.click()
        await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')	
    }

    generateRandomUsername(){
        let random = Math.floor(Math.random() * 1000000)
        return `sowjanya${random}`
    }


}