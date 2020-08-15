import React from 'react'
import headStyle from './Header.module.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge';
import LogoAmazon from '../LogoAmazon/LogoAmazon';
import { useStateValue } from '../StateProvider/StateProvider';

function Header() {

  const [{basket}] = useStateValue()
  console.log(basket);

  return (
    <div className={headStyle.header}>
      {/* image logo */}
      <LogoAmazon />
      

      {/* search input with logo */}
      <div className={headStyle.header__searchBox}>
        <input className={headStyle.searchBox__input} />
        <SearchIcon className={headStyle.searchBox__icon} />
      </div>

      {/* nav-links */}
      <div className={headStyle.header__navLink}>
        <Link className={headStyle.navLink__wrap} to='/login'>
          <span className={headStyle.navLink__one}>Hello,</span>
          <span className={headStyle.navLink__two}>Login</span>
        </Link>
        <Link className={headStyle.navLink__wrap} to='/checkout'>
          <span className={headStyle.navLink__one}>Returns</span>
          <span className={headStyle.navLink__two}>& Orders</span>
        </Link>
        <Link className={headStyle.navLink__wrap} to='/'>
          <span className={headStyle.navLink__one}>Your</span>
          <span className={headStyle.navLink__two}>Prime</span>
        </Link>
        <Link className={`${headStyle.navLink__wrap} ${headStyle.basket__icon}`} to='/checkout'>
          <Badge color="secondary" badgeContent={basket && basket.length} showZero>
            <ShoppingBasketIcon />
          </Badge>
        </Link>
      </div>
    </div>
  )
}

export default Header
