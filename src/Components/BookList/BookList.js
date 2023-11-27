export default function BookList (){
    const bookList = [
        {
          bookname : "Irrfan Khan: A Life in Movies",
          author : "Shubhra Gupta",
          bookDescrip :"A person spend his time with movie"
        },
        {
          bookname : "The World: A Family History",
          author : "Simon Sebag Montefiore",
          bookDescrip :"A person spend his time with movie"
        },
        {
          bookname : "Breaking Barriers: the Story of a Dalit Chief Secretary",
          author : "Kaki Madhava Rao",
          bookDescrip :"A person spend his time with movie"
        },
        {
          bookname : "Ambedkar: A Life",
          author : "Shashi Tharoor",
          bookDescrip :"A person spend his time with movie"
        },
        {
          bookname : "Human Anatomy",
          author : "Dr. Ashvini Kumar Dwivedi",
          bookDescrip :"A person spend his time with movie"
        }
      ]
      
    return(
      bookList.map((book) =>{
        return(
          <div>
            <h1>{book.bookname}</h1>
            <h3>{book.author}</h3>
            <p>{book.bookDescrip}</p>
        </div>
        )  
      })
    )
}