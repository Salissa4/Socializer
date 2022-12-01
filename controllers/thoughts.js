const { thoughts, user } = require('../models');

module.exports = {
    //get all thoughts
    getThought(req, res) {
        thoughts.find({})
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    //get a thought
    getSingleThought(req,res) {
        thoughts.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
        !thought
            ? res.status(404).json({message:'No thought with that id'})
            : res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    //create thought and assign to user
    //TODO: need to figure out how to assign the thought
    createThought(req, res) {
        thoughts.create(req.body)
        
            ? res
                .status(404)
                .json({message: 'No user with that Id!'})
                : res.json(thought)
                )
            .catch((err) => res.status(500).json(err));

    //update thought 
    updateThought(req, res) {
        thoughts.fineOneAndUpdate(
            { _id: req.params.thoughtId }, 
            { $set: req.body }, 
            { runValidators: true, new: true })
        .then((thought) =>
            !thought
            ? res.status(404).json({message: 'No thought with this id!'})
            : res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    //delete thought ... and user?
    deleteThought(req, res) {
       thoughts.findOneAndDelete({ _id: req.params.userId })
       .then((thought) =>
       !thought
            ? res.status(404).json({message:'No thought with that id'})
            : user.deleteMany({ _id: { $in: thought.user 
                //or user.thought 
            }})
        )
            .then(() => res.json({message:'User and thought deleted!'}))
            .catch((err) => res.status(500).json(err));
    },

    //TODO:  create reaction

    //TODO: delete reaction
};

//reference mini-project controller