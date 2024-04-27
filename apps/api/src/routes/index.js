const projects = require('./projects.router.js');
const auth = require('./auth.router.js');
const label = require('./label.router.js');
const file = require('./file.router')
const image = require('./image.router.js');
const message = require("./message.router.js")
module.exports =  {
    projects,
    auth,
    label,
    image,
    file,
    message

}
