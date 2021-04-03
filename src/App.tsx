import './App.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const LazyISBN = lazy(() => (
  import('./components/ISBNSearch')
));

const LazyList = lazy(() => (
  import('./components/List')
));

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <header>
        <h1>Book pages</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/isbn">ISBN</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
      </header>
      <main>
        <Switch>
        <Route path="/list">
            <Suspense fallback="">
              <LazyList />
            </Suspense>
          </Route>
          <Route path="/isbn">
            <Suspense fallback="">
              <LazyISBN />
            </Suspense>
          </Route>
        </Switch>

      </main>
      <footer>Footer</footer>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;