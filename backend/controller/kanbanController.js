import {
  createCardService,
  getAllCardsService,
  updateCardService,
  deleteCardService
} from "../service/kanbanService.js";
import { matchedData } from "express-validator";

export async function getAllCardsController(req, res) {
  const cards = await getAllCardsService();
  if (!cards) {
    req.status(404).json({ error: "No cards was found" });
  }
  res.status(200).json(cards);
}

export async function createCardController(req, res) {
  const { title, description, deadline, priority } = req.body;
  const createdCard = await createCardService({
    title,
    description,
    deadline,
    priority,
  });

  res.status(201).json({ message: "Created successfully", createdCard });
}

export async function updateCardController(req, res) {
  const cardId = req.params.id; // Id in the URL
  const updatedData = req.validate;

  const updatedCard = await updateCardService(cardId, updatedData);
  res.status(200).json({message: "Card updated successfully", updatedCard});
}

export async function deleteCardController(req, res){
  const cardId = req.params.id;

  const deleteCard = await deleteCardService(cardId);
  res.status(200).json({message: "Card deleted successfully!"});
}