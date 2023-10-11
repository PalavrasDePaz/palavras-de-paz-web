"use client";

import axios from "axios";

import { PALAVRAS_DE_PAZ_TOKEN } from "../constants";

export const BASE_URL = "http://api.palavrasdepaz.org:21043/";

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(PALAVRAS_DE_PAZ_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
