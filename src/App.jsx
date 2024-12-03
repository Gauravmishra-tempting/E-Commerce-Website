import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';


const Loader = lazy(() => import('./Components/BasicComponents/Loader'))
const Dashboard = lazy(() => import('./Components/Layout/Dashboard'));
 
function App() {
  return (
   <BrowserRouter>
   <Suspense fallback={<div><Loader/></div>}>
   <Routes>
    <Route path="/" element={<Dashboard />} />
   </Routes>
   </Suspense>
   </BrowserRouter>
  );
}

export default App;
