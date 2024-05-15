import {expect, test} from "@playwright/test"
import { LoginPage} from "../../page-objects/LoginPage"
import { NavBar } from "../../page-objects/NavBar"
import { getSessionCookie } from "../../helper"
import { AdminPage } from "../../page-objects/AdminPage"

test.describe('testing hrmorange demo in general', () => {
    let loginPage: LoginPage
    let navBar: NavBar
    let session 
    test.beforeAll(async ({browser}) => {
        const page = await browser.newPage()
        session = await getSessionCookie(page, "admin", "admin123")
        await page.close()
    })

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        navBar = new NavBar(page)
        await page.context().addCookies([session])
    })

    test.only("add user", async ({page})=>{
        const adminPage:AdminPage = new AdminPage(page)

        let data = {
            role: "ESS",
            status: "Enabled",
            employeeName: "Ranga  Akunuri",
            username: adminPage.generateRandomUsername(),
            password: "rimurito100",
            confirmPassword: "rimurito100"
        }

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await navBar.clickOnTab("Admin")
        await adminPage.adduser(data)
        await page.pause()

        await page.context().clearCookies()
        await page.reload()
        //await loginPage.visit()
        await loginPage.login(data.username, data.password)
        await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        //await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        //await expect(navBar.admin).toBeVisible()
    })

    test("try2", async ({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(navBar.claim).toBeVisible()
    })

    test("try3", async ({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(navBar.directory).toBeVisible()  
    })

})