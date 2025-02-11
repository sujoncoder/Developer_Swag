import mongoose from "mongoose";
import createError from "http-errors";



// FIND WITH ID
export const findWithId = async (Model, id, options = {}) => {
    try {
        const item = await Model.findById(id, options);

        if (!item) {
            throw createError(404, `${Model.modelName} does not exist with this ID`)
        };

        return item;

    } catch (error) {
        if (error instanceof mongoose.Error) {
            throw createError(404, "Invalid item ID")
        }
        throw error
    }
};