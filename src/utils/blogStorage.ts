import { blogs as defaultBlogs } from "../data/blogs";

export const getBlogs = () => {
  const data = localStorage.getItem("blogs");

  if (!data) {
    localStorage.setItem("blogs", JSON.stringify(defaultBlogs));
    return defaultBlogs;
  }

  return JSON.parse(data);
};

export const saveBlogs = (blogs: any[]) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};
