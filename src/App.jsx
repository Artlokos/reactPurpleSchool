import "./App.css";
import Button from "./components/Button/Button";
import Catalog from "./components/Catalog/Catalog";
import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";
import Search from "./components/Search/Search";
import Navbar from "./layout/Navbar/Navbar";
import cardItemList from "./assets/cardItemList.jsx";
import Login from "./components/Login/Login.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header value="Поиск" />
      <Paragraph value="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <div className="search-container">
        <Search />
        <Button
          text="Искать"
          onClick={() => {
                        
          }}
        />
      </div>

      <Catalog items={cardItemList} />
      <Login />
    </>
  );
}

export default App;
