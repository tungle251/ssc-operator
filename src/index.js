import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Alerts from './pages/alerts/'
import AlertDetail from './pages/alert-detail/'
import { Provider } from 'react-redux'
import store from 'store'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Dashboard />} />
      <Route path="alerts">
        <Route index element={<Alerts />} />
        <Route path=":alertId" element={<AlertDetail />} />
      </Route>
      <Route path="*" element={<>Page Not Found</>} />
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
