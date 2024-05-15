import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

    use: {
        headless: true,
        video: "retain-on-failure",
        screenshot: "only-on-failure"
    },

    projects:[
        {
            name: 'Chromium',
            use: {browserName: "chromium"}
        },
        {
            name: 'Firefox',
            use: {browserName: "firefox"}
        },
        {
            name: 'Webkit',
            use: {browserName: "webkit"}
        }
    ]

}

export default config