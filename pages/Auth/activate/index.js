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
  
    const usersloggedIn = await fetch("https://dreamweb0fardin.herokuapp.com/authentication/find",{
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
    <title> ?????? ??????</title>
  </Head>
            <form >
               <div className="left-login">
                 <img src="/images/activate.jpg" alt="signUp" />
               </div>
               <div className="right-login">
               <div className="sign-logo" ><a href="/" target="_blank"><Image layout={"fill"} src={"/images/dreamWeb.png"} alt="???????? ????" /></a></div>
               <b>  ?????????? ?????????????? ???????????? ???????? ????</b>
               <p>???????? ?????????? ???????? ?? ???? ?????? ?? ?????? ???????? ?????? ???? ???????? ?????????? ?????????????? ?????? ???????? ???????? !</p>
               <p>

               </p>

                <input onChange={(e) => setMeliCode(e.target.value)} placeholder="???? ?????? " />
                 <input onChange={(e) => setNumber(e.target.value)} placeholder=" ???????? ??????????" />
              <div id="sign-family">
                <div id="password">
                <input  type={seePassword ? "text" : "password"} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="?????? ???????? " /> 
                <img style={seePassword ? {opacity:"1"}:null} src={'/uploads/view.png'} onClick={() => setSeePassword(prev => !prev)} />
                </div>
                <div id="password">
                <input type={seePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="?????????? ?????? ????????  " /> 
                </div>
              </div>
                <ReCAPTCHA 
                 style={{zIndex:"30",opacity:"0"}}
                 size="invisible"
                 sitekey={json}
                 ref={reRef}
                 />
                <button disabled={loading} onClick={post}>?????????? ??????????????</button>
                <div className="Auth-err">{err && <p>{err.errMessage}</p>}</div>
               </div>
            </form>
        </div>
    )
}

export default index