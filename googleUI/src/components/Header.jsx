import './header.css';

import AppsIcon from '@mui/icons-material/Apps';
import ScienceIcon from '@mui/icons-material/Science';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const Navbar = () => (
  <div className="navbar">
    <div className="navbar-left">
      <a href="#">About</a>
      <a href="#">Store</a>
    </div>
    <div className="navbar-right">
      <a href="#">Gmail</a>
      <a href="#">Images</a>
      <button className="icon-button">
          <ScienceIcon style={{paddingRight:"10px",fontSize: 30}} />
          <AppsIcon  style={{color:"black",fontSize: 30,paddingTop:"5px" }}></AppsIcon>
        <AccountCircleRoundedIcon style={{paddingLeft:"10px",fontSize: 30}} />
      </button>
      
    </div>
  </div>
);

export default Navbar;