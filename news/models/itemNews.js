const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    heading: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    description: {
      type: String,
      required: true
    },
    publishedAt: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    urlToImage: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

schema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("ItemNews", schema);
