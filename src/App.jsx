import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import DefaultLayout from './layouts/Defaultlayout'

import { GlobalProvider } from './contexts/GlobalContext'

function App() {
  return (
    <>
      <GlobalProvider>
        {/*Mappatura rotte*/}
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/movies/:id' element={<DetailsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
