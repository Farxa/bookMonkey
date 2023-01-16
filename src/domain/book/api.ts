import { Book } from "./Book";

/**
 * Generic function to fetch any data from a given URL
 * If no URL is provided, it will default to the bookMonkey API
 */
export const fetchBooks = async (
  url: string = "http://localhost:4730/books"
): Promise<Book[] | undefined> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
