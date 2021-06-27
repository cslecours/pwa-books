import './App.css'
import { BrowserRouter, NavLink, Switch } from 'react-router-dom'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { DesignSystemProvider } from './basic-components/DesignSystemProvider/DesignSystemProvider'
import { Routes } from './routes/routes'
import {
  BookISBNSearchRouteMatch,
  BookListRouteMatch,
  HomeRouteMatch,
} from './routes/config'
import { AppLayout } from './components/layout/AppLayout'

const queryClient = new QueryClient()

const AppProviders: React.FC<{}> = ({ children }) => {
  return (
    <DesignSystemProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </DesignSystemProvider>
  )
}

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <AppLayout
          header={
            <ul>
              <li>
                <NavLink exact to={HomeRouteMatch}>
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
          }
          aside={<>POTATO</>}
          footer={<>Footer</>}
        >
          <Switch>{Routes.map((x) => x)}</Switch>
        </AppLayout>
      </BrowserRouter>
    </AppProviders>
  )
}

export default App
