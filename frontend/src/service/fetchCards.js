import { apiFetch } from "../api.js";

export async function getAllCards() {
  const allCards = await apiFetch("/cards", {
    method: "GET",
  });
  return allCards;
}

export async function deleteCard(cardId) {
  const deleteCard = await apiFetch(`/cards/${cardId}`, {
    method: "DELETE",
  });
}

export async function createCard() {
  const createCard = await apiFetch("/create", {
    method: "POST",
    body: JSON.stringify(createCard),
  });
}

export async function updateCard(cardId) {
  const updateCard = await apiFetch(`/cards/${cardId}`, {
    method: "PATCH",
    body: JSON.stringify(createCard),
  });
}
