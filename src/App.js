import logo from './logo.svg';
import './App.css';
import Post from './components/Post';

const DATA = [
  {
      id: '1',
      title: 'First Title',
      body: 'First body'
  },
  {
      id: '2',
      title: 'Second Title',
      body: 'Second body'
  },
  {
      id: '3',
      title: 'Third Title',
      body: 'Third body'
  },
  {
      id: '4',
      title: 'Forth Title',
      body: 'Forth body'
  },
  {
      id: '5',
      title: 'Some Title',
      body: 'Some body'
  },
]

function App() {
  return (
    <div className="App">
      {DATA.map((item, id) => (
        <Post 
        key={id}
        title={item.title}
        body={item.body}
        />
      ))}
    </div>
  );
}

export default App;
