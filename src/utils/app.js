import cookie from "cookie_js";

const token = "token";
const username = "username";
export function getToken() {
    return cookie.get(token);
}

export function setToken(data) {
    return cookie.set(token, data);
}
export function removeToken() {
    cookie.remove(token);
}
export function setUsername(data) {
    return cookie.set(username, data);
}
export function getUsername() {
    return cookie.get(username);
}
export function removeUsername() {
    cookie.remove(username);
}
