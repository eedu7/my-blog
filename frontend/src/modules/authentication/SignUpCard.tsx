import { PRIVACY_LINK, TERMS_LINK } from "@/constants/navbars";
import { SignUpForm } from "./SignUpForm";
import Link from "next/link";

const SignUpCard = () => {
    return (
        <div className="card card-lg shadow-lg md:w-96">
            <div className="my-8">
                <h1 className="text-center text-4xl">Join MyBlog.</h1>
            </div>
            <div className="flex justify-center">
                <SignUpForm />
            </div>
            <div className="px-10 py-4 text-gray-600">
                <p className="text-sm">
                    Click "sign up" to agree to MyBlog's{" "}
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
    );
};

export default SignUpCard;
