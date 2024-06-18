import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const[numberAllowed, setnumberAllowed] = useState(false)
  const[carectorAllowed, setcarectorAlloued] = useState(false)
  const[password, setpassword] = useState("")
 
//youseRef
const passwordRef = useRef(null)
const passwordGenarater = useCallback( ()=>{
   let pass = ""
   let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed) str +="123456789"
   if(carectorAllowed) str +="!@#$%^&*()_+*-+"

   for (let i = 1; i <=length; i++) {
    let char = Math.floor(Math.random() *str.length + 1) 
    pass += str.charAt(char)
   }
   setpassword(pass)
   
} ,[length,numberAllowed,carectorAllowed,setpassword])


const copyPasswordtoClipboard = useCallback(()=>{
  passwordRef.current.select()
  passwordRef.current.setSelectionRange(0,8)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
  passwordGenarater()
},
[length,numberAllowed,carectorAllowed,passwordGenarater])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-yellow-200 bg-gray-700'>
    <h1 className='text-4xl text-center py-4'>password genarater</h1>
    <div className='flex shadow rounded-lg overflow-hidden md-4 py-4'>
      <input 
      className='outline-none px-3 py-1 w-full rounded-xl text-orange-600'
      type="text" 
      value={password} 
      placeholder='password'
      readOnly 
      ref={passwordRef}/>
      <button
      onClick={copyPasswordtoClipboard}
      className='outline-none bg-blue-400 text-white px-3 py-0.5 rounded-lg shrink-0'>
        copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex mb-4 item-center gap-x-1'>
      <input 
      type="range"
      min={8}
      max={50}
      value={length}
      className='coursor-pointre'
      onChange={(e) =>{setlength(e.target.value)}}/>
      <label>Length : {length}</label>
      </div>
      <div className='flex mb-4 item-center gap-x-1'>
      <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={() => setnumberAllowed((pev) => (!pev))}
        id="numberInput" />
        <label htmlFor="numberInpit">number</label>
      </div>
      <div className='flex mb-4 item-center gap-x-1'>
      <input 
        type="checkbox"
        defaultChecked={carectorAllowed}
        onChange={() => setcarectorAlloued((pev) => (!pev))}
        id="carectorInput" />
        <label htmlFor='carectorInput'>carector</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
