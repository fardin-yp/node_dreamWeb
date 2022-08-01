import axios from 'axios';
import { createContext , useEffect, useState ,useRef } from 'react';
import io from 'socket.io-client';

const AuthContext = createContext();

 export const AuthContextProvider = ({children }) => {

    const [userLoggedIn , setUserLoggedIn] = useState(false);
    const [find , setFind] = useState(false);
    const socket = useRef();
    const Api = "http://localhost:27017"
    const [users ,setUsers] = useState(null);

    useEffect(() => {
      socket.current = io("ws://localhost:27017")
     } , []);
 
    useEffect(() => {
       socket.current.on("getOnlineUsers" , OnlineUsers => {
          setUsers(OnlineUsers)
       })
     },[]);

     console.log(users)


    async function getUserLoggedIn() {
      try{
        const usersloggedIn = await axios.get( Api + "/authentication/loggedIn",{withCredentials:true});
        setUserLoggedIn(usersloggedIn.data);  
      } catch(err){}
    }

async function getUserinfo() {
  try{
  const usersloggedIn = await axios.get( Api + "/authentication/findUser",{withCredentials:true});
  setFind(usersloggedIn.data);  
  }
  catch(err){}
}

useEffect(() => {
  async function getSession() {
    try{
     await axios.get( Api + "/session",{withCredentials:true});
    } catch(err){}
    }
getSession();
},[]);
useEffect(() => {
  getUserLoggedIn()
},[]);

useEffect(() => {
  getUserinfo()
},[]);




    return(
    <AuthContext.Provider value={{ userLoggedIn ,getUserLoggedIn ,find  ,Api ,users}} >
       {children}
    </AuthContext.Provider>
    ) 

}

export default AuthContext;


