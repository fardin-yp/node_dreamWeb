import React,{useState} from 'react';
import Image from 'next/image';

const slider = ({openSlider ,find}) => {

 const [sliderDrop ,setSliderDrop] = useState(false);

    let nav = ['slider']
    if(openSlider === true){
        nav = ['slider' ,'open-slider']
    }

    return (
        <div className={nav.join(' ')}>
            
            <div style={{position:"relative"}} className="slider-top">
            <a href="/" ><Image layout={"fill"} src={"/images/dreamWeb.png"} alt="دریم وب" /></a>
            </div>
            {!find.username && 
                   <div className="slider-login">
                    <a href="/Auth/Login">ورود پنل کاربری</a>
                    <a style={{background:"linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%)"}} href="/Auth/SignUp"> ثبت نام </a>
                   </div>
            }
            <div className="slider-menu">
                <a href="/">خانه</a>
            <a href="#" onClick={() => setSliderDrop(prevState => !prevState)} style={sliderDrop ? {backgroundColor:"#d8e2e3",height:"max-content" ,transition:"0.5s ease"} :null}>
                <img src={'/uploads/black-arrow-down.png'} />
            <a style={{padding:"10px 0px"}}  href="#">خرید سایت </a>
            <div style={sliderDrop? {display:"flex",transition:"0.5s ease",opacity:"1"}:{visibility:"hidden",opacity:"0",height:"0px",transition:"0.1s ease"}}>
                <a href="/shop-website">خرید سایت فروشگاهی</a>
                <a href="/news-website">خرید سایت خبری</a>
                <a href="/company-website">خرید سایت شرکتی</a>
                <a href="/Real-Estate-website">خرید سایت املاک</a>
                <a href="/personal-website">خرید سایت شخصی</a>
                <a href="/medical-website">خرید سایت پزشکی</a>
                <a href="/resturant-website">خرید سایت رستوران</a>
            </div>
            </a>
            <a style={{padding:"6% 5%" }} href="/exclusive-website">سایت اختصاصی</a>
            <a href="/seo">سئو</a>  
            <a href="/articles"> مقالات </a>
            <a href="/contact-us"> تماس با ما </a>
            </div>
        </div>
    )
}

export default slider
