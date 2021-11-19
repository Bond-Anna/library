import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import './App.css';

const CategoriesView = lazy(() =>
  import(
    './views/Categories/CategoriesView' /* webpackChunkName: "categories-view" */
  ),
);
const BooksView = lazy(() =>
  import('./views/Books/BooksView' /* webpackChunkName: "books-view" */),
);
const AudioView = lazy(() =>
  import(
    './views/AudioBooks/AudioBooksView' /* webpackChunkName: "audio-view" */
  ),
);
const CompilationsView = lazy(() =>
  import(
    './views/Compilations/CompilView' /* webpackChunkName: "compilations-view" */
  ),
);
const NewBooksView = lazy(() =>
  import('./views/New/NewBooksView' /* webpackChunkName: "new-books-view" */),
);
const MyBooksView = lazy(() =>
  import('./views/MyBooks/MyBooksView' /* webpackChunkName: "my-books-view" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "notfound-view" */),
);

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Routes>
            <Route exact path="/categories" element={<CategoriesView />} />
            <Route exact path="/books" element={<BooksView />} />
            <Route exact path="/audiobooks" element={<AudioView />} />

            <Route exact path="/compilations" element={<CompilationsView />} />

            <Route exact path="/new" element={<NewBooksView />} />

            <Route exact path="/myBooks" element={<MyBooksView />} />

            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
