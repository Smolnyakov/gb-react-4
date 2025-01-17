import { SEND_MESSAGE } from "../messages/types";
import { sendMessage } from "../messages";

export const botSendMessage = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    if (action.payload.message.author === "User") {
      setTimeout(() => {
        store.dispatch(
          sendMessage(
            {
              author: "Bot",
              value: "Hello from bot middleware",
            },
            action.payload.roomId
          )
        );
      }, 500);
    }
  }

  return next(action);
};
