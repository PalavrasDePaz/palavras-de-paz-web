"use client";

import axios from "axios";

import { PALAVRAS_DE_PAZ_TOKEN } from "../constants";

export const api = axios.create({
  baseURL: "http://palavrasdepaz.nodejsng10f05.kinghost.net",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(PALAVRAS_DE_PAZ_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
