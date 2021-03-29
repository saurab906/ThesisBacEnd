var Category = require("../models/Category");
var Validation = require("../requests/Validation");

class CategoryController {
    // create a new user and persist in database
    async addCategory(request, response) {
        const result = Validation.CATEGORY(request.body);

        if (result.error) {
            let error = result.error.details[0];
            response
                .status(422)
                .json({
                    success: false,
                    error: { field: error.path[0], message: error.message },
                });
        } else {
            try {
                // save the new user in db
                let newCategory = new Category(result.value);
                let category = await newCategory.save();
                response
                    .status(201)
                    .json({ success: true, message: "Sign up successful!", category: category });
            } catch (error) {
                response.status(500).json({ success: false, error: error.message });
            }
        }
    }
}

module.exports = new CategoryController();
