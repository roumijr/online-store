const Router = require('express')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


const router = new Router()

const deviceController = require('../controllers/deviceController')



router.post('/', checkRoleMiddleware('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router