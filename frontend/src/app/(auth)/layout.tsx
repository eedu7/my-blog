import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="mx-auto mt-44 grid max-w-7xl grid-cols-2">
            <section className="border">{children}</section>
            <section></section>
        </main>
    );
};

export default AuthLayout;
