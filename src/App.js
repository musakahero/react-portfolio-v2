import styles from './App.module.css';
import { Blog } from './components/Blog/Blog';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';

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
          <Route path='/projects' element={<Home />}></Route>
          <Route path='/contact' element={<Home />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
