import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import {auth} from './firebase'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCartOutlined'
function Header(){
    const [{basket,loggedinuser}, dispatch] = useStateValue();
    
    const logoutUser = () => {
        if(loggedinuser){
            auth.signOut();
        }
    }

    return(
        <nav className="header">
            
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
               <Link to={!loggedinuser && "/login"} className="header__link">
                 <div onClick={logoutUser} className="header__option">
                     <span className="header__optionLineOne">Hello, {loggedinuser?.email}</span>
                     <span className="header__optionLineTwo">{loggedinuser ? 'Signout' : 'Sign In'}</span>
                 </div>
               </Link>
               <Link to="/" className="header__link">
                   <div className="header__option">
                       <span className="header__optionLineOne">Returns</span>
                       <span className="header__optionLineTwo">and Orders</span>
                   </div>
               </Link>

            </div>
            <Link to="/checkout" className="header__link">
                <div classname="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__productCount">{basket.length}</span>
                </div>
            </Link>
        </nav>
    )
}
export default Header

















