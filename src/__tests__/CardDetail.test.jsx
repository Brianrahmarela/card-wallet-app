import { render, screen, fireEvent } from '@testing-library/react';
import CardDetail from '../components/CardDetail';

describe('CardDetail Component', () => {
  const mockCard = {
    holder: 'Superhuman',
    expiredAt: '2026-03-01',
    color: '#eb4042',
  };

  test('menampilkan informasi kartu dengan benar', () => {
    render(<CardDetail card={mockCard} onClose={() => {}} />);
    expect(screen.getByText(/Card Holder Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Expired At/i)).toBeInTheDocument();
    expect(screen.getByText(/Card Color/i)).toBeInTheDocument();
    expect(screen.getByText(mockCard.holder)).toBeInTheDocument();
    expect(screen.getByText(/Card Detail/i)).toBeInTheDocument();
  });

  test('memanggil fungsi onClose saat tombol Cancel diklik', () => {
    const onCloseMock = jest.fn();
    render(<CardDetail card={mockCard} onClose={onCloseMock} />);
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('memanggil fungsi onClose saat tombol close (×) diklik', () => {
    const onCloseMock = jest.fn();
    render(<CardDetail card={mockCard} onClose={onCloseMock} />);
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
