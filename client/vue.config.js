const path = require('path')

module.exports = {
    devServer: {
        port: 3000
    },
    outputDir: path.resolve(__dirname, '../server/dist'), // build client app inside server/dist folder
}