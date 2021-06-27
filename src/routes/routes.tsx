import React, { lazy, Suspense } from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
  HomeRouteMatch,
  BookDetailsRouteMatch,
  BookISBNSearchRouteMatch,
  BookListRouteMatch,
} from './config'

function makeRoute(
  routeMatch: string,
  importMethod: () => Promise<{ default: React.ComponentType<any> }>
) {
  const LazyComponent = lazy(importMethod)
  return (
    <Route exact path={routeMatch} key={routeMatch}>
      <Suspense fallback="">
        <LazyComponent />
      </Suspense>
    </Route>
  )
}

export const Routes = [
  <Route
    key={HomeRouteMatch}
    exact
    path="/"
    render={() => {
      return true ? <Redirect to={HomeRouteMatch} /> : <Redirect to="/test1" />
    }}
  ></Route>,
  makeRoute(HomeRouteMatch, () => import('../pages/Home')),
  makeRoute(BookListRouteMatch, () => import('../components/List')),
  makeRoute(BookISBNSearchRouteMatch, () => import('../components/ISBNSearch')),
  makeRoute(BookDetailsRouteMatch, () => import('./book-details')),
]
