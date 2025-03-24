"use client";

import { PRIVACY_LINK, SIGN_UP_LINK, TERMS_LINK } from "@/constants/navbars";
import { useForm } from "@tanstack/react-form";
import axios from "axios";
import { LoaderCircle, LoaderIcon, LoaderPinwheelIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "tailwind-cn";
import { z } from "zod";

const checkUsernameExists = async (username: string) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/v1/users/exist/${username}`);
    } catch (error) {
        return { message: "Username already exists" };
    }
};

const SignUpFormSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long.")
        .max(16, "Username must not exceed 16 characters."),
    email: z.string().email(),
    password: z
        .string()
        .min(8, "Password is at least 8 characters long.")
        .max(16, "Password must not exceed 16 characters."),
});

const SignUpPage = () => {
    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        validators: {
            onChange: SignUpFormSchema,
        },
        onSubmit: ({ value }) => alert(JSON.stringify(value)),
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
        >
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <div>
                        <h1 className="card-title">Sign Up</h1>
                    </div>
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Username</label>
                        <form.Field
                            name="username"
                            validators={{
                                onChangeAsync: async ({ value }) => {
                                    return await checkUsernameExists(value);
                                },
                                onChangeAsyncDebounceMs: 750,
                            }}
                            children={(field) => (
                                <div className="relative">
                                    <input
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        type="text"
                                        className={cn(
                                            "input focus:outline-none",
                                            field.state.meta.errors.length > 0 && "border-red-500",
                                        )}
                                        placeholder="Username"
                                    />
                                    {field.getMeta().isValidating && (
                                        <div className="absolute top-1/2 right-6 -translate-y-1/2 transform">
                                            <LoaderCircle className="animate-spin text-gray-500" />
                                        </div>
                                    )}
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {field.state.meta.errors
                                                .map((err) => err?.message)
                                                .join(", ")}
                                        </em>
                                    )}
                                </div>
                            )}
                        />
                        <label className="fieldset-label">Email</label>
                        <form.Field
                            name="email"
                            children={(field) => (
                                <div className="relative">
                                    <input
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        type="text"
                                        className={cn(
                                            "input focus:outline-none",
                                            field.state.meta.errors.length > 0 && "border-red-500",
                                        )}
                                        placeholder="Email"
                                    />
                                    {field.getMeta().isValidating && (
                                        <div className="absolute top-1/2 right-6 -translate-y-1/2 transform space-y-3">
                                            <LoaderCircle className="animate-spin text-gray-500" />
                                        </div>
                                    )}
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {field.state.meta.errors
                                                .map((err) => err?.message)
                                                .join(", ")}
                                        </em>
                                    )}
                                </div>
                            )}
                        />
                        <label className="fieldset-label">Password</label>
                        <form.Field
                            name="password"
                            children={(field) => (
                                <div>
                                    <input
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        type="password"
                                        className={cn(
                                            "input focus:outline-none",
                                            field.state.meta.errors.length > 0 && "border-red-500",
                                        )}
                                        placeholder="Password"
                                    />
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {field.state.meta.errors
                                                .map((err) => err?.message)
                                                .join(", ")}
                                        </em>
                                    )}
                                </div>
                            )}
                        />
                        <div className="flex w-full items-center justify-end">
                            {/* TODO: Add link to the Forgot Password */}

                            <Link className="link link-hover link-primary" href={SIGN_UP_LINK.href}>
                                Already have an account? Sign in
                            </Link>
                        </div>
                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>
                    </fieldset>
                    <p className="text-[0.8rem] text-gray-600">
                        Click "Register" to agree to MyBlog's{" "}
                        <Link className="link" href={TERMS_LINK.href}>
                            Terms of Service
                        </Link>{" "}
                        and acknowledge that MyBlog's{" "}
                        <Link className="link" href={PRIVACY_LINK.href}>
                            Privacy Policy
                        </Link>{" "}
                        applies to you.
                    </p>
                </div>
            </div>
        </form>
    );
};

export default SignUpPage;
