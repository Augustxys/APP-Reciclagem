// "http://192.168.3.56:3001"
import { name } from "ci-info";
import axios from "axios";
import { Platform } from "react-native";
import { DataEstablishmentForm } from "../interfaces/form";

const api = axios.create({
  baseURL:
    Platform.OS === "android"
      ? "http://192.168.160.1:3001"
      : "http://localhost:3001",
});

export const createUser = async (userData: any) => {
  try {
    const response = await api.post("/users", userData);

    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

export const createEstablishment = async (establishmentData: any) => {
  try {
    const response = await api.post("/establishment", establishmentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ email, password }: any) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const serachMaterial = async ({ name }: any) => {
  try {
    const response = await api.get(`/items/search?name=${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMaterials = async () => {
  try {
    const response = await api.get(`/items?type=Rciclavel&category=Papel
`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEstabelecimentos = async () => {
  try {
    const response = await api.get(`/establishment
`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
