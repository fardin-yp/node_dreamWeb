import React,{useState ,useEffect ,useContext} from 'react';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import context from '../../helpers/context/authContext';

export async function getServerSideProps(context){

const usersloggedIn = await fetch("https://dreamwebbackend.herokuapp.com/authentication/find",{
    credentials: "include",
    headers:{
      cookie:context.req.cookies.token
    }
    
  });
 const user = await usersloggedIn.json();

 if(!user || !user.number){
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
    props: {user:user}
 }
}

const index = ({user}) => {

  const [change ,setChange] = useState("");
  const [email ,setEmail] = useState("");
  const [username ,setUserName] = useState("");
  const [number ,setNumber] = useState("");
  const [loading ,setLoading] = useState(false);
  const [error ,setError] = useState("");
  const [select ,setSelect] = useState(null);
  const [meliCode ,setMeliCode] = useState("")
  const {Api} = useContext(context);

  const updateProfile = async (e) => {
    e.preventDefault()
    setLoading(true)
     const post = {email:email?email:user.email ,username:username?username:user.username  ,number:number?number:user.number ,meliCode:meliCode?meliCode:user.meliCode}
     if(change === "email" && !email){
      return setError("لطفا ایمیل خود را وارد کنید !")
     }
     if(change === "number" && !number){
      return setError("لطفا شماره خود را وارد کنید !")
    }
    if(change === "username" && !username){
     return setError("لطفا نام خود را وارد کنید !")
    }
     await axios.put(`${Api}/authentication/editUser/${user.number[0]._id}/${change}`,post,{withCredentials:true}).then(res => {
       if(res.data.errMessage){
        setError(res.data.errMessage)
         setLoading(false)
       }
       if(!res.data.errMessage){
       window.location.reload()
       }
     })
  }

  useEffect(() => {
    setError("");
    setEmail("");
    setNumber("");
    setNumber("");
    setMeliCode("");
  },[change]);

  useEffect(() => {
    setLoading(false)
  },[error]);

    return (
      
        <div style={{background:"#f8f9fb"}}>
        {change === "email" && <div className="change-profile">
         
            <h1>ویرایش ایمیل  <img onClick={() => setChange('')} 
            style={{width:"20px",opacity:"0.7",position:"absolute" ,left:"-10px",top:"0px",cursor:"pointer"}} src="/images/cancel.png" alt="cancel"/>
            </h1>
            <form>
              <div style={{width:"70%"}}>
                <p>ایمیل قبلی :</p>
              <input value={user.email} />
              </div>
              <div style={{width:"70%"}}>
                <p>ایمیل جدید :</p>
              <input style={error ? {border:"1px solid red"}:null} onChange={(e) => setEmail(e.target.value) } />
              </div>
              {error && <p style={{color:"red" ,fontSize:"12px",marginBottom:"-15px",marginTop:"-5px"}}>{error}</p>}
              <button disabled={loading} onClick={updateProfile}>تایید</button>
            </form>
            </div>}
        {change === "username" && <div className="change-profile">
         
         <h1>ویرایش نام کاربری  <img onClick={() => setChange('')} 
         style={{width:"20px",opacity:"0.7",position:"absolute" ,left:"-10px",top:"0px",cursor:"pointer"}} src="/images/cancel.png" alt="cancel"/>
         </h1>
         <form>
           <div style={{width:"70%"}}>
             <p>نام کاربری قبلی :</p>
           <input style={{direction:"rtl"}} value={user.username} />
           </div>
           <div style={{width:"70%"}}>
             <p>نام کاربری جدید :</p>
           <input style={error ? {border:"1px solid red",direction:"rtl"}:{direction:"rtl"}} onChange={(e) => setUserName(e.target.value) } />
           </div>
           {error && <p style={{color:"red" ,fontSize:"12px",marginBottom:"-15px",marginTop:"-5px"}}>{error}</p>}
           <button disabled={loading} onClick={updateProfile}>تایید</button>
         </form>
         </div>}

        {change === "meliCode" && <div className="change-profile">         
         <h1>ویرایش  کدملی  <img onClick={() => setChange('')} 
         style={{width:"20px",opacity:"0.7",position:"absolute" ,left:"-10px",top:"0px",cursor:"pointer"}} src="/images/cancel.png" alt="cancel"/>
         </h1>
         <form>
           <div style={{width:"70%"}}>
             <p> کدملی قبلی :</p>
           <input style={{direction:"rtl"}} value={user.number[0]?.meliCode} />
           </div>
           <div style={{width:"70%"}}>
             <p>کدملی جدید :</p>
           <input style={error ? {border:"1px solid red",direction:"rtl"}:{direction:"rtl"}} onChange={(e) => setMeliCode(e.target.value) } />
           </div>
           {error && <p style={{color:"red" ,fontSize:"12px",marginBottom:"-15px",marginTop:"-5px"}}>{error}</p>}
           <button disabled={loading} onClick={updateProfile}>تایید</button>
         </form>
         </div>}

         {change === "number" && <div className="change-profile">
         
         <h1>ویرایش  تلفن همراه  <img onClick={() => setChange('')} 
         style={{width:"20px",opacity:"0.7",position:"absolute" ,left:"-10px",top:"0px",cursor:"pointer"}} src="/images/cancel.png" alt="cancel"/>
         </h1>
         <form>
           <div style={{width:"70%"}}>
             <p>شماره تلفن قبلی :</p>
           <input style={{direction:"rtl"}} value={user.number[0].number} />
           </div>
           <div style={{width:"70%" ,position:"relative"}}>
             <p>  شماره تلفن جدید:</p>
           <input style={error ?{direction:"rtl",border:"1px solid red"}:{direction:"rtl"}} onChange={(e) => setNumber(e.target.value) } />
           </div>
           {error && <p style={{color:"red" ,fontSize:"12px",marginBottom:"-15px",marginTop:"-5px"}}>{error}</p>}
             <button style={error ? {border:"1px solid red"}:null} disabled={loading} onClick={updateProfile}>تایید</button>
           
         </form>
         </div>}
          {change && <div onClick={() => setChange('')} id="backDrop">hello</div>}
            <Navbar />
             <div className="userProfile">
                 <div className="profileCard">
                    <div className="top-profileCard">
                        <div><img src="/uploads/user.png" /><p>نام کاربری : {user.username}</p></div>
                        <div style={{justifyContent:"flex-end" ,position:"relative"}}>
                            <div id="prof_label" >
                            <button >ویرایش پروفایل</button>
                            <label >
                                <a onClick={() => setChange("email")} href="#"> ایمیل </a>
                                <a onClick={() => setChange("username")} href="#"> نام کاربری</a>
                                <a onClick={() => setChange("number")} href="#"> شماره همراه </a>
                                <a onClick={() => setChange("meliCode")} href="#"> کدملی </a>
                                <a href="/Auth/forget-Password"> رمز عبور </a>
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="bot-profileCard" >
                    <div>
                        <p style={{fontSize:"14px" ,fontWeight:"600"}}>ایمیل:</p>
                     <input value={user?user.email:null} onChange={(e) => setEmail(e.target.value)}  />
                 </div>
                 <div>
                    <p style={{fontSize:"14px" ,fontWeight:"600"}}>نام کاربری:</p>
                    <input value={user?user.username:null}   />
                 </div>
                 <div>
                    <p style={{fontSize:"14px" ,fontWeight:"600"}}>شماره همراه:</p>
                 <input value={user.number[0]?user.number[0].number:null} />
                 </div>
                 <div>
                    <p style={{fontSize:"14px" ,fontWeight:"600"}}>کد ملی:</p>
                 <input value={user.number[0]?user.number[0].meliCode:null} />
                 </div>
                </div>
                   
                 </div>
                 <div className="user-purchases">
                    <label>
                      <p>لیست خرید ها </p>
                      <img src="/images/purchase.png" />
                    </label>
                    <div className="purchase-list">
                      {user && user.purchases.map(res => {
                         return <div onClick={() => setSelect(res)}>
                           <p>{ res.product.post?.name || res.product.json?.title || res?.description}</p>
                           {!res.confirmation && 
                           <p style={{fontSize:"11px" ,opacity:"0.6"}}>
                             در انتظار تایید ..
                          </p>}
                          {res.confirmation === true && 
                           <p style={{fontSize:"11px" ,opacity:"0.6" ,color:"green"}}>
                             تایید شد !
                          </p>}
                         </div>
                      })}
                    </div>
                 </div>

             </div>
            <Footer />
        </div>
    
    )
}

export default index
