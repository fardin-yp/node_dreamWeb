import React,{useState ,useEffect ,useContext} from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Head from 'next/head';
import context from "../../helpers/context/authContext";

export async function getStaticProps(context) {

    const res = await fetch('https://dreamwebbackend.herokuapp.com/allRoutes/articles')
    const json = await res.json()

    const resSeo = await fetch('https://dreamwebbackend.herokuapp.com/allRoutes/Seo/seo')
    const jsonSeo = await resSeo.json();

    return {
      props:{
        json,
        jsonSeo,
      },
      revalidate:1
    };
  
  }
const index = ({json ,jsonSeo ,user}) => {

    const [Auth ,setAuth] = useState(false);
    const {find} = useContext(context);

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
        {Auth && <div style={{zIndex:"1"}} onClick={() => setAuth(null)} id="backDrop">hello</div>}
          {Auth && 
            <div className="secc-comment" style={{zIndex:"151"}}>
              <img src={'/uploads/warning.png'} alt="" />
              <h1>لطفا برای خرید وبسایت وارد اکانت خود شوید !!</h1>
          <div>
               <a href="/Auth/Login" ><button style={{width:"120px",padding:"10px",margin:"5px",background:"#3f51b5"}}> ورود به اکانت</button></a> 
               <a href="/Auth/SignUp"><button style={{width:"120px" ,padding:"10px",margin:"5px",background:"#4caf50"}}>ثبت نام</button></a> 
            </div>
          </div>}
            <div className="Seo">
             <div className="about-seo">
                 <div>
                     <h1>سئو چیست؟</h1>
                     <p>سئو برگرفته از عبارت Search Engine Optimization است که کلمات معادلی چون SEO یا بهینه سازی موتور جستجو دارد که همگی آنها به یک معنی می باشند و می توان آن را بصورت زیر تعریف نمود:</p>
                     <p>سئو را مي‌توان مجموعه‌اي از روش‌ها براي تغيير استراتژيک وب سايت‌ها دانست. اين فرآيند به بيان مهمترين عوامل مرتبط صفحه و افزايش اهميت آن در صفحه نتايج جستجو، مي‌پردازد.</p>
                 </div>
                 <img src="/uploads/SSeo.png" alt="" />
             </div>
             <div id="mazaya" className="about-seo">
                 <div >
                     <h1>مزایای سئو</h1>
                     <p>سئو برگرفته از عبارت Search Engine Optimization است که کلمات معادلی چون SEO یا بهینه سازی موتور جستجو دارد که همگی آنها به یک معنی می باشند و می توان آن را بصورت زیر تعریف نمود:</p>
                     <p>سئو را مي‌توان مجموعه‌اي از روش‌ها براي تغيير استراتژيک وب سايت‌ها دانست. اين فرآيند به بيان مهمترين عوامل مرتبط صفحه و افزايش اهميت آن در صفحه نتايج جستجو، مي‌پردازد.</p>
                 </div>
                 <img src="/uploads/Seo2.png" alt="" />
             </div>
             <div style={{marginTop:"55px",marginBottom:"-80px"}} className="head-con">
                     <div className="line" /><h1>مراحل بهینه سازی</h1><div className="line" id="line-2"/>
                </div>
             <div className="seo-steps">

                 <div>
                     <div>    
                         <img src="/uploads/analis.png" alt="" />
                         <h1>آنالیز سایت</h1>
                         <p> آنالیز وب سایت شما و رقبا و ایجاد فاکتور های Google </p>
                     </div>
                     <div>    
                         <img src="/uploads/programming.png" alt="" />
                         <h1>بهینه سازی ساختار </h1>
                         <p> آنالیز وب سایت شما و رقبا و ایجاد فاکتور های Google </p>
                     </div>
                     <div>    
                         <img src="/uploads/statistics.png" alt="" />
                         <h1>تولید محتوای مناسب</h1>
                         <p> آنالیز وب سایت شما و رقبا و ایجاد فاکتور های Google </p>
                     </div>
                     <div>    
                         <img src="/uploads/seo (1).png" alt="seo image" />
                         <h1>خدمات ویژه سئو</h1>
                         <p> آنالیز وب سایت شما و رقبا و ایجاد فاکتور های Google </p>
                     </div>
                 </div>
             </div>
             <div className="seo-plans">
             <div  className="head-con">
                            <h1 style={{color:"black" , fontSize:"28px"}}> خدمات سئو </h1>
                </div>
                <div>
                {json && json.seoService.map(res => {
                  return <div key={res._id}>
                   
                         <div className="seo-head">
                            <h1 style={res.title === 'سرویس خدمات ویژه' ? {color:"#4caf50"}:null}>{res.title}</h1>
                            <b style={{opacity:"0.9"}}>{res.price}</b>
                         
                         <hr />
                        <div>
                         {res.propertys.map(res => {
                         return <p style={{opacity:"0.78",fontWeight:"600"}} key={res}>{res}</p>
                         })}
                        </div>  
                         <a onClick={() => { if(!find.username){setAuth(true)}}} href={find.username ? `/Seo/order/${res._id}`:"#"} style={res.title === 'سرویس خدمات ویژه' ? {backgroundColor:"#4caf50"}:null} >سفارش</a>
                     </div>
                   </div>
                })}
</div>
             </div>

             <div className="sixth-con">
             <div style={{marginTop:"55px",marginBottom:"-10px"}} className="head-con">
                     <div className="line" /><h1>مقالات سئو</h1><div className="line" id="line-2"/>
                </div>
        <div className="maqalat">
    {json.findPost && json.findPost.filter(res => res.title.includes("سئو")).map(res => {
      return<a key={res._id} href={`/articles/${res._id}`}>
      <img src={`/uploads/${res.image}`} alt={res.image} />
      <div>
        <h1>{res.title}</h1>
        <label>
        <div><img src={"/uploads/conversation.png"} alt="comment image" />دیدگاه:{res.comments.length}</div>
        <div><img src={"/uploads/calendar.png"} alt="calendar image" />{res.timestamp}</div>
        </label>
      </div>
  </a>
     
    })}
        </div>
            </div>

            </div>
            <Footer />
        </div>
    )
}

export default index
