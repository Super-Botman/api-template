const router = require('express').Router()
const IndexControllers = require('../Controllers/IndexControllers')

router.get('/', IndexControllers.helloWorldRequest)

module.exports = router