import { Kanban } from "../models/kanban.js";

/**
 * What we need:
 *  Get all cards - DONE
 *  Get one card - DISCARDED (for now)
 *  Create one cards - DONE
 *  Update one card
 *  Delete one card
 */

export function dateNotInPast(date) {
  const deadline = new Date(date);
  const today = Date.now;
  if (deadline < today) {
    throw new Error("Deadline date cannot be set in the past");
  }
  return true;
}

export async function getAllCardsService() {
  const cards = await Kanban.find();
  if (!cards) {
    throw new Error("Cannot find any cards");
  }
  return cards;
}

export async function createCardService(cardInfo) {
  const card = await Kanban.create(cardInfo);
  if (!card) {
    throw new Error("Could not create card... try again!");
  }
  return await card.save();
}

export async function updateCardService(cardId, updatedData) {
  const updateCard = await Kanban.findByIdAndUpdate(
    { _id: cardId },
    { $set: updatedData },
    { returnDocument: 'after' },
  );
  if (!updateCard) {
    throw new Error("Card not found");
  }

  return updateCard;
}

export async function deleteCardService(cardId){
  const deleteCard = await Kanban.findByIdAndDelete(cardId);
  if(!deleteCard){
    throw new Error("Cannot delete card");
  }
  return deleteCard;
}
