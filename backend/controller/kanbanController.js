import {
  createCardService,
  getAllCardsService,
} from "../service/kanbanService.js";
import { matchedData } from "express-validator";

export async function getAllCardsController(req, res) {
  const cards = await getAllCardsService();
  if(!cards){
    req.status(404).json({error: "No cards was found"})
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

// export async function getOneCardController(id){
//     const card = kanbanService.getOneCardService(id);
//     res.status(200).json(cards);
// }
