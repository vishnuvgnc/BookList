import './App.css';
import BookList from './Components/BookList/BookList.js';
import Header from './Components/Header/Header.js';
import Content from './Components/Info-Panel/Content.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className='desktop_container'>
      <Header />
      <Content />
      <BookList/>
      <Footer />
    </div>
  );
}
export default App;
