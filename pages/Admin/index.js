import React from 'react';
import dash from './images/dashboard.png';
import art from './images/article.png';
import form from './images/project.png';
import mess from './images/love.png';
import seo from './images/seo-report.png';
import coin from './images/coin.png';
import Image from 'next/image';
import { useState ,useEffect ,useRef ,useContext } from 'react';
import Products from './routes/products';
import Article from './routes/article';
import Dashboard from './routes/dashboard';
import axios from 'axios';
import Exclusive from './routes/exclusive';
import Question from './routes/questions';
import Seo from './routes/seo';
import EditArticle from './routes/editArticle';
import EditProduct from './routes/editProducts';
import Messages from './routes/messages/Messages';
import Sells from './routes/sells/sells';
import Panel from './routes/panel/panel';
import Head from "next/head";
import Users from './routes/users/users';
import Laws from './routes/Laws';
import Links from './routes/Links/Links';
import context from '../../helpers/context/authContext'
import TopMenu from './components/topMenu/TopMenu';

export async function getServerSideProps(context) {


    if(!context.req.cookies.Admin){
      return {
        redirect: {
          permanent: false,
          destination: "/404"
        }
      }
    }
  
      const loggedIn = await fetch("https://dreamwebbackend.herokuapp.com/auth/loggedIn",{
        credentials: "include",
        headers:{
          cookie:context.req.cookies.Admin
        }
        
      });
      const logged = await loggedIn.json();
      if(!logged||
        logged === false ||
        logged === undefined || 
        logged === null
        ){
        return {
          redirect: {
            permanent: false,
            destination: "/404"
          }
        }
      }

    return {
       props: {logged:logged}
    }
  }

const index = ({logged}) => {

    const [active ,setActive] = useState("dashboard");
    const [route ,setRoute ] = useState("none");
    const [images ,setImages] = useState('');
    const [namad ,setNamad] = useState(null);
    const [info ,setInfo] = useState(null);
    const [openMenu ,setOpenMenu] = useState(false);
    const [loading ,setLoading] = useState(false);
    const [size, setSize] = useState(0);
    const {Api} = useContext(context);

    useEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    },[])
  
