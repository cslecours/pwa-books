import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { BookDetailsRouteMatch, BookISBNSearchRouteMatch, BookListRouteMatch } from './config'


function makeRoute(routeMatch: string, importMethod: () => Promise<{ default: React.ComponentType<any> }>) {
    const LazyComponent = lazy(importMethod)
    return (
      <Route exact path={routeMatch}>
        <Suspense fallback="">
          <LazyComponent />
        </Suspense>
      </Route>
    )
  }
  
export const Routes = [
    makeRoute(BookISBNSearchRouteMatch, () => import('../components/ISBNSearch')),
    makeRoute(BookListRouteMatch, () => import('../components/List')),
    makeRoute(BookDetailsRouteMatch, () => import('./book-details'))
]
