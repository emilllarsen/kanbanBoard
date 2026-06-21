import { body } from "express-validator";

const updateCardValidator = [
  body("title")
    .optional()
    .trim()
    .escape()
    .isLength({ min: MIN_LENGTH_TITLE, max: MAX_LENGTH_TITLE })
    .withMessage(
      `Title length must be between ${MIN_LENGTH_TITLE} - ${MAX_LENGTH_TITLE} characters long`,
    ),
  body("description")
    .optional()
    .trim()
    .escape()
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
  body("priority")
    .optional()
    .notEmpty()
    .withMessage("You have to select one of the priorities"),
];
