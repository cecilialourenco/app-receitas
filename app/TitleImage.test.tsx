import TitleImage from './TitleImage';
import { render, screen } from '@testing-library/react';

test('Deve renderizar a imagem', () => {
  render(<TitleImage cover={''} title={''} />);
  const logo = screen.getByAltText('Logo');
  expect(logo).toBeInTheDocument();
});

