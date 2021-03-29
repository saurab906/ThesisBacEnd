var mongoose = require("mongoose");

const SCHEMA = mongoose.Schema;

const CATEGORYSCHEMA = new SCHEMA({
    loanType: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


const CATEGORY = mongoose.model("category", CATEGORYSCHEMA);
// export default CATEGORY;
module.exports = CATEGORY;
