import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
