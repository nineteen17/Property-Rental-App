import "./Header.scss"

const Header = () => {
  return (
    <div className="Header" >
      <div className="Header__logo">
        <img src="https://metronz.co.nz/wp-content/uploads/2022/09/header-logo.svg"  />
        </div>
        <div className="Header__nav">
          <div className="Header__nav__item" >Services</div>
          <div className="Header__nav__item" >Apply</div>
          <div className="Header__nav__item" >Current Listings</div>
          <div className="Header__nav__item" >About Us</div>
          <div className="Header__nav__item" >Contact</div>
          <div className="Header__nav__item" >Wishlist</div>
          <div className="Header__nav__item" >Login</div>
      </div>
    </div>
  )
}

export default Header