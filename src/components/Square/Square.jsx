 import './Square.css'

 const Square = ({ value, onClick }) => {
    const getColor = (value) => {
      if (value === 'X') return { color: '#FF5733' };  
      else return { color: '#3498DB' };                    
    };
  
    return (
      <button className="square" onClick={onClick} style={getColor(value)}>
        {value}
      </button>
    );
  };
  
export default Square