import axios from 'axios';
import React from 'react';

const topMenu = ({logged ,url ,Api ,setActive ,setOpenMenu}) => {

    const logOut = async () => {
        await axios.get(`${Api}/auth/logout` ,{withCredentials:true});
        window.location = '/'
      }

   return <div className="top-menu">
    <b style={{cursor:"pointer",pointerEvents:"auto" }}>{url}</b>
    <a onClick={() => setOpenMenu(prev => !prev)} href="#"><img src="/images/menu-button-of-three-horizontal-lines.png" alt="" /></a>
    <label className="backGround"></label>
<div> 
    <p style={{fontSize:"18px",marginLeft:"10px"}}>{logged?.find[0].username}</p>
    <img src="/uploads/user.png" alt=""/>

     <label style={{zIndex:"25"}}>
       <p>welcome</p>
       <button onClick={() => setActive("panel")} >پنل ادمین <img src="/images/user(1).png"  alt="" /></button>
       <button onClick={logOut}>خروج   <img src="/images/run.png"  alt="" /></button>
    </label>
    </div>
    
</div>
}

export default topMenu