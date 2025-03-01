import { formatExpiredAt } from "../../utils/helper";

const CardDetail = ({ card, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-10 -right-5 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 shadow z-50"
        >
          &times;
        </button>
        <div className="relative bg-white p-8 rounded-lg shadow-lg lg:w-[35vw] w-[70vw]">
          <div className="font-semibold text-2xl mb-5">Card Detail</div>
          <div className="border-b border-gray-300  py-4 grid grid-cols-2">
            <div className="font-semibold text-gray-500 text-sm ml-5">Card Holder Name</div>
            <div>{card.holder}</div>
          </div>
          <div className="border-b border-gray-300 py-4 grid grid-cols-2">
            <div className="font-semibold text-gray-500 text-sm ml-5">Expired At</div>
            <div>{formatExpiredAt(card.expiredAt)}</div>
          </div>
          <div className=" py-4 grid grid-cols-2 ">
            <div className="font-semibold text-gray-500 text-sm ml-5">Card Color</div>
            <div>
              <div className="border border-gray-300 p-1 rounded-lg inline-block">
                <span
                  className="block w-12 h-5"
                  style={{ backgroundColor: card.color, borderRadius: '6px' }}
                ></span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className=" border border-gray-300 text-black p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
