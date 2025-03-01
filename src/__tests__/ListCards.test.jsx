import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListCards from '../pages/ListCards';
import { CardContext } from '../context/CardContext';

jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: () => [() => {}, { scrollPrev: jest.fn(), scrollNext: jest.fn() }],
}));

jest.mock('../../utils/helper', () => ({
  formatExpiredAt: (date) => date,
}));

describe('ListCards Component', () => {
  const dummyCards = [
    {
      id: '1',
      holder: 'Superhuman',
      number: '1111222233335139',
      spendLimit: '3000',
      color: '#eb4042',
      expiredAt: '2026-03-01',
    },
  ];

  const renderComponent = () =>
    render(
      <CardContext.Provider value={{ cards: dummyCards }}>
        <MemoryRouter>
          <ListCards />
        </MemoryRouter>
      </CardContext.Provider>
    );

  test('menampilkan daftar card yang ada', () => {
    renderComponent();
    expect(screen.getByText(/Superhuman/i)).toBeInTheDocument();
    expect(screen.getByText(/1111222233335139/i)).toBeInTheDocument();
  });

  test('membuka detail card saat card diklik', () => {
    renderComponent();
    fireEvent.click(screen.getByText(/Superhuman/i));
    expect(screen.getByText(/Expiry/i)).toBeInTheDocument();
  });
});
