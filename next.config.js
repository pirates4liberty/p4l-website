const {i18n} = require('./next-i18next.config')
const withPWA = require('next-pwa')

module.exports = withPWA({
    i18n,
    future: {
        webpack5: true,
    },
    pwa: {
        dest: 'public'
    }
})
