const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://unsplash.com/photos/the-sun-is-setting-over-the-mountains-and-trees-HPMLhGy_Q3k",
            set: (v) =>
                v === ""
                    ? "https://unsplash.com/photos/the-sun-is-setting-over-the-mountains-and-trees-HPMLhGy_Q3k"
                    : v,
        }
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;