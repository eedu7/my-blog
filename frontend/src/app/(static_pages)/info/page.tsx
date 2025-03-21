import AutumLeavesJPG from "@/constants/images";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
	title: "MyBlog: Read and write stories.",
};

const InfoPage = () => {
	return (
		<>
			<div className="space-y-4 md:space-y-8">
				<div>
					<h1 className="text-4xl md:text-6xl font-semibold">Human</h1>
					<h1 className="text-4xl md:text-6xl font-semibold">stories & ideas</h1>
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
					src={AutumLeavesJPG}
					alt="Autum Leaves Image"
					className="rounded shadow-lg md:w-full md:h-full h-96 object-cover"
				/>
			</div>
		</>
	);
};

export default InfoPage;
