import styles from './App.module.css';
import { Blog } from './components/Blog/Blog';
import { BlogPost } from './components/Blog/BlogPost/BlogPost';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Projects } from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';

function App() {
  return (
    <div className={styles["app"]}>
      <header className={styles["app-header"]}>
        <Navigation />
      </header>
      <main className={styles["app-main"]}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/blog/:postId' element={<BlogPost />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
