import openai from "./openAi";
import { errorToast } from "./toastMessage";

const searchAi = async (searchText) => {
  const query =
    "Act as a Movie recommendation system and suggest some movies for the query: " +
    searchText +
    ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: OMG 2, Gadar, Hera Pheri, Phir Hera Pheri";
  let moviesList = [];
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    moviesList = response.choices?.[0]?.message?.content.split(",");
  } catch (e) {
    errorToast("Search Failed! Please try again in sometime.");
  }

  return moviesList.length === 0 ? null : moviesList;
};

export default searchAi;
