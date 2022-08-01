import {useState ,useContext,useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import context from '../../../helpers/context/authContext';
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
      }
    };
  
  }

const index = ({json}) => {
    const [username ,setUserName] = useState('');
    const [family ,setFamily] = useState("")
    const [email ,setEmail] = useState('');
    const { getUserLoggedIn ,Api} = useContext(context)
    const [err ,setErr] = useState('')
    const [loading ,setLoading] = useState(false);
    const reRef = useRef('');
    const[secc ,setSecc] = useState(false);

    async function post(e) {
        e.preventDefault();
        setLoading(true)
        setErr("")
        const captcha = await reRef.current.executeAsync();
        reRef.current.reset();
        const ex = {email ,username ,family  ,captcha};
        try {
            await axios.post(`${Api}/authentication/sendEmail` ,ex ,{withCredentials:true}).then(res => {
              if(res.data.errMessage){
                setErr(res.data)
                setLoading(false)
            }
            if(!res.data.errMessage){
                setSecc(true)
                setLoading(false)
              }
        })

        }catch(err){
            setLoading(false)
        }
    }

    return (
        <div className="login">
  <Head>
   <link rel="icon" href="/art.png" />
    <title> ثبت نام</title>
  </Head>
  {secc === true && <div onClick={() => setSecc(false)} id="backDrop">hello</div>}
            {secc === true &&
            <div className="secc-comment">
                <img src={'/uploads/accept.png'} alt="" />
                <h1>ایمیل  تایید برای شما ارسال شد!</h1>
                <h2>لطفا ایمیل خود را از طریق لینک ارسال شده در صندوق پستی خود تایید کنید!</h2>
                <button onClick={() => {
                    setEmail('')
                    setSecc(false)}}>متوجه شدم</button>
            </div>}
      <form >
               <div className="left-login">
                 <img src="/images/sign-Up.jpg" alt="signUp" />
               </div>
               <div className="right-login">
               <div className="sign-logo" ><a href="/" target="_blank"><Image layout={"fill"} src={"/images/dreamWeb.png"} alt="دریم وب" /></a></div>
               <b>ثبت نام در دریم وب</b>
               <p>شما میتوانید برای استفاده از دیگر خدمات  وخدمات پرداخت دریم وب ثبت نام کنبد . درصورت ثبت نام وارد 
                 <a style={{color:"#1e9e97"}} href="/Auth/Login" >حساب کاربری </a> خود شوید .</p>
               <p>

               </p>
               <div id="sign-family">
              <input onChange={(e) => setUserName(e.target.value)} placeholder="نام " />
              <input onChange={(e) => setFamily(e.target.value)} placeholder="نام خانوادگی" />
               </div>

                <input onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل"/>
                <div>
                </div>
                <ReCAPTCHA 
                 style={{zIndex:"30",opacity:"0"}}
                 size="invisible"
                 sitekey={json}
                 ref={reRef}
                 />
                <button style={{background:"#1e9e97"}} disabled={loading} onClick={post}>ثبت نام</button>
                <div className="Auth-err">{err && <p>{err.errMessage}</p>}</div>
               </div>
            </form>
        </div>
    )
}

export default index
