import axios from "axios";
import { PER_PAGE_COUNT } from "./Constants";
export const NewReguestApi = axios.create({
  baseURL: "https://ofa.az/api",
});

export const NewReguest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getRecipesData = async (page = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${PER_PAGE_COUNT}`
  );
  const totalData = response.headers.get("X-Total-Count");
  const data = await response.json();
  return {
    recipes: data,
    totalData,
  };
};
