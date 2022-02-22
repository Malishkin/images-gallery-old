import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';

const UNSPLASH_ACCESS_KEY = 'f3BUEkG1XA-3zmhDx_owJH6U16eH3pXHEBrf8bFdcsg';

const App = () => {
  const [word, setWord] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com//photos/random/?query=${word}&client_id=${UNSPLASH_ACCESS_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
      setWord('');
  };

  // console.log(process.env);
 

  return (
    <div>
      <Header title='Images Gallery' />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
