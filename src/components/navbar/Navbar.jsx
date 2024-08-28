import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Yoh Yoh</span>
            <div className="social">
                <a href="#"><img src="/linkedin.png" /></a>
                <a href="#"><img src="/github.png" /></a>
                <a href="#"><img src="/instagram.png" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar