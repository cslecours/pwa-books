import './App.css'
import {
  BrowserRouter,
  generatePath,
  Link,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from './components/layout/Header'
import { ReactQueryDevtools } from 'react-query/devtools'
import { DesignSystemProvider } from './basic-components/DesignSystemProvider/DesignSystemProvider'
import { Routes } from './routes/routes'
import {
  BookDetailsRouteMatch,
  BookISBNSearchRouteMatch,
  BookListRouteMatch,
} from './routes/config'
import { Footer } from './components/layout/Footer'
import { Content } from './components/layout/Content'

const queryClient = new QueryClient()

const AppProviders: React.FC<{}> = ({ children }) => {
  return (
    <DesignSystemProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
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
              <NavLink exact to={'/home'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to={BookISBNSearchRouteMatch}>
                ISBN
              </NavLink>
            </li>
            <li>
              <NavLink exact to={BookListRouteMatch}>
                List
              </NavLink>
            </li>
          </ul>
        </Header>
        <aside></aside>
        <Content>
          <Switch>
            {Routes.map((x) => x)}
            <Route path="/home">
              <Link
                to={generatePath(BookDetailsRouteMatch, {
                  isbn: '9782205049879',
                })}
              >
                Example book page
              </Link>
            </Route>
          </Switch>
        </Content>
        <Footer></Footer>
      </BrowserRouter>
    </AppProviders>
  )
}

export default App
