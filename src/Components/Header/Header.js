export default function Header(){
    return(
        <div className="header_container">
            <div className="heading">
                <h1>StackBook</h1>
            </div>
            <div className="Navbar_list">
                <ul>
                    <li>About Us</li>
                    <li>BookList</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="search_bar">
                <input id="searchBar" type="text" placeholder="Search your Book"/>
                <button type="submit">Search</button>
            </div>
        </div>
    )
}