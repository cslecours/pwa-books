import './App.css'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from './components/layout/Header'
import {
  FASTButton,
  FASTDesignSystemProvider,
  FASTTextField,
} from '@microsoft/fast-components'
import { ReactQueryDevtools } from 'react-query/devtools'

const LazyISBN = lazy(() => import('./components/ISBNSearch'))

const LazyList = lazy(() => import('./components/List'))

const queryClient = new QueryClient()

console.debug(
  [FASTDesignSystemProvider, FASTTextField, FASTButton].map((x) => x.name)
)

const AppProviders: React.FC<{}> = ({ children }) => {
  return (
    <fast-design-system-provider
      use-defaults
      background-color={'#FFFFFF'}
      accent-color="#00AA00"
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </fast-design-system-provider>
  )
}

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/isbn">ISBN</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </Header>
        <aside>
          <fast-menu>
            <fast-menu-item>
              <Link to="/">Home</Link>
            </fast-menu-item>
            <fast-menu-item>
              <Link to="/isbn">ISBN</Link>
            </fast-menu-item>
            <fast-menu-item>
              <Link to="/list">List</Link>
            </fast-menu-item>
          </fast-menu>
        </aside>
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
    </AppProviders>
  )
}

export default App
