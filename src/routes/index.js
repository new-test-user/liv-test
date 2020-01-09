import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'components'
import DetailsPage from 'pages/DetailsPage'

export const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={DetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}
