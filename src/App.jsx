import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main'
import Detail from './pages/Detail'
import MovieList from './components/MovieList'

const App = () => {
  return (
<BrowserRouter>
<div className='bg-[#242424]  min-h-screen text-white p-5 md:p-10 lg-p-15 xl:px-20'>
<Header/>

<Routes>

<Route path='/' element={<Main/>}/>
<Route path="/movie/:id" element={<Detail />} />

 



</Routes>

</div>



</BrowserRouter>
  )
}

export default App
