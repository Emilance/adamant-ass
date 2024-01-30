import Cookies from "js-cookie";

export function setToken(token ) {
    Cookies.set('token', token);
  }
  
  export function getToken(){
    if (typeof window === 'undefined') {
      return null;
    }
    return Cookies.get('token');
  }
  
  export function removeToken() {
    Cookies.remove('token');
  }
  export function removeUser() {
    Cookies.remove('user');
  }
  
  export function setUser(user) {
    Cookies.set('user', JSON.stringify(user));
  }
  
  export function getUser() {
    const user = Cookies.get('user');
    return user ? JSON.parse(user) : {};
  }
  
  export const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

  export function generateRandomString(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
  
    return result;
  }


  export function getRandomValueFromArray(array) {
    // Check if the array is not empty
    if (array.length === 0) {
      return undefined;
    }
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * array.length);
    // Return the value at the random index
    return array[randomIndex];
  }