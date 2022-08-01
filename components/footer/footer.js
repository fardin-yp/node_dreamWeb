import { useState ,useEffect, useContext } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Back from './BackGround.png';
import Black from './NO.png';
import context from "../../helpers/context/authContext"

const Footer = () => {

    const [namad ,setNamad] = useState(null);
    const [links ,setLinks] = useState(null);
    const {Api} = useContext(context)

useEffect(() => {
  const getNamad = async () => {
      await axios.get(`${Api}/allRoutes/namad`,{withCredentials:true}).then(res => {
           setNamad(res.data)
       })
  }
   getNamad();
},[]);

useEffect(() => {
    const getLinks = async () => {
        await axios.get(`${Api}/allRoutes/Links`,{withCredentials:true}).then(res => {
            setLinks(res.data)
         })
    }
    getLinks();
  },[]);

    return (
        <footer className="footer">
            <div className="about">
                <Image id="back-image" src={Back} alt="" layout={"fill"}  />
                <div className="about-us">
                  <h1>درباره ما</h1>
                  <p>  تیم دریم وب فعایت خود را از سال 1397 شروع کرده،با دارا بودن بهترین افراد در زمینه های طراحی و توسعه وب در میان رقبا حرفی برای گفتن داریم که با تلاش مضاعف قصد بالا بردن سطح خدمات و پیشبرد اهداف شما مشتریان عزیز  را داریم.</p>
                </div>
                <div className="namad">
                {namad && namad.slice(0,2).map(res => {
                 return <img src={`/uploads/${res.image}`} alt={res.image} />
               }) 
               }
                </div>
            </div>
        <div className="top-footer">
        <Image id="back-image" src={Black} alt="" layout={"fill"}  />
           <div className="top-con">
            <div style={{alignItems:"center"}}><img src="/uploads/seo2 (2).png" alt="seo" />خرید وبسایت:</div>
                <a href="/shop-website" >خرید سایت فروشگاهی</a>
                <a href="/news-website" >خرید سایت خبری</a>
                <a href="/company-website" >خرید سایت شرکتی</a>
                <a href="/Real-Estate-website" >خرید سایت املاک</a>
                <a href="/personal-website" >خرید سایت شخصی</a>
                <a href="/medical-website" >خرید سایت پزشکی</a>
                <a href="/resturant-website" >خرید سایت رستوران</a>
            </div>

              <div className="top-con">
                  <div> <img src="/uploads/service.png" alt="" /> لینک های دیگر : </div>
                    <a href="/Seo">خدمات سئو</a>
                    <a href="/exclusive-website">خرید سایت اختصاصی</a>
                    <a href="/exclusive-website/request">درخواست طراحی سایت</a>
                    <a href="/articles"> آموزش ها و مقالات</a>
                    <a href="/contact-us"> ارتباط با ما</a>
              </div>

              <div className="top-con">
                  <div> <img src="/uploads/contact.png" alt=""  /> ارتباط با ما:</div>
                     <p>شما میتوانید نظرات و پیشنهادات خود را به صندوق پستی {links && links.email} ارسال کنید .</p>
                     <p> مشاوره و خرید :  {links && links.phone} </p>
                     <div className="social">
                         <a href={links && links.instagram}><circle><Image height={18} width={18} src='/uploads/telegram.png' alt="telegram logo" /></circle></a>
                         <a href={links && links.telegram}><circle><Image height={100} width={100} src='/uploads/insta.png' alt="instagram logo" /></circle></a>
                         <a href={links && links.twitter}><circle><Image height={20} width={22} src='/uploads/twiter.png' alt="twitter logo" /></circle></a>
                     </div>
              </div>
           </div>
           <div className="bot-footer">
               <p>تمامی حقوق وبسایت محفوظ بوده</p>
           </div>
        </footer>
    )
}

export default Footer
