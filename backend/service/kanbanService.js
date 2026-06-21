import { Kanban } from "../models/kanban.js";

/**
 * What we need:
 *  Get all cards
 *  Get one card
 *  Create one cards
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

// export async function getOneCardService(id){
//     const card = await Kanban.findById(id);
//     if(!card){
//         throw new Error("Cannot find card...");
//     }
//     return card;
// }
