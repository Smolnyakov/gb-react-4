import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  CLEAR_MESSAGE_VALUE,
  DELETE_CONVERSATION,
} from "./types";

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const createConversation = (name) => ({
  type: CREATE_CONVERSATION,
  payload: name,
});

export const clearMessageValue = (roomId) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomId,
});

export const deleteConersation = (roomId) => ({
  type: DELETE_CONVERSATION,
  payload: roomId,
});