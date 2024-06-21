
import Avatar from './Avatar';
import Hi from './Hi';
import Rating from './Ratings/Rating';
import './header.css'


const header = () => {
    return (
      <header className="header">

        <div className="header__main">
          <Hi />
          <Avatar />
        </div>

        <Rating />
      </header>
    );
}
 
export default header;