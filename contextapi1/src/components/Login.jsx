import  {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    // const {setUser} = useContext(UserContext)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setUser({username, password})
      // so we create a two state//
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')




    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
      e.preventDefault()
      setUser({username,password,city,address,email})
    }

    
  return (
    <>
    <section style={{backgroundColor:'pink', border:"rounded"}}>
	<form noValidate="" action="" className="container flex flex-col bg-red-900  gap-y-2 mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Welcome here is some my personal information using context api </p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
				
					<input id="name" type="text" value={username} placeholder="Your name" onChange={(e)=>setUsername(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
        <div className="col-span-full sm:col-span-3">
		<input id="password" type="text" value={password} placeholder="Your Password" onChange={(e)=>setPassword(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
			
				<div className="col-span-full sm:col-span-3">
					<input id="email" type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				
				</div>
				<div className="col-span-full">
					<input id="address" type="text" placeholder="Address"value={address} onChange={(e)=>setAddress(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<input id="city" type="text" placeholder="City"  value={city} onChange={(e)=>{setCity(e.target.value)}}className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				
			
			</div>
		</fieldset>
	
     </form>
</section>
    <div>

         <button style={{color:"green", backgroundColor:"black" ,margin:5}} onClick={handleSubmit}> click To Show Data that User Input</button>
    </div>
    </>
  )
}

export default Login