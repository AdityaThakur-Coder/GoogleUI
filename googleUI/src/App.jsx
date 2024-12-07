import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
