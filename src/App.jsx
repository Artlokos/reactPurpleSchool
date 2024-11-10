import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';
// import UniInput from './components/UniInput/UniInput';
import Navbar from './layout/Navbar/Navbar';
function App() {

  return (
    <>
      <Navbar/>
      <Header value="Поиск"/>
      <Paragraph value="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
      <Search/>
      <Button text="Искать" onClick={()=>{console.log('Search');}}/>
      
    </>
  );
}

export default App;