// import logo from './logo.svg';
import './App.css';
import React, { Children, useState } from 'react';
import { Button, Menu} from 'antd';
import { Bisection } from './components/Bisection';
import { Routes, Route , useNavigate} from 'react-router-dom'
import { Falseposition } from './components/Falseposition';


function App() {
  
  const navigate = useNavigate();

  return (

    <div>
      <div className='App'>
      <Menu
        mode='horizontal'
        theme='dark'

        onClick={({ key })=>navigate(key) }

        items={[
          {label:'HOME', key:'/Home'},
          {label:'Root-of-equation' ,key:'/Rootofequation' ,children:[
            {label:'Bisection', key:'/Bisection'},
            {label:'Falseposition', key:'/Falseposition'},
            {label:'Onepoint', key:'/Onepoint'},
            {label:'Newtonraphson', key:'/Newtonraphson'},
            {label:'Secant', key:'/Secant'}
            
          ]}
        ]}
      />
      <Routes>
        <Route path='/Bisection' element={<Bisection />}></Route>
        <Route path='/Falseposition' element={ <Falseposition /> }></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App;


// function App() {

//   const [num1,setnum1] = useState(0) ;
//   const [num2,setnum2] = useState(0) ;
//   const [numresult,setnumresult] = useState(null) ;
//   const word = "Hi!";
//   const navigate = useNavigate();

//   function results (e){
//     e.preventDefault() ;
//     const numresult = num1+num2;
//     setnumresult(numresult);
//   }

//   function resetresults(e){
//     e.preventDefault();
//     setnumresult(0);
//   }

//   return (  //ส่วนที่แสดงผลออกมายังหน้าจอโดยเป็น HTML 
//     <div className="App">
//       <Menu
//         mode='horizontal'
//         theme='dark'

//         onClick={({ key })=>navigate(key) }

//         items={[
//         {label:'HOME', key:'/home'},
//         {label:'Root-of-equation' ,key:'/Rootofequation' ,children:[
//           {label:'Bisection', key:'/Bisection'},
//           {label:'Falseposition', key:'/Falseposition'},
//           {label:'Onepoint', key:'/Onepoint'},
//           {label:'Newtonraphson', key:'/Newtonraphson'},
//           {label:'Secant', key:'/Secant'}
          
//         ]}
//         ]}
//       />
//       <Routes>
//         <Route path='/Bisection' element={<Bisection />}></Route>
//       </Routes>
//       <header className="App-header">
//         {
//         <form>
//           X1: <input onChange={(num1)=>setnum1(parseFloat(num1.target.value))} type='number'></input><br/>
//           X2: <input onChange={(num2)=>setnum2(parseFloat(num2.target.value))} type='number'></input><br/>

//           <Button onClick={results} type="primary">CALCULATE</Button>
//           <Button onClick={resetresults}type="primary" danger>Reset</Button>
//           <br/>
//           Result : {numresult}

//           <Eiei  deliver = {word}  />

//         </form>
//         }
//       </header>
//     </div>
//   );
// } //สาเหตุที่ X1 นั้นต้องมีการใช้ parseFloat เพราะ หลังจากที่เราใส่ค่าเข้ามาแล้วมันยังเป็น string อยู่
//   //ซึ่งต้องมีการใส่ parseFloat เข้าไปเพื่อกำหนดค่าให้กลายเป็น float แทน string 

// export default App;
