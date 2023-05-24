const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: [true, 'Reaction body is required.'],
      maxlength: [280, 'Reaction body must not exceed 280 characters.'],
    },
    username: {
      type: String,
      required: [true, 'Username is required.'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);

module.exports = reactionSchema;