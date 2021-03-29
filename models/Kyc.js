var mongoose = require("mongoose");

const SCHEMA = mongoose.Schema;

const KYCSCHEMA = new SCHEMA({
    fullName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
    },
    fatherName: {
        type: String,
        required: [true, "Family name is required"],
        trim: true,
    },
    grandfather: {
        type: String,
        required: [true, "GrandFather is required"],
        unique: true,
        trim: true,
    },

    dob: {
        type: Date,
        trim: true,
    },
    Gender: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "email is required"],
        trim: true,
    },
    phone: {
        type: Number,
        required: [true, "Family name is required"],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


const KYCSCHEMA = mongoose.model("kyc", KYCSCHEMA);
// export default CATEGORY;
module.exports = CATEGORY;
