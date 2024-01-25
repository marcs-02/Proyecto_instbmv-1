const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
    {
        title: { type: String, required: true},
        description: { type: String, required: true},
        user: { type: String, required: true},
        user_id: { type: ObjectId , ref: "User", required: true}
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Note", NoteSchema);