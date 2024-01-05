const {getAge} = require("../plugins/get-age.plugin.js"); 
const {getId} = require("../plugins/get-id.plugin.js");
const {http} = require("../plugins/http-client.plugin.js");
const buildLogger = require("../plugins/logger.plugin.js");

module.exports = {
    getAge,
    getId,
    http,
    buildLogger
}