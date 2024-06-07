import logo from "../../assets/logo/e.png";
import "./Header.css";

const Header = () => {
  const handleRandomAdvice = () => {
    console.log("hello")
  }
  const handleSearchAdvice = () => {
    console.log("search")
  }
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      {/* <div className="header-buttons">
        <button onClick={handleRandomAdvice}>Get random advice</button>
        <button onClick={handleSearchAdvice}>search advice</button>
      </div> */}
    </header>
  );
};

export default Header;
