/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react'
import NavigationBar from './NavigationBar';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
useRouter.mockReturnValue({
  pathname: '/recipe.list'
})
describe('Barra de Navegação', () => {
  test('deve renderizar o botão', () => {
    render(<NavigationBar />)    
      expect(screen.getByText('Pesquisar')).toBeInTheDocument();

  });
});
