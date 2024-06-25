import styles from './App.module.css';
import { Blog } from './components/Blog/Blog';
import { BlogPost } from './components/Blog/BlogPost/BlogPost';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Projects } from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { appearInstant } from './utils/animations';

function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div
    className={`${styles["app"]} ${darkmode && styles["darkmode"]}`}
    // variants={appearInstant}
    // initial={'hidden'}
    // animate={'visible'}
    >
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
      <Footer darkmode={darkmode} setDarkmode={setDarkmode}/>
    </div>
  );
}

export default App;
