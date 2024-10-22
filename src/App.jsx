import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
function App() {

  return (
    <>
      <Header value="Поиск"/>
      <Paragraph value="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
      <Button value="Искать"/>
      
    </>
  );
}

export default App;