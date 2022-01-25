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
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/blog-with-react" element={<Home />}/>
        <Route path="/blog-with-react/ecrire" element={<AddArticle />}/>
        <Route path="/blog-with-react/contact" element={<Contact />}/>
        <Route path="/blog-with-react/articles/:slug" element={<Article />}/>
      </Routes>
    </>
  );
}

export default App;
