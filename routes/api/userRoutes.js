const router = require('express').Router();

const {

} = require('../../controllers/');

//
router.route('/').get(get).post(create);

//get user by id, put, delete
router.route
.get()
.put()
.delete();

module.exports = router;