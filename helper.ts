import { LoginPage } from "./page-objects/LoginPage";

export async function getSessionCookie(page, user, pass) {
    const loginPage = (await new LoginPage(page).visit())
    await loginPage.login(user, pass)
    return await loginPage.getSessionCookie()
}