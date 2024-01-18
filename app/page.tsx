import { title } from "@/components/primitives";
import CustomSwitch from "@/components/custom-switch";
import PasswordTextarea from "@/components/password-textarea";
import Button from "@/components/button";
import {Password} from "@/components/password";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Password Generator</h1>
				<br/>
			</div>

			<br/>
			{ /* <div className="flex gap-6">
				<CustomSwitch name="Uppercase" description="ABCDEFGHIJKLMNOP..."/>
				<CustomSwitch name="Numbers" description="0123456789"/>
			</div>
			<div className="flex gap-6">
				<CustomSwitch name="Lowcase" description="abceefghijklmnopqr..."/>
				<CustomSwitch name="Symbols" description="!@#$%^&*()?"/>
			</div> */}
			<div>
				<Password />
			</div>

			{ /* <div className="w-screen p-8 flex items-start justify-center">
			<PasswordTextarea />
			</div> */ }
		</section>
	);
}
