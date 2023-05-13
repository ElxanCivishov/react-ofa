import axios from "axios";

export const NewReguestApi = axios.create({
  baseURL: "https://ofa.az/api",
});

export const NewReguest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getRecipesPage = async (pageParam = 1) => {
  const response = await NewReguest.get(`/photos?_page=${pageParam}`);
  return response.data;
};
