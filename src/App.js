
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import Search from './components/Search';

function App() {
  return (
    <div className='min-h-full bg-slate-900'>
      <Header/>
      <Routes>
        <Route path='/' element={<CardList apiPath="general" />}/>
        <Route path='/business' element={<CardList apiPath="business" />}/>
        <Route path='/entertainment' element={<CardList apiPath="entertainment" />}/>
        <Route path='/health' element={<CardList apiPath="health" />}/>
        <Route path='/science' element={<CardList apiPath="science" />}/>
        <Route path='/sports' element={<CardList apiPath="sports" />}/>
        <Route path='/technology' element={<CardList apiPath="technology" />}/>
        <Route path='search' element={<Search apiPath="general"/>}/>
      </Routes>
    </div>
  );
}

export default App;
