import { Route, Routes } from 'react-router'
import { routes } from './helpers/constants'
import { useId } from 'react'

const App = () => {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route key={useId()} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  )
}

export { App }
