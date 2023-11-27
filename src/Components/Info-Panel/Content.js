export default function Content(){
    return(
        <div className="info_panel">
            <hr></hr>
            <div className="info_explain">
                <p><strong>No.1 Book Seller in this world :</strong> </p>
                <p> For over <strong>100 years</strong> Booklist magazine has helped tens of thousands 
                    of librarians as a book review source, and readers advisory,
                    collection development, and professional development resource. Booklist magazine
                    delivers 8,000+ recommended-only reviews of books, audiobooks, and reference sources each year, 
                    spanning every age and genre.
                </p>
                <p>Together these resources offer in-depth coverage of the latest books, new 
                    authors, publishers, publishing trends, curriculum standards, award-winners,
                    and more through Top 10s, read-alikes, interviews, feature articles, and classroom activities.
                </p>
            </div>        
            <div className="buySell_Btn">
                <button type="submit" className="buy_btn">Buy</button>
                <button type="submit" className="sell_btn">Sell</button>
            </div>  
            <hr></hr>   
        </div>  
    )
}