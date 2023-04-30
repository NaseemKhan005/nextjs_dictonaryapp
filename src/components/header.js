import Link from "next/link";
import { SiMdbook } from "react-icons/si";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Header = () => {
	return (
		<>
			<header className="bg-zinc-50 text-gray-600 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link
						href={"/"}
						className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 font-bold text-2xl"
					>
						<SiMdbook />
						<span className="ml-2">MyDictonary</span>
					</Link>

					<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
						<Link href={"/"} className="mr-5 hover:text-gray-900">
							Home
						</Link>
						<Link href={"/start"} className="mr-5 hover:text-gray-900">
							Get Started
						</Link>
						<Link href={"/contact"} className="mr-5 hover:text-gray-900">
							Contact
						</Link>
					</nav>

					<Link href={"/pricing"}>
						<button class="inline-flex items-center  text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							Pricing
							<HiOutlineArrowSmRight className="text-2xl" />
						</button>
					</Link>
				</div>
			</header>
		</>
	);
};

export default Header;
