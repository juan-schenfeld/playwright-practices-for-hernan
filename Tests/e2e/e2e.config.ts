import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

    
    use: {
        headless: false,
        video: "off",
        screenshot: "off",
        navigationTimeout : 60000
    },

    projects:[
        {
            name: 'Chromium',
            use: {browserName: "chromium"}
        }
    ]
}

export default config