import { body } from "express-validator";
import {
  MIN_LENGTH_TITLE,
  MAX_LENGTH_TITLE,
  MIN_LENGTH_DESCRIPTION,
  MAX_LENGTH_DESCRIPTION,
} from "@/config/constants.js";
import { dateNotInPast } from "@/service/kanbanValidation.js";
const createCardValidator = [
  body("title")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Must type out a title")
    .isLength({ min: MIN_LENGTH_TITLE, max: MAX_LENGTH_TITLE })
    .withMessage(
      `Title length must be between ${MIN_LENGTH_TITLE} - ${MAX_LENGTH_TITLE} characters long`,
    ),
  body("description")
    .trim()
    .escape()
    .optional()
    .isLength({
      min: MIN_LENGTH_DESCRIPTION,
      max: MAX_LENGTH_DESCRIPTION,
    })
    .withMessage(
      `Description length must be between ${MIN_LENGTH_DESCRIPTION} - ${MAX_LENGTH_DESCRIPTION} characters long`,
    ),
  body("deadline")
    .isISO8601()
    .custom(dateNotInPast)
    .withMessage("Deadline date cannot be set in the past")
    .optional(),
  body("priority").notEmpty().withMessage("You have to select one of the priorities"),
];
