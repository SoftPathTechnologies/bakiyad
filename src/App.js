import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom'
import { CreateContainer, MainContainer } from './components';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header/>
        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path='/*' element={<MainContainer/>}/>
            <Route path='/createItem' element={<CreateContainer/>}/>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
