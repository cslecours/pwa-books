import './App.css'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import React, {Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from './components/layout/Header'
import { ReactQueryDevtools } from 'react-query/devtools'
import { DesignSystemProvider } from './basic-components/DesignSystemProvider/DesignSystemProvider'
import { Routes } from './routes/routes'

const queryClient = new QueryClient()

const AppProviders: React.FC<{}> = ({ children }) => {
  return (
    <DesignSystemProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </DesignSystemProvider>
  )
}

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Header>
          <ul>
            <li>
              <NavLink exact to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/isbn">ISBN</NavLink>
            </li>
            <li>
              <NavLink exact to="/list">List</NavLink>
            </li>
          </ul>
        </Header>
        <aside>
        </aside>
        <main>
          <Switch>
            {Routes.map(x => x)}
            <Route path="/home">HOME</Route>
          </Switch>
        </main>
        <footer>Footer</footer>
      </BrowserRouter>
    </AppProviders>
  )
}

export default App
