import Header from './Component/Header';
import Contents from './Component/Contents';
import Footer from './Component/Footer';
import './AppStyle.css';
import { useState } from 'react';
import userSelectContext from './Context/userSelectContext';

export default function App() {
  const [userSelect, setUserSelect] = useState('');
  console.log(userSelect);
  return (
    <div className='priorDiv'>
      <userSelectContext.Provider value={{ userSelect, setUserSelect }}>
        <Header />
        <Contents />
        <Footer />
      </userSelectContext.Provider>
    </div>
  );
}
