import axios from 'axios';
import React,{useEffect, useState ,useContext} from 'react';
import context from "../../../helpers/context/authContext"

export async function getServerSideProps(context) {

    const con = context.params.code;
    const merchant = "d164f627-0400-4dc5-8da5-bc166ee30553";
  
    const loggedIn = await fetch(`https://dreamwebbackend.herokuapp.com/allRoutes/fullPost/${con}`,{method:'GET'});
    const logged = await loggedIn.json();

    const usersloggedIn = await fetch("https://dreamwebbackend.herokuapp.com/authentication/find",{
        credentials: "include",
        headers:{
          cookie:context.req.cookies.token
        }
        
      });

      const user = await usersloggedIn.json()

      if(!user||
        !user.username
        ){
        return {
          redirect: {
            permanent: false,
            destination: "/404"
          }
        }
      }

      if(!context.req.cookies.token){
        return {
          redirect: {
            permanent: false,
            destination: "/404"
          }
        }
      }
  
    return {
       props: {post:logged ,user ,merchant}
    }
  }

const index = ({post ,user ,merchant}) => {

    const [username ,setUserName] = useState('');
    const [number ,setNumber] = useState("");
    const [email ,setEmail] = useState("");
    const [agree ,setAgree] = useState("");
    const [err ,setErr] = useState(null);
    const [comDomain ,setcomDomain] = useState(false);
    const [comDomainPrice ,setcomDomainPrice] = useState(290000);
    const [description ,setDescription] = useState("");
    const [read ,setRead ] = useState(false);
    const [laws ,setLaws] = useState("");
    const {Api} = useContext(context);
    const [ rialsPay ,setrialsPay] = useState("");


    const law = async () => {
     await axios.get(`${Api}/allRoutes/laws`,{withCredentials:true}).then(res => {
       setLaws(res.data[0].text)
     })
    }
    useEffect(() => {
      if(user) {
        setUserName(user.username);
        setEmail(user.email);
        setNumber(user.number[0].number);
        law();
        setrialsPay(post && post.price + "0");
      }
    },[]);

    useEffect(() => {

     if(comDomain === true){
     const parse = parseInt(post && post.price + "0")
     setrialsPay(post && parse + comDomainPrice )
     }
     if(comDomain === false){

      setrialsPay(post && post.price + "0")

      }

    },[comDomain]);

    const paying = async (e) => {
       e.preventDefault();
       
      const Post = {object:{post , comDomain},category:"amade",email:user.email, des:description ,amount:parseInt(rialsPay) , description:post.name ,callback_url:`http://localhost:3000/order/buyComplete/${rialsPay}/`,merchant_id:merchant}
       await axios.post(`${Api}/sell/pay` ,Post ,{withCredentials:true})
       .then(res => {
        if(res.data.errMessage){
          setErr(res.data)
        }
        if(!res.data.errMessage){
          localStorage.setItem("object" ,JSON.stringify(res.data))
          window.location = `https://www.zarinpal.com/pg/StartPay/${res.data.post.data.authority}`
        }

      })
    }


 
    return (
        <div className="order-web">
            <h1> سفارش آنلاین وبسایت {post.name}</h1>
            {read === true && <div onClick={() => setRead(false)} id="backDrop">hello</div>}
            {read === true &&             
            <div className="law">
              <img onClick={() => setRead(false)} src="/images/cancel (1).png" alt=""/>
{laws && <div dangerouslySetInnerHTML={{__html: laws}} />}
            </div>}
            <form >
                <input style={{background:"#ddf0ff"}}  placeholder={`نام و نام خانوادگی: `} value={`نام و نام خانوادگی: ${user.username} ${user.number[0].family}`} onChange={(e) => setUserName(e.target.value)} />
                <input style={{background:"#ddf0ff"}} placeholder="شماره همراه" value={`شماره همراه: ${user.number[0].number}`} />
                <input style={{background:"#ddf0ff"}} placeholder={`کد ملی: `} value={`کد ملی: ${user.number[0].meliCode}`} />
                <input style={{background:"#ddf0ff"}} placeholder="ایمیل" value={`ایمیل: ${user.email}`} />  
                <textarea onChange={(e) => setDescription(e.target.value)} style={{fontWeight:"600",width:"92%",marginTop:"15px" ,borderRadius:"5px",border:"1px solid silver",height:"100px"}} placeholder="توضیحات بیشتر ... (دلخواه)" />   
                
                <label>
                    <div style={{width:"99%",margin:"10px 0px"}}>
                      <input type="checkbox" checked={comDomain} onChange={() => setcomDomain(prev => !prev)} /><p>دامنه com سالیانه 290,000 تومان</p></div>
                    <div style={{width:"99%",margin:"10px 0px"}}>
                      <input type="checkbox" />
                      <p>قوانین وبسایت را مطالعه کردم و با آن موافقم .<b style={{cursor:"pointer",pointerEvents:"all"}} onClick={() => setRead(true)}>قوانین وبسایت</b></p>
                    </div>
                </label>
                <div className="payment">
                    <p>مبلغ قابل پرداخت:</p>
                    <p>{rialsPay} ریال </p>
                </div>
                <a href="#" onClick={paying} >پرداخت آنلاین</a>
            </form>
            {err && 
            <div className="secc-comment" style={{zIndex:"151"}}>
              <img src={'/uploads/warning.png'} alt="" />
              <h1>{err.errMessage}</h1>
            <div>
            <button onClick={() => setErr(null)} style={{background:"red"}} >  متوجه شدم !</button>
            </div>
            </div>}
        </div>
    )
}

export default index;
