import axios from "axios";
import { useState } from "react";
import { SiMdbook } from "react-icons/si";

const showText =
	"Welcome to our Dictionary app homepage! Our app is designed to be your go-to resource for all your language needs. Whether you're a student, a professional, or just someone who loves language, our app has everything you need to stay on top of your game.";

const Start = () => {
	const [name, setName] = useState();
	const [word, setWord] = useState("MyDictonary");
	const [meaning, setMeaning] = useState(showText);
	const [audio, setAudio] = useState();

	const InputEvent = (e) => {
		setName(e.target.value);
	};

	const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${name}`;
	const getMeaning = async () => {
		try {
			const res = await axios.get(api);
			const data = await res.data;
			setMeaning(data[0].meanings[0].definitions[0].definition);
			setWord(name);
			setAudio(data[0].phonetics[0].audio);
		} catch (error) {
			alert(`${name} has no meaning`);
		}
	};

	return (
		<>
			<section className="text-gray-600 body-font">
				<SiMdbook className="absolute top-2/3 left-2/4 -translate-x-2/4 -translate-y-2/3 opacity-[0.01] text-[650px]" />
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							<div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 font-bold text-2xl mx-auto w-fit">
								<SiMdbook />
								<span className="ml-2 capitalize">{word}</span>
							</div>
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">{meaning}</p>
					</div>

					<div className="flex lg:w-2/3 w-fullx gap-3 flex-col mx-auto px-8 sm:space-y-0 space-y-4 sm:px-0 items-start">
						<div className="relative flex-grow w-full">
							<label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
								Type a word:
							</label>
							<input
								type="text"
								name="word"
								onChange={InputEvent}
								autoComplete="off"
								className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>

						<div className="flex items-center justify-between w-full">
							<button
								onClick={getMeaning}
								className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
							>
								Get Meaning
							</button>

							{audio && (
								<audio controls>
									<source src={audio} type="audio" />
								</audio>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Start;
