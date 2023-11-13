import axios from 'axios';

const baseURL = 'http://localhost:8080'; // Update with your API base URL
export const TOKEN_CONST = "token";
export const login = async (login, password) => {
    try {
        const response = await axios.post(`${baseURL}/api/auth/login`, {login, password});
        localStorage.setItem(TOKEN_CONST, response.data);
        return true;
    } catch (error) {
        return false;
    }
};

export const register = async (login, password) => {
    try {
        await axios.post(`${baseURL}/api/auth/register`, {login, password});
        return true;
    } catch (error) {
        return false;
    }
};

export const getAllPolls = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/polls`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createPoll = async (pollName) => {
    try {
        const response = await axios.post(`${baseURL}/api/polls`, {pollName});
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const answerQuestion = async (pollID, answerRequest) => {
    try {
        const response = await axios.post(`${baseURL}/api/polls/answer?pollID=${pollID}`, answerRequest);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getUserAnswers = async (pollID) => {
    try {
        const response = await axios.get(`${baseURL}/api/polls/answers?pollID=${pollID}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
// Function to get poll details
export const getPollDetails = async (pollID) => {
    try {
        const response = await axios.get(`${baseURL}/api/polls/${pollID}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deletePoll = async (pollID) => {
    try {
        const response = await axios.delete(`${baseURL}/api/polls/${pollID}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const addQuestionToPoll = async (pollID, questionRequest) => {
    try {
        const response = await axios.post(`${baseURL}/api/polls/${pollID}/addQuestion`, questionRequest);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const removeQuestionFromPoll = async (pollID, questionID) => {
    try {
        const response = await axios.delete(`${baseURL}/api/polls/${pollID}/removeQuestion/${questionID}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

