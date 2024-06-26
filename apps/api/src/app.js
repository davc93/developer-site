const express = require('express');
const cors = require('cors');
const { projects, image, auth,label,file,message } = require('./routes/index.js');
const { errorHandler } = require('./middlewares/error.handler.js');
const { checkAuth } = require('./middlewares/auth.jwt.js');
const useGraphql = require('./graphql/index.js');

async function createApp() {
    const app = express()

    app.use(cors())
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json())
    app.use('/v1/projects',projects)
    app.use('/v1/labels',label)
    app.use('/v1/images',checkAuth,image)
    app.use('/v1/auth',auth)
    app.use('/v1/file',checkAuth,file)
    app.use("/v1/messages",checkAuth,message)

    await useGraphql(app)
    
    app.use(errorHandler)
    return app    
}



module.exports = {
    createApp
}