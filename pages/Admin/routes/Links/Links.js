import React,{useContext, useEffect, useState} from 'react';
import axios from 'axios';
import context from '../../../../helpers/context/authContext'


const Users = ({info}) => {

    const [text ,setText] = useState(false);
    const [loading ,setLoading] = useState(false);
    const [email ,setEmail ] = useState("");
    const [instagram ,setInstagram ] = useState("");
    const [telegram ,setTelegram ] = useState("");
    const [phone ,setPhone ] = useState("");
    const [twitter ,setTwitter ] = useState("");
    const {Api} = useContext(context)

    useEffect(() => {
        if(info){
            setText(info)
        }
    },[]);

    const sendLinks = async (e) => {
        e.preventDefault()
        await axios.post(`${Api}/adminRoute/Links`,{withCredentials:true}).then(res => {
            alert(res.data)

         })
        }

    useEffect(() => {
        const getLinks = async () => {
            await axios.get(`${Api}/allRoutes/Links`,{withCredentials:true}).then(res => {
                setEmail(res.data.email);
                setPhone(res.data.phone);
                setInstagram(res.data.instagram);
                setTelegram(res.data.telegram);
                setTwitter(res.data.twitter);
             })
        }
        getLinks();
      },[]);

    return (
        <div className="products" style={{flexFlow:"column" ,justifyContent:"flex-start",alignItems:"center"}}>
            <div style={{height:"max-content",width:"90%" ,background:"#3f51b5",padding:"10px" 
            ,borderRadius:"10px",color:"white"}}>  لینک ها </div>
         <form>
         <label style={{width:"100%",padding:"20px"}}>
            <p>ایمیل سایت</p>
           <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل" />
         </label>
         <label style={{width:"100%",padding:"20px"}}>
            <p> شماره تلفن سایت</p>
           <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="شماره تلفن سایت" />
         </label>
         <label style={{width:"100%",padding:"20px"}}>
            <p> اینستاگرام سایت</p>
           <input value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="اینستاگرام سایت" />
         </label>
         <label style={{width:"100%",padding:"20px"}}>
            <p>تلگرام سایت</p>
           <input value={telegram} onChange={(e) => setTelegram(e.target.value)} placeholder="تلگرام سایت" />
         </label>
         <label style={{width:"100%",padding:"20px"}}>
             <p> توییتر سایت :</p>
           <input value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="توییتر سایت" />
         </label>

         <button disabled={loading} onClick={sendLinks}>ارسال</button>
         </form>
        </div>
    )
}

export default Users;