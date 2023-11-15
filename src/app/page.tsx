import Image from "next/image"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24  dark:bg-pf-gray-300 bg-pf-gray-700 ">
			<div className="fixed flex flex-col bottom-40 left-0 right-0 mx-auto w-[40vw] h-[20vh] dark:text-pf-gray-700 text-pf-gray-300">
				<div className="z-10 absolute top-0 right-0 dark:bg-pf-brown-500 w-[40vw] h-[20vh] shadow-xl shadow-pf-gray-300/15 rounded-sm">
					{/* <div className="absolute right-4 -top-[193px]">
						<Image
							src="/me.png"
							alt="A picture of me."
							height={200}
							width={200}
						/>
					</div> */}

					<div className="flex flex-col px-4 py-2 gap-y-4">
						<div className="-mt-8 w-fit h-fit dark:bg-pf-blue-500 bg-pf-pink-800 shadow-lg py-2">
							<p className="uppercase font-serif italic text-6xl -mt-8 ml-2 mr-4">
								ABOUT ME
							</p>
						</div>
						<p className="font-sans text-3xl ml-2 font-semibold">
							Let&apos;s get started.
						</p>
					</div>
				</div>

				{/* Details */}
				<div className="-right-2 -bottom-2 bg-pf-pink-500/50  w-[40vw] h-[20vh] absolute -z-10 rounded-sm">
					{/* <div className="absolute right-0 -top-[190px] -z-[1] dark:hue-rotate-[190deg] dark:saturate-[1.20] dark:brightness-[0.625]">
					<Image
						src="/me-but-pink.png"
						alt="A picture of me."
						height={200}
						width={200}
					/>
				</div> */}
				</div>
			</div>
		</main>
	)
}
