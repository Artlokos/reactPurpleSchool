import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
  // const [count, setCount] = useState(0);
  const data = [
    {
      title:'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Горные походы'
    },
    {
      title:'Поход в горы',
      date: new Date(),
      text: 'Фалаза'
    }
  ];
  return (
    <>
     <h1>Заголовок</h1>
     <p>Первый компонент</p>
     <Button/>
    <CardButton>
     + Новое воспоминание
    </CardButton>

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
    </>
  );
}

export default App;