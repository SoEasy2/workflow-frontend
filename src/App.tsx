import { Route, Routes, useNavigate } from 'react-router'
import { routes } from './helpers/constants'
import { useEffect, useId } from 'react'
import { MainLayout } from './components/Layouts/MainLayout/MainLayout'

const App = () => {
   const navigate = useNavigate();
   useEffect(() => {
       navigate({
           pathname: '/registration',
           search: '?step=2'
       })
       addEventListener('resize', () => {
           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
           // @ts-ignore
           document.body.style.zoom = (1 / window.devicePixelRatio);
       });
       return () => removeEventListener('resize', () => {
           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
           // @ts-ignore
           document.body.style.zoom = (1 / window.devicePixelRatio);
       })
   }, [])
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
