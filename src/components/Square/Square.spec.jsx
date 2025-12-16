import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest' 
import Square from './Square'    

describe('Square component', () => {
  it('renderiza o valor passado por props', () => {
    render(<Square value="X" onClick={() => {}} />)
       
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('X') 
  })

  it('aplica a cor correta quando o valor é X', () => {
    render(<Square value="X" onClick={() => {}} />)

    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ color: '#FF5733' })
  })

  it('aplica a cor correta quando o valor é O', () => {
    render(<Square value="O" onClick={() => {}} />)

    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ color: '#3498DB' })
  })

  it("chama a função onClick ao clicar no botão", () => {
    const handleClick = vi.fn();

    render(<Square value="X" onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
})