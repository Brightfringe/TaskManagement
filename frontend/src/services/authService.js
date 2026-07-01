import api from "../api/axios";

export const register = (user) => {
    return api.post("/auth/register", user);
};

export const login = (user) => {
    return api.post("/auth/login", user);
};