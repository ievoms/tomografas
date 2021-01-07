import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

export const PrivateRoute = ({
  component: Component,
  location,
  ...rest
}: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem('token') ? true : false

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  )
}