let mobile = false
    if( size < 800 ){
        mobile = true   
}
    useEffect(() => {
       const getInformation = async () => {
       await axios.get(`${Api}/adminRoute/info`,{withCredentials:true}).then(res => {
           setInfo(res.data)
    })
   };
   getInformation()
   },[]);


    const uploadImages = async (e) => {
        e.preventDefault();
        setLoading(true)
         try{      
            const formData = new FormData();
    
            formData.append("image" , images);
            
            await axios.post(`${Api}/adminRoute/articleImage` , formData ,{withCredentials:true} ).then(res => {
                alert(res.data)
                setLoading(false)
            } )
        }catch(err){
      } 
    }
 const uploadsNamad = async (e) => {
  e.preventDefault();
  setLoading(false);
  try{      
    const formData = new FormData();

    formData.append("image" , images);
    
    await axios.post(`${Api}/adminRoute/namad` , formData ,{withCredentials:true} ).then(res => {
        alert(res.data);
        setLoading(false);
    } )
}catch(err){
} 
 }


 let menu = ["menu"];
 if(openMenu){
   menu = ['open-menu',"menu"]
 }

    return (
        <div className="admin">
          <Head>
            <title>به پنل ادمین خوش آمدید !</title>
          </Head>
          {openMenu === false && <div onClick={() => setOpenMenu(prev => !prev)} id="admin-back">hello</div>}
          <TopMenu Api={Api} setOpenMenu={setOpenMenu} logged={logged} url={active} setActive={setActive} />
            <div className={menu.join(' ')}>

               <img src="/images/dreamWeb.png" alt="" id="AdminLogo" />

            <ul>
            <li onClick={() => setActive("dashboard")} >          
                <div><div><Image src={dash} width={20} height={20} /> <p>داشبورد</p></div> </div>
                
            </li>
            {logged.find[0].roll === "master" && 
            <li style={active === "projects"?{height:"150px",transition:"0.5s ease",background:"ghostwhite"}:null}  >          
                <div>
                  <div onClick={() => active === "projects" ? setActive("dashboard") :setActive("projects")}>
                    <Image width={20} height={20} src={form} /><p>پروژه ها</p>
                  </div> 
                </div>
                <ul style={active !== "projects"?{display:"none"}:null}>
                    <li onClick={() => setRoute("new-projects")}>پروژه جدید</li>
                    <li onClick={() => setRoute("edit-projects")}> ویرایش پروژه ها</li>
                </ul>
            </li>}
            { logged.find[0].roll === "poster" && <li style={active === "projects"?{height:"150px",transition:"0.5s ease",background:"ghostwhite"}:null}     >          
                <div><div onClick={() => active === "projects" ? setActive("dashboard") :setActive("projects")}><Image width={20} height={20} src={form} /><p>پروژه ها</p></div> </div>
                {active === "projects" && <ul>
                    <li onClick={() => setRoute("new-projects")}>پروژه جدید</li>
                    <li onClick={() => setRoute("edit-projects")}> ویرایش پروژه ها</li>
                </ul>}
            </li>}
            {logged.find[0].roll === "master" && <li onClick={() => active === "sells"? setActive("dashboard"):setActive("sells")} >          
                <div><div><Image width={20} height={20} src={coin} /><p>فروش ها</p></div></div>  
            </li>
            }
            {logged.find[0].roll === "master" && <li style={active === "articles"?{height:"160px",transition:"0.5s ease" ,background:"ghostwhite"}:null} >          
                <div><div onClick={() => active === "articles" ? setActive("dashboard") :setActive("articles")}><Image width={20} height={20} src={art} /><p>مقالات</p> </div></div>
                {active === "articles" && <ul>
                    <li onClick={() => setRoute("new-Article")}>مقاله جدید</li>
                    <li onClick={() => setRoute("edit-Article")}> ویرایش مقالات </li>
                </ul>}
            </li>
          }
          {logged.find[0].roll === "poster" && <li style={active === "articles"?{height:"200px",transition:"0.5s ease",background:"ghostwhite"}:null}   >          
                <div><div onClick={() => active === "articles" ? setActive("dashboard") :setActive("articles")}><Image width={20} height={20} src={art} /><p>مقالات</p> </div>
                </div>
                {active === "articles" && <ul>
                    <li onClick={() => setRoute("new-Article")}>مقاله جدید</li>
                    <li onClick={() => setRoute("edit-Article")}> ویرایش مقالات </li>
                </ul>}
            </li>}
            {logged.find[0].roll === "master" &&  <li style={active === "seo"?{height:"200px" ,transition:"0.5s ease",background:"ghostwhite"}:null} >          
                <div><div onClick={() => active === "seo" ? setActive("dashboard") :setActive("seo")}><Image width={20} height={20} src={seo} /><p>سئو</p></div>
                </div>
                {active === "seo" && <ul>
                    <li onClick={() => setRoute("new-seo")}> سئو جدید</li>
                    <li onClick={() => setRoute("edit-seo")}> ویرایش سئو </li>
                    <li onClick={() => setRoute("seo-service")}> سرویس هاس فروش </li>
                </ul>}
            </li>
}
{logged.find[0].roll === "ceo" &&  <li style={active === "seo"?{height:"200px",transition:"0.5s ease",background:"ghostwhite"}:null}   >          
                <div><div onClick={() => active === "seo" ? setActive("dashboard") :setActive("seo")}><Image width={20} height={20} src={seo} /><p>سئو</p></div>
                </div>
                {active === "seo" && <ul>
                    <li onClick={() => setRoute("new-seo")}> سئو جدید</li>
                    <li onClick={() => setRoute("edit-seo")}> ویرایش سئو </li>
                    <li onClick={() => setRoute("seo-service")}> سرویس هاس فروش </li>
                </ul>}
            </li>}
            {logged.find[0].roll === "master" && <li style={active === "messages"?{height:"200px",transition:"0.5s ease",background:"ghostwhite"}:null}   >          
                <div><div onClick={() => active === "messages" ? setActive("dashboard") :setActive("messages")} ><Image width={20} height={20} src={mess} /><p>پیام ها</p> </div>
                </div>
                {active === "messages" && <ul>
                 <li onClick={() => setRoute("send-exclusive")}> درخواست وبسایت اختصاصی</li> 
                    <li onClick={() => setRoute("send-consulting")}> درخواست مشاوره </li>
                    <li onClick={() => setRoute("contact-us")}> ارتباط با ما </li>
                </ul>
                   }
            </li>
          }
          <hr style={{width:"90%" , color:"silver" ,opacity:"0.6" ,height:"1px",position:"absolute" ,right:"5%"}} />
            {logged.find[0].roll === "master" && <li style={{marginTop:"30px"}}  onClick={() => active === "exclusive"? setActive("dashboard"): setActive("exclusive")}>          
                <div style={{justifyContent:"flex-start"}}><p style={{marginRight:"20px"}}>فرم اختصاصی</p></div>
            </li>
            }
            {logged.find[0].roll === "master" && <li  onClick={() => active === "question"? setActive("dashboard"): setActive("questions")}>          
                <div style={{justifyContent:"flex-start"}}><p style={{marginRight:"20px"}}> سوالات متداول</p></div>
            </li>
            }
            {logged.find[0].roll === "master" && <li  onClick={() => active === "upload-image"? setActive("dashboard"):setActive("upload-image")}>          
                <div style={{justifyContent:"flex-start"}}><p style={{marginRight:"20px"}}> گالری تصاویر</p></div>
            </li>
            }
            {logged.find[0].roll === "master" && <li  onClick={() => active === "namad"? setActive("dashbord"):setActive("namad")}>          
                <div style={{justifyContent:"flex-start"}}><p style={{marginRight:"20px"}}> نماد های سایت</p></div>
            </li>
            }
            {logged.find[0].roll === "master" && <li  onClick={() => active === "users"? setActive("dashbord"):setActive("users")}>          
                <div style={{justifyContent:"flex-start"}}><p style={{marginRight:"20px"}}> کاربران </p></div>
            </li>
            }
            {logged.find[0].roll === "master" && <li  onClick={() => active === "laws"? setActive("dashbord"):setActive("laws")}>          
                <div style={{justifyContent:"flex-start"}}><p style={{marginRight:"20px"}}> قوانین </p></div>
            </li>
            }
            {logged.find[0].roll === "master" && <li  onClick={() => active === "Links"? setActive("dashbord"):setActive("Links")}>          
                <div style={{justifyContent:"flex-start"}}><p style={{marginRight:"20px"}}> لینک ها </p></div>
            </li>
            }
            </ul>

        </div>
           <div className="Admin-rout" style={active === "dashboard" ? {backgroundColor:"white"}:null}>
             {active === "projects" && route === "new-projects" && <Products />}
             {active === "projects" && route === "edit-projects" && <EditProduct />}
             {active === "articles" && route === "new-Article" && <Article />}
             {active === "Links" && <Links />}
             {active === "articles" && route === "edit-Article" && <EditArticle />}
             {active === "upload-image" && 
              <div className="products" style={{flexFlow:"column",alignItems:"center"}}>
                <form  encType="multipart/form-data">
                 <input placeholder="تصویر" type='file' filename="image" onChange={(e) => setImages(e.target.files[0])} />
                 <button disabled={loading} onClick={uploadImages} >
                   {loading && <div style={{height:"30px" ,width:"30px",top:"25%"}} className='loading-spinner'></div>}
                   ارسال عکس
                  </button>
                </form>
              </div>}
             {active === "messages" && <Messages route={route} />}
             {active === "users" && <Users info={info.allUsers} />}
             {active === "dashboard" && <Dashboard sells={info && info.sells} info={info} setActive={setActive} setRoute={setRoute} />}
             {active === "projects" && !route && <Dashboard sells={info && info.sells} info={info} setActive={setActive} setRoute={setRoute} />}
             {active === "articles" &&  !route  && <Dashboard sells={info && info.sells} info={info} setActive={setActive} setRoute={setRoute}  />}
             {active === "seo" && !route && <Dashboard sells={info && info.sells} info={info} setActive={setActive} setRoute={setRoute}  />}
             {active === "messages" && !route && <Dashboard sells={info && info.sells} info={info} setActive={setActive} setRoute={setRoute} />}
             {active === "exclusive" && <Exclusive />}
             {active === "questions" && <Question />}
             {active === "seo" && <Seo Seoroute={route} info={info && info.allSeo} />}
             {active === "laws" && <Laws info={info && info.laws.length > 0 && info.laws[0].text} />}
             {active === "sells" && <Sells sells={info && info.sells} />}
             {active === "panel" && <Panel info={logged} />}
             {active === 'namad' && <div className="products">
               <form encType="multipart/form-data">
               <input placeholder="تصویر" type='file' filename="image" onChange={(e) => setImages(e.target.files[0])} />
               <button disabled={loading} onClick={uploadsNamad} >
                 {loading && <div style={{height:"30px" ,width:"30px",top:"25%"}} className='loading-spinner'></div>}ارسال عکس ها
                </button>
               </form>
               </div>}
               {active === "namad" && <div style={{width:"80%",margin:"50px auto" ,display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
               {namad && namad.map(res => {
                 return <div key={res._id} style={{width:"200px" ,display:"flex" ,flexFlow:"column" ,justifyContent:"center",borderRadius:"10px", boxShadow:"0px 2px 8px rgba(0,0,0,0.1) , 0px 0px 15px rgba(0,0,0,0.1)"}}>
                   <img style={{width:"100%",height:"200px",borderRadius:"10px"}} src={`/uploads/${res.image}`} />
                   <button style={{background:"red" ,color:"white",borderRadius:"10px"}}>Delete</button>
                 </div>  
               }) 
               }</div>}
           </div>
        </div>
    )
}

export default index
