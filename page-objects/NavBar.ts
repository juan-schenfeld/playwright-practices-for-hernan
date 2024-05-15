import { Locator, Page } from "@playwright/test";

export class NavBar{

    readonly page: Page
    readonly admin: Locator
    readonly pim: Locator
    readonly leave: Locator
    readonly time: Locator
    readonly recruitment: Locator
    readonly myInfo: Locator
    readonly performance: Locator
    readonly dashboard: Locator
    readonly directory: Locator
    readonly maintenance: Locator
    readonly claim: Locator
    readonly buzz: Locator



    constructor(page: Page){
        this.page = page
        this.admin = page.getByRole('link', { name: 'Admin' })
        this.pim = page.getByRole('link', { name: 'PIM' })
        this.leave = page.getByRole('link', { name: 'Leave' })
        this.time = page.getByRole('link', { name: 'Time' })
        this.recruitment = page.getByRole('link', { name: 'Recruitment' })
        this.myInfo = page.getByRole('link', { name: 'My Info' })
        this.performance = page.getByRole('link', { name: 'Performance' })
        this.dashboard = page.getByRole('link', { name: 'Dashboard' })
        this.directory = page.getByRole('link', { name: 'Directory' })
        this.maintenance = page.getByRole('link', { name: 'Maintenance' })
        this.claim = page.getByRole('link', { name: 'Claim' })
        this.buzz = page.getByRole('link', { name: 'Buzz' })
    }




    async clickOnTab(tabName:string){

        switch(tabName){
            case "Admin":
                await this.admin.click()
                break
            case "PIM":
                await this.pim.click()
                break
            case "Leave":
                await this.leave.click()
                break
            case "Time":
                await this.time.click()
                break
            case "Recruitement":
                await this.recruitment.click()
                break
            case "My Info":
                await this.myInfo.click()
                break
            case "Perfermance":
                await this.performance.click()
                break
            case "Dashboard":
                await this.dashboard.click()
                break
            case "Directory":
                await this.directory.click()
                break
            case "Maintenance":
                await this.maintenance.click()
                break
            case "Claim":
                await this.claim.click()
                break
            case "Buzz":
                await this.buzz.click()
                break
            default:
                console.log('error')
        }

    }
    


}