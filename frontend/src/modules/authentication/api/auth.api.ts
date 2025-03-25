import { axiosClient } from "@/service/api";
import {
    LoginUserRequest,
    LoginUserResponse,
    RegisterUserRequest,
    RegisterUserResponse,
} from "./auth.types";

export const registerUser = async (data: RegisterUserRequest): Promise<RegisterUserResponse> => {
    try {
        const response = await axiosClient.post("/v1/users/", data);
        return response.data;
    } catch (error) {
        console.error("User registration failed!", error);
        throw new Error("User registration failed");
    }
};

export const loginUser = async (data: LoginUserRequest): Promise<LoginUserResponse> => {
    try {
        const response = await axiosClient.post("/v1/users/login", data);
        return response.data;
    } catch (error) {
        console.error("User login failed!", error);
        throw new Error("User loing failed!");
    }
};
