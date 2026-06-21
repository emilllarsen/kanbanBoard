import express from 'express';
import validate from '../validation/validate.js';
import { createCardValidator } from '../validation/createCard.js';
import { getAllCardsController, createCardController } from '../controller/kanbanController.js';
const kanbanRoute = express.Router();

/**
 * What we need:
 *  GET to get all made cards
 *  POST to create new cards
 *  PATCH to edit existing cards
 *  DELETE to delete cards
 */


kanbanRoute.get("/cards", getAllCardsController);
kanbanRoute.post("/create", createCardValidator(), validate, createCardController);

// kanbanRoute.patch("/:id");
// kanbanRoute.delete("/:id");



export default kanbanRoute;
