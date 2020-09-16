import { Base64 } from "js-base64"
import userService from "./userServices"
/*
  window.location.origin polyfill
 */
export const getLocationOrigin = () => {
  if (!window.location.origin) {
    window.location.origin = `${window.location.protocol}//${
      window.location.hostname
    }${window.location.port ? `:${window.location.port}` : ""}`
  }
  return window.location.origin
}

/*
  query options:
 */
export const defaultOptions = {
  credentials: "same-origin",
}

export const postMethod = {
  method: "POST",
}

export const getMethod = {
  method: "GET",
}

export const requestOptions = (token) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
  return header
}

export const jsonHeaderAuth = () => {
  const user = JSON.parse(window.localStorage.getItem("user"))
  if (userService.verify(user)) {
    console.log(user)
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    }
  }
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
}

export const jsonHeader = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}

/*
  query response helpers:
 */
export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  if (response && response.status && response.status === 401) {
    window.localStorage.clear()
  }
  const error = new Error(response.statusText)
  error.response = response
  // throw error;
  return Promise.reject(error)
}

export const parseJSON = (response) => {
  const res = response.json()
  return res
}

/*
 general helpers
 */
export const encodeBase64 = (stringToEncode) => Base64.encode(stringToEncode)
