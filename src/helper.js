import { get } from "./services";

export const getTodoList = async () => {
    const res = await get("https://jsonplaceholder.typicode.com/todos/");
    return res;
};

export const getUserInfo = async (id) => {
    const res = await get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res;
};

export const validateToken = async (id) => {
    const res = await get(`http://127.0.0.1:8000/api/validate-token/${id}`);
    return res;
};