import { useContext, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CardContext } from "../context/CardContext";
import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";
import { formatExpiredAt } from "../../utils/helper";

const ListCards = () => {
  const { cards } = useContext(CardContext);
  const [selectedCard, setSelectedCard] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openDetail = (card) => {
    setSelectedCard(card);
  };

  const closeDetail = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">Cards</h2>
        </div>
        <div className="font-medium text-[#eb4042]">
        <button
            onClick={() => {}}
          >View All {">"}</button>
         </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-stretch mt-5">
        <Link to="/add">
          <div className="flex flex-col items-center justify-center w-full md:w-64 p-4 border-2 border-gray-300 border-dashed rounded-lg h-46">
            <div className="mb-2">
              <img src="/images/add.png" className="w-7 h-7" alt="Add icon" />
            </div>
            <p className="text-black text-lg font-medium">Add New Card</p>
          </div>
        </Link>
        {cards.length === 0 ? (
          <div
              className="bg-gray-100 p-5 flex items-center text-sm border border-gray-100 text-gray-400 h-46 rounded-lg"
            >
             No cards available. Please add some cards.
            </div> 
        ) : 
        <div className="flex-none w-full md:w-2/3 relative">
          {/* Container carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="px-2 flex-none w-full sm:w-1/2 md:w-[35%]"
                >
                  <div
                    className="flex flex-col p-3 border cursor-pointer text-white h-46 rounded-lg"
                    style={{
                      backgroundColor: card.color,
                      borderColor: card.color,
                    }}
                    onClick={() => openDetail(card)}
                  >
                    <img
                      src="/images/log_cc.png"
                      className="w-6 h-6 mb-3 mt-2"
                      alt="Log icon"
                    />
                    <h3 className="font-bold">{card.holder}</h3>
                    <p>{card.number}</p>
                    <div className="flex justify-between">
                      <div className="mt-4">
                        <div>Expiry</div>
                        <div>{formatExpiredAt(card.expiredAt)}</div>
                      </div>
                      <div className="flex justify-end flex-col">
                        <div>
                          <img
                            src="/images/mastercard-logo.svg"
                            className="w-10"
                            alt="Mastercard logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -left-7 transform -translate-y-1/2 rounded-full focus:outline-none active:outline-none"
          >
            <img
              src="/images/back.png"
              className="opacity-60 w-7 h-7"
              alt="Back icon"
            />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-7 transform -translate-y-1/2 rounded-full focus:outline-none active:outline-none"
          >
            <img
              src="/images/next.png"
              className="opacity-60 w-7 h-7"
              alt="Next icon"
            />
          </button>
        </div>
        }
      </div>
      {selectedCard && <CardDetail card={selectedCard} onClose={closeDetail} />}
    </div>
  );
};

export default ListCards;
