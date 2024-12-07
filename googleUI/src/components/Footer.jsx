import './footer.css'

const Footer = () => (
    <footer className="footer">
        <div className='country'>India</div>

        <hr  className='horizontal-line'/>
        
        <div className='footer-container'>
        <div className="footer-left">
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search works</a>
        </div>
        <div className="footer-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
        </div>
        </div>
 
    </footer>
);

export default Footer;