import {Password} from "@/components/password";
import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
	return (
		/* <section className="flex w-full items-center justify-center gap-4 md:py-2">
			<div className="flex flex-col mt-8">
				<Password />
			</div>
		</section> */
		<section className="w-full max-w-3xl mx-auto p-5">
			{/* <div className="flex flex-col gap-4">
				<Card
					shadow="none"
				>
					<CardBody>
						<p className="text-xs font-bold">Password Generator can be used to generate or bulk-generate strong and secure random passwords. It generates random combinations of letters (including both uppercase and lowercase), numbers, and special characters to ensure the complexity and randomness of the passwords.</p>
					</CardBody>
				</Card>
			</div> */}
			<div className="mt-8">
				<Password />
			</div>
		</section>
	);
}
