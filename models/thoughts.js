const { Schema, model } = require('mongoose');

// Schema to create thoughts model
const thoughtsSchema = new Schema(
    {
    thoughtsText: {
        type: String,
        required: true,
        //insert min 1 and max 280 char
    },
    createdAt: {
        //date
        //default value to current timestamp
        //getter method to format timestamp on query
    },
    username: {
        type: String,
        required: true,
    },
    reactions: //reactionSchema
  },
  {     
    toJSON: {
      virtuals: true,
    },
},

//create a virtual property 'reaction' retrieve reaction length
thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const thoughts = model('thoughts', thoughtsSchema);
module.exports = thoughts;