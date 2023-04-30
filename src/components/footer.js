import Link from "next/link";
import { SiMdbook } from "react-icons/si";
import {
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="bg-zinc-50 text-gray-600 body-font">
				<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<Link
						href={"/"}
						className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 font-bold text-2xl"
					>
						<SiMdbook />
						<span className="ml-2">MyDictonary</span>
					</Link>

					<p className="text-lg text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
						copyright © {year} NaseemKhan — All Right Reserved —
						<Link
							href="https://twitter.com/NaseemK69128903"
							className="text-gray-600 ml-1"
							rel="noopener noreferrer"
							target="_blank"
						>
							@naseemkhan
						</Link>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-lg gap-3">
						<Link
							href="https://www.facebook.com/profile.php?id=100017192357822"
							className="text-gray-500 ml-1"
							target="_blank"
						>
							<FaFacebookF />
						</Link>
						<Link
							href="https://twitter.com/NaseemK69128903"
							className="text-gray-500 ml-1"
							target="_blank"
						>
							<FaTwitter />
						</Link>
						<Link
							href="https://www.linkedin.com/in/naseem-khan-khan-bscs-b-section-275275258/"
							className="text-gray-500 ml-1"
							target="_blank"
						>
							<FaLinkedinIn />
						</Link>
						<Link
							href="https://github.com/NaseemKhan005"
							className="text-gray-500 ml-1"
							target="_blank"
						>
							<FaGithub />
						</Link>
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
