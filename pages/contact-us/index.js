import Navbar from "../../components/navbar/navbar";
import Footer from '../../components/footer/footer';
import {useContext, useRef, useState ,useEffect} from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import context from '../../helpers/context/authContext'
import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps() {


//   const json = process.env.INVIS_CAPTCHA || null
const json = "6LfMd88dAAAAANh6pGI5JNg-q4m3gkwi8BlYKmHo"
  const resSeo = await fetch('https://dreamweb0fardin.herokuapp.com/allRoutes/Seo/contact');
  const jsonSeo = await resSeo.json();

  const getLinks = await fetch(`https://dreamweb0fardin.herokuapp.com/allRoutes/Links`);
  const links = await getLinks.json()


  return {
    props:{
      json,
      jsonSeo,
      links
    },
    revalidate:1
  };

}

const index = ({json ,jsonSeo ,links}) => {

    const {find ,Api} = useContext(context);
    const [name ,setName] = useState(find.username?find:"")
    const [des ,setDes] = useState()
    const [message ,setMessage] = useState()
    const [email ,setEmail] = useState(find.email?find:"")
    const [err ,setErr] = useState({err:"null"})
    const [loading ,setLoading] = useState(false);
    const [Message ,setEMessage] = useState(null);
    const reRef = useRef('');
    

    const post = async (e) => {
        e.preventDefault();
        setLoading(true);
        const captcha = await reRef.current.executeAsync();
        reRef.current.reset();
        const ex = {email ,message ,name ,des ,captcha};
        try {
            const response = await fetch(`/api/allRoutes/contact` , {
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                  'Content-Type':'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(ex) 
              });
              response.json().then(res => {
                if(res.errMessage){
                    setErr(res)
                    setLoading(false)
                }
                setEMessage(res.Message)
                setLoading(false)
            });

           
                
            
        }catch(err){
 
        }
  
    }


    let commentCss= [""]

    if(find.username){
        commentCss = ['fullComment']
    }

    return (
        <div className="layout">
<Head>
   <link rel="icon" href="/art.png" />
    <title>{jsonSeo && jsonSeo[0].title}</title>
    <meta name="description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="keywords" content={jsonSeo && jsonSeo[0].keywords} />
    <meta property="og:site_name" content="دریم وب"/>
    <meta property="og:title" content={jsonSeo && jsonSeo[0].title} />
    <meta property="og:description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={jsonSeo && jsonSeo[0].ogUrl} />
    <meta name="og:type" content={jsonSeo && jsonSeo[0].ogType}/>
    <meta property="og:locale" content="Fa_IR" /> 
</Head>
         
            <Navbar />
            <div className="contact-us">
            <div>
                <div>
                <img src="/uploads/blackGmail.png" />
                <h1>پست الکترونیک</h1> 
                <p>{links && links.email}</p>       
                </div>
                <div style={{marginTop:"10px"}}>
                <img style={{marginRight:"1.6%" ,height:"32px",width:"27px"}} src="/uploads/bPhone.png" />
                <h1> مشاوره و خرید</h1> 
                <p>{links && links.phone}</p>       
                </div>
                <div id="socials">
                     <a href={links && links.telegram} style={{background:"linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%)"}}>
                         <img style={{marginTop:"10%",width:"52px",height:"52px"}} src="/uploads/telegram.png" alt="telegram logo" />
                         <h1 style={{position:"relative" ,top:"13px"}}>تلگرام ما</h1>
                     </a>
                     <a href={links && links.instagram}>
                         <img src="/uploads/insta.png" alt="instagram logo" />
                         <h1>اینستاگرام ما</h1>
                     </a>
                     <a href={links && links.telegram} style={{background:"#30d6ec"}}>
                         <Image prefix width={100} height={120} quality={10} src="/images/twitter.png" alt="twitter logo" />
                         <h1 style={{position:"relative" ,top:"0px"}}> توییتر ما</h1>
                     </a>
                </div>
            </div>
              <form className={err.err === "all" ? "err": null} >
              <img src="/images/mess.png" alt=""/><h1>پیام بگذارید</h1>
                 <input className={commentCss} value={find?find.username:null} style={err.err === "name" ? {border:"1px solid red",boxShadow:" 0px 2px 8px rgba(231, 13, 13, 0.1) , 0px 0px 15px rgba(197, 75, 75, 0.1)"}: null} onChange={(e) => setName(e.target.value)} placeholder="نام شما ..." />
                 <input className={commentCss} value={find?find.email:null} style={err.err === "email" ? {border:"1px solid red",boxShadow:" 0px 2px 8px rgba(231, 13, 13, 0.1) , 0px 0px 15px rgba(197, 75, 75, 0.1)"}: null}  onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل شما ..." />
                 <input onChange={(e) => setDes(e.target.value)} style={{width:"85%"}} placeholder="موضوع پیام ..." />
                 <textarea  onChange={(e) => setMessage(e.target.value)} placeholder="پیغام شما ..." />
                 <button disabled={loading} onClick={post}> {loading && <div style={{height:"20px" ,width:"20px",top:"25%"}} className='loading-spinner'></div>} ارسال دیدگاه </button>
                 {Message && <p style={{color:"green"}}>{Message}</p> || err.errMessage && <p>{err.errMessage}</p> || <p></p>}
                 <ReCAPTCHA 
                 style={{zIndex:"30",opacity:"0",display:"none"}}
                 size="invisible"
                 sitekey={json}
                 ref={reRef}
                 />
              </form>

            </div>
            <Footer />
        </div>
    )
}

export default index
