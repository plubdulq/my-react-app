import '../assets/styles/Navbar.css';

function Nav () {
    return (
        <div>
            <h4>เว็บอ่านมังงะนี้ copy มาจาก upmanga เพื่อการศึกษา</h4>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo">
                        LOGO
                    </a>
                </div>
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>
                            <a href="/addmanga">Add New Manga</a>
                        </li>
                        <li>
                            <a href="/manga/japanese">มังงะญี่ปุ่น</a>
                        </li>
                        <li>
                            <a href="/manga/chinese">มังงะจีน</a>
                        </li>
                        <li>
                            <a href="/manga/korean">มังงะเกาหลี</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <input name="searchbar" placeholder="ค้นหามังงะ"></input>
                </div>
        </nav>
        </div>
        
    );
}
export default Nav;