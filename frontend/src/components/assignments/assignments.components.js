export default function Assignments() {
	return (
		<div id="assignments" className="flex flex-col  gap-6 ml-6 bg-white rounded-lg p-4 shadow-lg my-4 w-1/5">
			<h3 className="font-bold border-b border-b-paperRed text-center mt-5">Upcoming Assignments</h3>
			<div className="">
				<p className="border-b border-b-paperBlue">Friday, Jun 28th</p>
				<ul className="list-disc px-10">
					<li className="border-b hover:border-b-paperBlue border-white cursor-pointer">Trigonometry Set 4</li>
					<li className="border-b hover:border-b-paperBlue border-white cursor-pointer">Trigonometry Set 5</li>
				</ul>
			</div>
			<div>
				<p className="border-b border-b-paperBlue">Monday, July 1st</p>
				<ul className="list-disc px-10">
					<li className="border-b hover:border-b-paperBlue border-white cursor-pointer">Trigonometry Set 6</li>
					<li className="border-b hover:border-b-paperBlue border-white cursor-pointer">Trigonometry Set 7</li>
				</ul>
			</div>
			<div>
				<p className="border-b border-b-paperBlue">Wednesday, July 3rd</p>
				<ul className="list-disc px-10">
					<li className="border-b hover:border-b-paperBlue border-white cursor-pointer">Trigonometry Set 8</li>
					<li className="border-b hover:border-b-paperBlue border-white cursor-pointer">Trigonometry Set 9</li>
				</ul>
			</div>
			<div>
				<p className="border-b border-b-paperBlue">Friday, July 5th</p>
				<ul className="list-disc px-10">
					<li className="border-b hover:border-b-paperBlue border-white cursor-pointer">Trigonometry Set 10</li>
					<li className="border-b hover:border-b-paperBlue border-white cursor-pointer">Trigonometry Set 11</li>
				</ul>
			</div>
		</div>
	);
}
