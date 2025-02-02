 import './Square.css'

 const Square = ({ value, onClick }) => {
    const getColor = (value) => {
      if (value === 'X') return { color: '#FF5733' };  // Laranja para X
      if (value === 'O') return { color: '#3498DB' };  // Azul para O
      return { color: 'black' };                      // Cor padrão
    };
  
    return (
      <button className="square" onClick={onClick} style={getColor(value)}>
        {value}
      </button>
    );
  };
  
export default Square