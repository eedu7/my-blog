import SignUpCard from "@/modules/authentication/SignUpCard";

const SignUpPage = () => {
    return (
        <div className="flex h-[100vh] w-[100vw] justify-center">
            <div className="my-8 p-4 md:my-32">
                <SignUpCard />
            </div>
        </div>
    );
};

export default SignUpPage;
