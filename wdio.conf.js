export const config = {
    
    runner: 'local',
    specs: [
        './test/specs/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "ebac-mod-16",
        "appium:automationName": "UiAutomator2",
        "appium:app": "/Users/joycepontesf/repositórios/teste-native-demo-app-webdriverio/app/android.wdio.native.app.v1.0.8.apk",
        "appium:appWaitActivity": ".MainActivity"
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'localhost',
    port: 4723,
    path: '/wd/hub',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
