//TODO: ref mini student cont

// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { thoughts, user } = require('../models');

//TODO: aggregate function?


module.exports = {
    //get all users
    getUsers(req, res) {
        user.find()
            .then(async (users) => {
                const userObj = {
                    users,
                    //userCount: await userCount(),
                };
                return res.json(userObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    //get single user
    getSingleUser(req, res) {
        user.findOne({_id: req.params.userId})
        .select('-__v')
        //.lean() LOOK UP WHAT THIS IS
        .then(async (users) =>
            !users
            ? res.status(404).json({message: 'No user with this id!'})
            : res.json({
                user,
                //thought: await thought(req.params.userId), NEED THIS?
            })
        )
        .catch ((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    //create new user
    createUser(req, res) {
        user.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    //TODO UPDATE USER
    // enter code


    //delete user and thought
    deleteUser(req, res) {
        user.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
            !user  
            ? res.status(404).json({message: 'No user exists!'})
            : thoughts.findOneAndUpdate(
                { user: req.params.userId },
                { $pull: { user: req.params.userId }},
                { new: true}
            ))
        .then((thought) => 
            !thought
            ? res.status(404).json({message: 'Thought deleted but not user found',})
            : res.json({message: 'Thought successfully deleted'})
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });       
    },
};

