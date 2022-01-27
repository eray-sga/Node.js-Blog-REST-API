const router = require("express").Router()
const PostController = require("../controllers/PostController")


router.post('/', PostController.addPost)
router.put('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)
router.get('/:id', PostController.getPost)
router.get('/', PostController.allPost)


module.exports = router;