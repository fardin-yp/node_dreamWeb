import React,{useState ,useContext ,useRef, useEffect} from 'react';
import axios from 'axios';
import AuthContext from "../../../helpers/context/authContext";
import { useRouter } from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';
import Head from 'next/head';
import Image from 'next/image';


export async function getServerSideProps(context) {


  const json = "6LfMd88dAAAAANh6pGI5JNg-q4m3gkwi8BlYKmHo" ;

  if(context.req.cookies.token){
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    }
  }

  const usersloggedIn = await fetch("http://localhost:27017/authentication/find",{
    credentials: "include",
    headers:{
      cookie:context.req.cookies.token
    }
    
  });
 const user = await usersloggedIn.json()

  if(user.username){
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    }
  }


  return {
    props:{
      json,
    }
  };

}

const index = ({json}) => {

    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [loading , setLoading] = useState(false);
    const {getUserLoggedIn ,Api} = useContext(AuthContext);
    const [error ,setError] = useState('');
    const [seePassword ,setSeePassword] = useState(false);
    const router = useRouter();
    const reRef = useRef('');
    const [lastpage ,setLastpage] = useState(null)
 
const login = async (e) => {
     e.preventDefault();
     setLoading(true);
     setError("")
     const captcha = await reRef.current.executeAsync();
     reRef.current.reset();
     const post  = {email ,password ,captcha};
     const Apost = {email ,password}
     try{
        await axios.post(`${Api}/authentication/login` , post ,{withCredentials:true}).then(res => {
          if(res.data.errMessage){
            setError(res.data.errMessage)
            setLoading(false);
          }
            if(!res.data.errMessage){
              getUserLoggedIn();
              if(lastpage !== window.document.URL){
                window.location = lastpage
              }
              if(lastpage === window.document.URL){
                window.location = '/'
              }  
            }
        }) 
      }catch(err){
        setLoading(false)   
      }
      try{
        await axios.post(`${Api}/auth/login` , Apost ,{withCredentials:true}).then(res => {
          if(!res.data.errMessage){
            window.location = '/Admin'
          }
        })
      }catch(err){} 
   }

    useEffect(() => {
      setLastpage(window.document.referrer)
    },[])

  return (
  <div className="login">
  <Head>
    <title> ورود اکانت کاربری</title>
  </Head>
          <form>
               <div className="left-login">
                 <img src="/images/login-1.png" alt="login" />
               </div>
               <div className="right-login">
               <div className="sign-logo" ><a href="/" target="_blank">
                 <Image layout={"fill"} src={"/images/dreamWeb.png"} alt="دریم وب" /></a></div>
               <b>  ورود به پروفایل کاربری دریم وب</b>
               <p>شما میتوانید برای استفاده از دیگر خدمات و خدمات پرداخت دریم وب وارد حساب کاربری خود شوید . درصورت نداشتن حساب کاربری <a style={{color:"#2196f3"}} href="/Auth/SignUp">ثبت نام</a> کنید !</p>
               <p>

               </p>

                <input onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل " />
                <div style={{width:"90%"}} id="password">
                <img style={seePassword ? {opacity:"1"}:null} src={'/uploads/view.png'} onClick={() => setSeePassword(prev => !prev)} />
                <input type={seePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="رمز عبور" /> 
                </div>
              
                <ReCAPTCHA 
                 style={{zIndex:"30",opacity:"0"}}
                 size="invisible"
                 sitekey={json}
                 ref={reRef}
                 />
                <button style={{background:"#2196f3"}} disabled={loading} onClick={login}>ورود به پنل</button>
                <div className="Auth-err">{error && <p>{error}</p>}</div>
               </div>
            </form>
        </div>
    )
}

export default index
