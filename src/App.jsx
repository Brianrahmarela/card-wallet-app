import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCard from "./pages/AddCard";
import ListCards from "./pages/ListCards";

function App() {
	return (
		<Router>
			<div className="flex items-center justify-center min-h-screen ">
				<div className="flex flex-col w-[80%] lg:w-[70%]">
					<h2 className="font-bold mb-20 text-4xl">Card Wallet App</h2>
					<Routes>
						<Route path="/add" element={<AddCard />} />
						<Route path="/" element={<ListCards />} />
						<Route path="*" element={<AddCard />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
