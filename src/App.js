import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';

import{Layout,Feed,VideoDetails,ChannelDetails,SearchResults} from './components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Feed />}/>
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDetails />} />
        <Route path='/search/:serachTerm' element={<SearchResults /> } />
        </Route>

      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
