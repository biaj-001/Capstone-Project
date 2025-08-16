// src/api/quizApi.js
export const fetchQuizQuestions = async (amount = 10, category, difficulty = 'easy') => {
  // Construct the API endpoint URL with the provided parameters.
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  try {
    // Use the native Fetch API to make the network request.
    const response = await fetch(endpoint);

    // If the response is not OK, throw an error.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response.
    const data = await response.json();

    // The API's 'response_code' indicates if the request was successful.
    
    if (data.response_code !== 0) {
      console.error("API returned an error code:", data.response_code);
      return []; // Return an empty array on API error
    }

    // Return the array of question results.
    return data.results;
  } catch (error) {
    // Log any errors that occur during the fetch process.
    console.error("Failed to fetch quiz questions:", error);
    return []; // Return an empty array to prevent the app from crashing.
  }
};
