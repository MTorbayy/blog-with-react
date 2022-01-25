import Navbar from './Components/Navbar/Navbar'
import Home from './Containers/Home/Home'
import {Route, Routes} from 'react-router-dom'
import AddArticle from './Containers/AddArticle/AddArticle'
import Contact from './Containers/Contact/Contact'
import Article from './Containers/Article/Article'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}/>
        <Route path={process.env.PUBLIC_URL + '/ecrire'} element={<AddArticle />}/>
        <Route path={process.env.PUBLIC_URL + '/contact'} element={<Contact />}/>
        <Route path={process.env.PUBLIC_URL + '/articles/:slug'} element={<Article />}/>
      </Routes>
    </>
  );
}

export default App;
