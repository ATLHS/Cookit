import React from 'react';

// return the user data from the local storage
export const getUser = () => JSON.parse(localStorage.getItem("user")) || false;

// return the user data from the local storage
export const getToken = () => localStorage.getItem("token") || false;

// remove the token and user from the local storage
export const removeUserStorage = () => localStorage.clear();

// set the token and user from the local storage
export const setUserStorage = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
}