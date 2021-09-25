const Router = require('express')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const router = new Router()

const typeController = require('../controllers/typeController')

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router