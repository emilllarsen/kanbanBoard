import express from 'express';
import validate from '../validation/validate.js';
import { createCardValidator } from '../validation/createCard.js';
import { updateCardValidator } from '../validation/updateCard.js';
import { getAllCardsController, createCardController, updateCardController, deleteCardController } from '../controller/kanbanController.js';
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

kanbanRoute.patch("/cards/:id", updateCardValidator(), validate, updateCardController );

kanbanRoute.delete("/cards/:id", deleteCardController);



export default kanbanRoute;
