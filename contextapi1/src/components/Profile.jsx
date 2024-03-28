import  {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div style={{color:'red'}}>please input above field that i am showing ur in put data</div>
    return(
        
        <section style={{width :900,height:200,  backgroundColor:"red", color:'white',padding:30}}>
        <div className='bg-red-700'>welcome user: {user.username}</div>
        <div>User Password: {user.password}</div>
        <div>User email: {user.email}</div>
        <div>User City: {user.city}</div>
        <div>User addrees: {user.address}</div>
        </section>
        



        
    )

   
}

export default Profile