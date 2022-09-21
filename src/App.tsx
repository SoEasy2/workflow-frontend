import { Route, Routes } from 'react-router'
import { routes } from './helpers/constants'
import { useId } from 'react'
import { MainLayout } from './components/Layouts/MainLayout/MainLayout'

const App = () => {
  return (
    <MainLayout>
      <Routes>
        {routes.map((route) => (
          <Route key={useId()} path={route.path} element={route.component} />
        ))}
      </Routes>
    </MainLayout>
  )
}

export { App }
