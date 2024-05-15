import test, { expect } from "@playwright/test";


test.describe.skip("api tests", ()=>{
    const baseUrl = "https://reqres.in/api/"
    let id;
    test("api1",async ({request})=>{
        const response = await request.get(baseUrl + "users?page=2")
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        console.log(responseBody.data[0].first_name)
    })

    test("api2",async ({request})=> {
        const response = await request.post(baseUrl + "users", {
            data: {
                "name": "morpheus",
                "job": "leader"
            }
        })
        expect(response.status()).toBe(201)
        const responseBody = JSON.parse(await response.text())
        id = responseBody.id
    })

    test("delete", async ({request})=>{
        const response = await request.delete(baseUrl + "users/" + id)
        expect(response.status()).toBe(204)
    })

    test("login succesful", async ({request})=>{
        const response = await request.post(baseUrl + "login",{
            data:{
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        })
        expect(response.status()).toBe(200)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.token).toBe("QpwL5tke4Pnpja7X4")
    })

    test("register succesful", async ({request})=>{
        const response = await request.post(baseUrl + "register",{
            data:{
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        })
        expect(response.status()).toBe(200)
    })


})