import './App.css';
import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import characters, { Rick } from './data.js';

function App() {

   const handleOnClose = () => window.alert('Cierra');

   const myStyle = { padding: '25px' };

   return (
      <div className='App' style={myStyle}>
         <div>
            <SearchBar
               onSearch={(characterID) => window.alert(`Personaje con ID ${characterID}`)}
            />
         </div>
         <hr />
         <div>
            <Card
               name={Rick.name}
               species={Rick.species}
               gender={Rick.gender}
               image={Rick.image}
               onClose={handleOnClose}

            />
         </div>
         <hr />
         <div>
            <Cards
               characters={characters}
            />
         </div>

      </div>
   )
}

export default App;
