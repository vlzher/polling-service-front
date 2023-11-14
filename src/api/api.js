import axios from "axios";

const baseURL = "http://localhost:8080";
export const TOKEN_CONST = "token";

export const login = async (login, password) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/login`, {
      login,
      password,
    });
    localStorage.setItem(TOKEN_CONST, response.data);
    return true;
  } catch (error) {
    return false;
  }
};

export const register = async (login, password) => {
  try {
    await axios.post(`${baseURL}/api/auth/register`, { login, password });
    return true;
  } catch (error) {
    return false;
  }
};

export const getAllPolls = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/polls`, {
      headers: {
        Authorization: `${localStorage.getItem(TOKEN_CONST)}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createPoll = async (pollName) => {
  try {
    const res = await axios.post(
      `${baseURL}/api/polls`,
      { pollName },
      {
        headers: {
          Authorization: `${localStorage.getItem(TOKEN_CONST)}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return null;
  }
};

export const answerQuestion = async (pollID, questionOptionID) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/polls/answer?pollID=${pollID}`,
      { questionOptionID },
      {
        headers: {
          Authorization: `${localStorage.getItem(TOKEN_CONST)}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserAnswers = async (pollID) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/polls/answers?pollID=${pollID}`,
      {
        headers: {
          Authorization: `${localStorage.getItem(TOKEN_CONST)}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getPollDetails = async (pollID) => {
  try {
    const response = await axios.get(`${baseURL}/api/polls/${pollID}`, {
      headers: {
        Authorization: `${localStorage.getItem(TOKEN_CONST)}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deletePoll = async (pollID) => {
  try {
    const response = await axios.delete(`${baseURL}/api/polls/${pollID}`, {
      headers: {
        Authorization: `${localStorage.getItem(TOKEN_CONST)}`,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const addQuestionToPoll = async (
  pollID,
  questionName,
  questionOptions
) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/polls/${pollID}/addQuestion`,
      { questionName, questionOptions },
      {
        headers: {
          Authorization: `${localStorage.getItem(TOKEN_CONST)}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return {};
  }
};

export const removeQuestionFromPoll = async (pollID, questionID) => {
  try {
    const response = await axios.delete(
      `${baseURL}/api/polls/${pollID}/removeQuestion/${questionID}`,
      {
        headers: {
          Authorization: `${localStorage.getItem(TOKEN_CONST)}`,
        },
      }
    );
    return true;
  } catch (error) {
    return false;
  }
};
