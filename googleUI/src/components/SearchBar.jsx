import './searchbar.css';

const SearchBar = () => (
  <div className="SearchBar">
    <img 
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
      alt="Google" 
      className="logo" 
    />
    <div className="Search-Box">
      <input 
        type="text" 
        placeholder="Search Google or type a URL" 
        className='searchInp' 
      />
      <div className="search-icons">
        <i className="fas fa-microphone"></i> 
      </div>
      <div className="search-buttons">
        <button>Google Search</button>
        <button>I Am Feeling Lucky</button>
      </div>
    </div>
    <div className="languages">
      Google offered in: <a href="#">हिंदी</a> <a href="#">বাংলা</a> <a href="#">తెలుగు</a> <a href="@">मराठी</a> <a href="#">தமிழ்</a> <a href="#">ગુજરાતી</a> <a href="#">ಕನ್ನಡ</a> <a href="#">മലയാളം</a> <a href="#">ਪੰਜਾਬੀ</a>
    </div>
  </div>
);

export default SearchBar;
