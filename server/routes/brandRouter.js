const Router = require('express')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


const router = new Router()

const brandController = require('../controllers/brandController')

router.post('/',checkRoleMiddleware('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router