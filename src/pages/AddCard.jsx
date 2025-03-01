import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../context/CardContext";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
	const { addCard } = useContext(CardContext);
	const navigate = useNavigate();

	const [cardData, setCardData] = useState({
		holder: "",
		number: "",
		spendLimit: "",
		color: "#000000",
		expiredAt: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCardData({ ...cardData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			cardData.holder &&
			cardData.number &&
			cardData.spendLimit &&
			cardData.expiredAt
		) {
			addCard(cardData);
			navigate("/");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="p-5 border border-gray-200  rounded-xl shadow-lg">
      <div className="font-semibold text-2xl mb-5">Add New Card</div>
			<div className="mb-4">
				<label className="block mb-1">Credit Card Holder</label>
				<input
					type="text"
					name="holder"
					value={cardData.holder}
					onChange={handleChange}
					className="border rounded-md border-gray-300 shadow-sm p-1 w-full"
					required
				/>
			</div>
			<div className="mb-4">
				<label className="block mb-1">Credit Card Number</label>
				<input
					type="number"
					name="number"
					value={cardData.number}
					onChange={handleChange}
					className="border rounded-md border-gray-300 shadow-sm p-1 w-full"
					required
				/>
			</div>
			<div className="mb-4">
				<label className="block mb-1">Credit Card Spend Limit</label>
				<input
					type="number"
					name="spendLimit"
					value={cardData.spendLimit}
					onChange={handleChange}
					className="border rounded-md border-gray-300 shadow-sm p-1 w-full"
					required
				/>
			</div>
			<div className="mb-4">
				<label className="block mb-1">Credit Card Color</label>
				<input
					type="color"
					name="color"
					value={cardData.color}
					onChange={handleChange}
					className="w-full"
				/>
			</div>
			<div className="mb-4">
				<label className="block mb-1">Expired At</label>
				<input
					type="date"
					name="expiredAt"
					value={cardData.expiredAt}
					onChange={handleChange}
					className="border rounded-md border-gray-300 shadow-sm p-2 w-full"
					required
				/>
			</div>
      <div className="flex justify-end mt-5 gap-3">
        <Link className="" to="/">
          <button className="border-1 border-gray-300 text-black p-2 rounded">
            Cancel
          </button>
        </Link>
        <button type="submit" className="bg-[#494cdd] hover:shadow-lg hover:shadow-indigo-400/50 text-white p-2 rounded">
          Add
        </button>
      </div>
		</form>
	);
};

export default AddCard;
