import types from "../types";

// todo : 정규 표현식 붙이기

// id to checking
export function checkId(text) {
    
    return {
        type: types.CHECK_ID,
        value: text
    }
}

// password to checking
export function checkPwd(text) {
    return {
        type: types.CHECK_PWD,
        value: text
    }
}

// Login
export function userLogin(flag) {
    return {
        type: types.USER_LOGIN,
        state: flag
    }
}
