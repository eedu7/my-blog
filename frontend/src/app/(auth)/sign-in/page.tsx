"use client";

import { PRIVACY_LINK, SIGN_UP_LINK, TERMS_LINK } from "@/constants/navbars";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { cn } from "tailwind-cn";
import { z } from "zod";

const SignInFormSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, "Password is at least 8 characters long.")
        .max(16, "Password must not exceed 16 characters."),
});

const SignInPage = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: {
            onChange: SignInFormSchema,
        },
        onSubmit: ({ value }) => alert(JSON.stringify(value)),
    });

    return (
        <form
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
        >
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <div>
                        <h1 className="card-title">Welcome back.</h1>
                    </div>
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <form.Field
                            name="email"
                            // eslint-disable-next-line react/no-children-prop
                            children={(field) => (
                                <div>
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
                        <div className="flex w-full items-center justify-between">
                            {/* TODO: Add link to the Forgot Password */}
                            <div>
                                <Link href="#" className="link link-hover link-primary">
                                    Forgot password?
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className="link link-hover link-primary"
                                    href={SIGN_UP_LINK.href}
                                >
                                    New user? Register here
                                </Link>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
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

export default SignInPage;
