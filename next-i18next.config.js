const I18nextBrowserLanguageDetector = require("i18next-browser-languagedetector");
const {initReactI18next} = require("react-i18next")
const path = require('path')

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ["en", "cs"],
        defaultNS: "common",
        debug: false,
        localePath: path.resolve('./public/locales'),
        localeStructure: '{{lng}}/{{ns}}',
        serializeConfig: false,
        keySeparator: ".",
        nsSeparator: ":"
    },
    use: [
       // I18nextBrowserLanguageDetector
    ]
}
