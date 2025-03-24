"use client";

import React from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import axios from "axios";
import Link from "next/link";
import { SIGN_IN_LINK } from "@/constants/navbars";
import { LoaderCircle } from "lucide-react";

const checkUsernameExists = async (username: string) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/v1/users/exist/${username}`);
    } catch (error) {
        return { message: "Username already exists" };
    }
};

const SignUpFormSchema = z
    .object({
        username: z
            .string()
            .min(3, "Username must be at least 3 characters long.")
            .max(15, "Username must not exceed 15 characters."),
        email: z.string().email(),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long.")
            .max(16, "Password must not exceed 16 characters."),
        confirmPassword: z.string(),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "The password did not match",
                path: ["confirmPassword"],
            });
        }
    });

export const SignUpForm = () => {
    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validators: {
            onChange: SignUpFormSchema,
        },
        onSubmit: ({ value }) => {
            console.table(value);
        },
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
            className="space-y-2 md:space-y-4"
        >
            <form.Field
                name="username"
                validators={{
                    onChangeAsync: async ({ value }) => {
                        return await checkUsernameExists(value);
                    },
                    onChangeAsyncDebounceMs: 500,
                }}
                children={(field) => (
                    <>
                        <div>
                            <label className="text-sm text-gray-700" htmlFor={field.name}>
                                Username
                            </label>
                            <div className="flex flex-col">
                                <div className="relative">
                                    <input
                                        className="input md:input-md input-sm w-64 hover:outline-none focus:outline-none md:w-72"
                                        type="text"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    {field.getMeta().isValidating && (
                                        <div className="absolute top-1/2 right-2 -translate-y-1/2 transform">
                                            <LoaderCircle className="animate-spin" />
                                        </div>
                                    )}
                                </div>

                                {field.state.meta.errors.length > 0 && (
                                    <em className="text-xs text-red-500">
                                        {field.state.meta.errors
                                            .map((err) => err?.message)
                                            .join(", ")}
                                    </em>
                                )}
                            </div>
                        </div>
                    </>
                )}
            />
            <fieldset>
                <form.Field
                    name="email"
                    children={(field) => (
                        <>
                            <div>
                                <label className="text-sm text-gray-700" htmlFor={field.name}>
                                    Email
                                </label>
                                <div className="flex flex-col">
                                    <input
                                        className="input md:input-md input-sm w-64 hover:outline-none focus:outline-none md:w-72"
                                        type="text"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {field.state.meta.errors
                                                .map((err) => err?.message)
                                                .join(", ")}
                                        </em>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                />
            </fieldset>
            <fieldset>
                <form.Field
                    name="password"
                    children={(field) => (
                        <>
                            <div>
                                <label className="text-sm text-gray-700" htmlFor={field.name}>
                                    Password
                                </label>
                                <div className="flex flex-col">
                                    <input
                                        className="input md:input-md input-sm w-64 hover:outline-none focus:outline-none md:w-72"
                                        type="password"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {field.state.meta.errors
                                                .map((err) => err?.message)
                                                .join(", ")}
                                        </em>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                />
            </fieldset>
            <fieldset>
                <form.Field
                    name="confirmPassword"
                    children={(field) => (
                        <>
                            <div>
                                <label className="text-sm text-gray-700" htmlFor={field.name}>
                                    Re-type Password
                                </label>
                                <div className="flex w-full">
                                    <input
                                        className="input input-sm md:input-md w-64 hover:outline-none focus:outline-none md:w-72"
                                        type="password"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {field.state.meta.errors
                                                .map((err) => err?.message)
                                                .join(", ")}
                                        </em>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                />
            </fieldset>
            <div>
                <p className="my-2 text-end text-sm">
                    Already have an account?{" "}
                    <Link className="link link-primary" href={SIGN_IN_LINK.href}>
                        Sign in
                    </Link>
                </p>
                <button className="btn btn-soft btn-primary btn-sm md:btn-md my-2 w-full">
                    Sign up
                </button>
            </div>
        </form>
    );
};
