import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
	title: "MyBlog: Read and write stories.",
};

const InfoPage = () => {
	return (
		<>
			<div className="space-y-16">
				<div>
					<h1 className="text-6xl font-semibold">Human</h1>
					<h1 className="text-6xl font-semibold">stories & ideas</h1>
				</div>
				<p className="text-lg text-gray-500">
					A place to read, write, and deepen your understanding.
				</p>
				<button
					type="button"
					className="btn btn-outline">
					Start reading
				</button>
			</div>
			<div className="flex justify-end">
				<Image
					src="/images/autum-leaves.jpg"
					alt="Autum Leaves Image"
					width={512}
					height={512}
					className="rounded shadow-lg"
				/>
			</div>
		</>
	);
};

export default InfoPage;
