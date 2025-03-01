import{ createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    const newCard = { ...card, id: Date.now().toString() };
    setCards([...cards, newCard]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};
