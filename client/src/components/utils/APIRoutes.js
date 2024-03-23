let URL = import.meta.env.VITE_SERVER_URL;

export const host = URL;

export const sendMessageRoute = `${host}api/chat/addmessage`;
export const getMessageRoute = `${host}api/chat/getmessage`;

