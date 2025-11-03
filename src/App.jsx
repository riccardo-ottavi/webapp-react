import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import DefaultLayout from './layouts/Defaultlayout'

function App() {
  return (
    <>
      {/*Mappatura rotte*/}
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/movies/:id' element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
