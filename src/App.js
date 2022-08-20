import { HashRouter, Routes, Route} from 'react-router-dom'
import "./App.scss";
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home'
import Podcast from './pages/Podcast'
import Resources from './pages/Resources'
import Downloads from './pages/Downloads'
import Books from './pages/Books';
import Timer from './pages/Timer'
import Quotes from './pages/Quotes'

function App() {
  return (
    <div>
      <h4>Ciencia Contemplativa</h4>
      <HashRouter>
        <Routes>
          <Route path="/"  element={<SharedLayout/>} >
              <Route index            element={<Home/>} />
              <Route path ='podcast'  element= {<Podcast/>}  />
              <Route path='resources' element={<Resources/>} / >
            
                <Route path='downloads' element={<Downloads />} />
                <Route path='books' element={<Books />} />
                <Route path='timer' element={<Timer />} />
           <Route path='quotes' element={<Quotes />} />
          </Route>
           


        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
