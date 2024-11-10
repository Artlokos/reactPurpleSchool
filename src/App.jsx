import { useState } from 'react';
import './App.css';
// import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
  // const [count, setCount] = useState(0);
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Горные походы'
    },
    {
      title: 'Поход в горы',
      date: new Date(),
      text: 'Фалаза'
    }
  ];




  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton/>
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>

      <Body>
        <JournalForm/>
      </Body>

      {/* <Button /> */}
    </div>
  );
}

export default App;
