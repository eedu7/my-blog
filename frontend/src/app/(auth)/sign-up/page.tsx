"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { cn } from "tailwind-cn";
import { z } from "zod";

import { LoaderCircle } from "lucide-react";
import Link from "next/link";

import { useAuth } from "@/modules/authentication/hooks/useAuth";
import { useForm } from "@tanstack/react-form";

import { PRIVACY_LINK, SIGN_IN_LINK, TERMS_LINK } from "@/constants/navbars";

const checkUsernameExists = async (username: string) => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/v1/users/exist/?username=${username}`,
        );
        // return { message: "Username already exists" };
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) {
                return null;
            }
        }
    }
    return null;
};
const checkEmailExists = async (email: string) => {
    try {
        await axios.get(`http://127.0.0.1:8000/v1/users/exist/?email=${email}`);
        return { message: "Email already exists" };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) {
                return null;
            }
        }
    }
    return null;
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
    const { register } = useAuth();
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        validators: {
            onChange: SignUpFormSchema,
        },
        onSubmit: ({ value }) => {
            register.mutate(value);
            router.push(process.env.NEXT_PUBLIC_REDIRECT_SIGNUP || "/");
        },
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
                        <h1 className="card-title">Join MyBlog.</h1>
                    </div>
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Username</label>
                        <form.Field
                            name="username"
                            validators={{
                                onChangeAsync: async ({ value }) => {
                                    return await checkUsernameExists(value);
                                },
                                onChangeAsyncDebounceMs: 500,
                                onBlurAsync: async ({ value }) => {
                                    return await checkUsernameExists(value);
                                },
                                onBlurAsyncDebounceMs: 500,
                            }}
                            // eslint-disable-next-line react/no-children-prop
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
                                    {field.state.meta.isValidating && (
                                        <div className="absolute top-1/2 right-6 -translate-y-1/2 transform">
                                            <LoaderCircle className="animate-spin text-gray-500" />
                                        </div>
                                    )}
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {/* {field.state.meta.errors
                                                .map((err) => err?.message)
                                                .join(", ")} */}
                                            {field.state.meta.errors[0]?.message}
                                        </em>
                                    )}
                                </div>
                            )}
                        />
                        <label className="fieldset-label">Email</label>
                        <form.Field
                            name="email"
                            validators={{
                                onChangeAsync: async ({ value }) => {
                                    return await checkEmailExists(value);
                                },
                                onChangeAsyncDebounceMs: 500,
                                onBlurAsync: async ({ value }) => {
                                    return await checkEmailExists(value);
                                },
                                onBlurAsyncDebounceMs: 500,
                            }}
                            // eslint-disable-next-line react/no-children-prop
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
                                    {field.state.meta.isValidating && (
                                        <div className="absolute top-1/2 right-6 -translate-y-1/2 transform">
                                            <LoaderCircle className="animate-spin text-gray-500" />
                                        </div>
                                    )}
                                    {field.state.meta.errors.length > 0 && (
                                        <em className="text-xs text-red-500">
                                            {/* {field.state.meta.errors
                                                .map((err) => err?.message)
                                                .join(", ")} */}
                                            {field.state.meta.errors[0]?.message}
                                        </em>
                                    )}
                                </div>
                            )}
                        />
                        <label className="fieldset-label">Password</label>
                        <form.Field
                            name="password"
                            // eslint-disable-next-line react/no-children-prop
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

                            <Link className="link link-hover link-primary" href={SIGN_IN_LINK.href}>
                                Already have an account? Sign in
                            </Link>
                        </div>
                        <button
                            disabled={register.isPending}
                            type="submit"
                            className="btn btn-neutral mt-4"
                        >
                            {!register.isPending ? "Register" : "Registration..."}
                        </button>
                    </fieldset>
                    <p className="text-[0.8rem] text-gray-600">
                        Click &quot;Register&quot; to agree to MyBlog&apos;s{" "}
                        <Link className="link" href={TERMS_LINK.href}>
                            Terms of Service
                        </Link>{" "}
                        and acknowledge that MyBlog&apos;s{" "}
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
