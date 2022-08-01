import React from 'react'

const NoPost = ({name ,background}) => {
    return (
        <div>
            <div style={{marginBottom:"-300px" ,marginTop:"5px"}} className="err-card">
               <img src="/images/404.gif" alt=""  />
               <p style={{padding:"15px"}}>متاسفانه هیچ وبسایت {name} برای فروش وجود ندارد!!</p>

               <a href="/"  style={{background:background,zIndex:"20"}}>بازگشت به صفحه اصلی</a>

            </div>
        </div>
    )
}

export default NoPost
