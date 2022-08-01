import {useState ,useContext,useRef } from 'react';
import axios from 'axios';
import context from '../../../helpers/context/authContext';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';
import Head from 'next/head';


export async function getServerSideProps(context) {


  const json = "6LfMd88dAAAAANh6pGI5JNg-q4m3gkwi8BlYKmHo" ;
  const {token} = context.query;

    if(context.req.cookies.token){
      return {
        redirect: {
          permanent: false,
          destination: "/404"
        }
      }
    }
  
    const usersloggedIn = await fetch("https://dreamwebbackend.herokuapp.com/authentication/find",{
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
        token
      }
    };
  
  }

const index = ({json ,token}) => {
    const [confirm , setConfirmPassword] = useState('')
    const [password ,setPassword] = useState('')
    const [number ,setNumber] = useState('');
    const [melicode ,setMeliCode] = useState('')
    const { getUserLoggedIn ,Api} = useContext(context)
    const [err ,setErr] = useState('')
    const [loading ,setLoading] = useState(false);
    const [seePassword ,setSeePassword] = useState(false);
    const reRef = useRef('')

    async function post(e) {
        e.preventDefault();
        setLoading(true)
        setErr("")
        const captcha = await reRef.current.executeAsync();
        reRef.current.reset();
        const ex = {confirm ,number ,password ,meliCode:melicode ,token  ,captcha};
        try {
            await axios.post(`${Api}/authentication/signup/${token}` ,ex ,{withCredentials:true}).then(res => {
              if(res.data.errMessage){
                setErr(res.data)
                setLoading(false)
            }
            if(!res.data.errMessage){
              getUserLoggedIn()
                window.location = '/'             
              }
        })

        }catch(err){
            setLoading(false)
        }
    }

    return (
        <div className="login">
  <Head>
    <title> ثبت نام</title>
  </Head>
            <form >
               <div className="left-login">
                 <img src="/images/activate.jpg" alt="signUp" />
               </div>
               <div className="right-login">
               <div className="sign-logo" ><a href="/" target="_blank"><Image layout={"fill"} src={"/images/dreamWeb.png"} alt="دریم وب" /></a></div>
               <b>  تکمیل پروفایل کاربری دریم وب</b>
               <p>لطفا شماره تماس و کد ملی و رمز عبور خود را برای تکمیل پروفایل خود وارد کنید !</p>
               <p>

               </p>

                <input onChange={(e) => setMeliCode(e.target.value)} placeholder="کد ملی " />
                 <input onChange={(e) => setNumber(e.target.value)} placeholder=" تلفن همراه" />
              <div id="sign-family">
                <div id="password">
                <input  type={seePassword ? "text" : "password"} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="رمز عبور " /> 
                <img style={seePassword ? {opacity:"1"}:null} src={'/uploads/view.png'} onClick={() => setSeePassword(prev => !prev)} />
                </div>
                <div id="password">
                <input type={seePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="تکرار رمز عبور  " /> 
                </div>
              </div>
                <ReCAPTCHA 
                 style={{zIndex:"30",opacity:"0"}}
                 size="invisible"
                 sitekey={json}
                 ref={reRef}
                 />
                <button disabled={loading} onClick={post}>تکمیل پروفایل</button>
                <div className="Auth-err">{err && <p>{err.errMessage}</p>}</div>
               </div>
            </form>
        </div>
    )
}

export default index