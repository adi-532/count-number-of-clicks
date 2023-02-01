import React,{ useState }from 'react';
const App3 = () => {
  const [num,setnum]=useState(0);
  return <button 
  onClick={()=>{
    setnum(num+1)
  }}>
    Click me{num}
    </button>;
}
export default App3;
