export interface RegisterUserRequest {
    username: string;
    email: string;
    password: string;
}

export interface LoginUserRequest {
    email: string;
    password: string;
}

export interface RegisterUserResponse {
    email: string;
    username: string;
    uuid: string;
}

export interface LoginUserResponse {
    access_token: string;
    refresh_token: string;
}
