import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalForm from './components/JournalForm/JournalForm';

  const INITIAL_DATA = [
    // {
    //   id:1,
    //   title: 'Подготовка к обновлению курсов',
    //   date: new Date(),
    //   text: 'Горные походы'
    // },
  //   {
  //     id:2,
  //     title: 'Поход в горы',
  //     date: new Date(),
  //     text: 'Фалаза'
  //   }
  ];

function App() {

  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items}>  
        </JournalList>
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem}/>
      </Body>

    </div>
  );
}

export default App;
