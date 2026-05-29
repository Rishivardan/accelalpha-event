import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const matchAndInvite = async (formData) => {
  try {
    const response = await api.post("/api/match-and-invite", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Something went wrong. Please try again.";
  }
};