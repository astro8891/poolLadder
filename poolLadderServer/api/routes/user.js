const User = require('../../models/user');

module.exports = function (router) {

    // GET - Retrieve USERs
    router.get('/user', function (req, res) {

        User.find().sort({ name: 1 }).exec()
            .then(users => res.status(200).json(users))
            .catch(err => res.status(500).json({ message: 'Error retrieving users', error: err }))
    })

    // // POST - Update USER
    // router.post('/user')
};