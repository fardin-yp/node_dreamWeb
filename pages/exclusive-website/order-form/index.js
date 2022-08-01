import Head from 'next/head';
import React, { useState ,useEffect ,useContext } from 'react';
import Footer from '../../../components/footer/footer';
import context from "../../../helpers/context/authContext"
import axios from 'axios';
import Navbar from '../../../components/navbar/navbar';

export async function getServerSideProps(context) {

    const loggedIn = await fetch('https://dreamwebbackend.herokuapp.com/allRoutes/exclusiveForm',{method:'GET'});
    const logged = await loggedIn.json();
    const merchant = "d164f627-0400-4dc5-8da5-bc166ee30553";

    const usersloggedIn = await fetch("https://dreamwebbackend.herokuapp.com/authentication/find",{
        credentials: "include",
        headers:{
          cookie:context.req.cookies.token
        }
        
      });

      const user = await usersloggedIn.json();
  
    return {
       props: {
           posts:logged,
           merchant,
           user
        }
    }
  }  

const index =  ({posts ,merchant ,user}) => {

    const [order ,setOrder] = useState([]);
    const [totalCart ,setTotalCart] = useState(0);
    const [reset ,setReset] = useState(false);
    const [category ,setCategory] = useState('');
    const [factor ,setFactore] = useState(false);
    const [PAy ,seTpay] = useState(false);
    const [ rialsPay ,setrialsPay] = useState("");
    const [description ,setDescription] = useState("");
    const {Api} = useContext(context);
    const [err ,setErr] = useState(false);
    const [read ,setRead ] = useState(false);
    const [laws ,setLaws] = useState("");
    const [agree ,setAgree] = useState(false);
    const [required ,setRequired] = useState([]);
    const [filter ,setFilter] = useState([]);
    const [Auth ,setAuth] = useState(false);

    const find = () => {
        setRequired(posts && posts[0].form.filter(res => res.required === true) )
      }

    const law = async () => {
        await axios.get(`${Api}/allRoutes/laws`,{withCredentials:true}).then(res => {
        if(res.data.lenght > 0){
          setLaws(res.data[0].text);
        }
        })
       }
       useEffect(() => {
           law();
           find()
       },[])


    const pushOrder = (object) => {

    setReset(false)
    const exist = order.find(res => res.title === object.title)

    if(exist){
         setOrder(order.filter(item => item.title !== object.title))
    }

    if(!exist){
        setOrder([...order ,object])
        if(filter && filter[0]?.title === object.title){
            setErr(false)
        }
     }
    }
const TotalPrice = () => {
    const total = order.reduce((sum, {price} ) => Number(sum) + Number(price) ,0)
    setTotalCart(total);
    setrialsPay(total && total + "0");
  }
  useEffect(() => {
    TotalPrice()
    setFactore(true);
    setFilter(required.filter(x => !order.includes(x)))
  },[order]);

  const checked = order.map(res => res.title);

  useEffect(() => {
      if(reset === true){
          setOrder([]);
          setCategory("")
      }
  },[reset]);

  useEffect(() => {

if(category.length > 0) {
    const filterCategory = posts && posts[0].form.filter(res => {
        return (
            res.categoryFirst.includes(category) ||
            res.categorySecond.includes(category) ||
            res.categoryThird.includes(category) 
        )
     })
 
     setOrder(filterCategory)
}
},[category]);

const paying = async (e) => {

    e.preventDefault();

    if(!user.username){
      return setAuth(true)
    }

    if(filter.length > 0){
        return setErr({errMessage:`انتخاب ${filter[0]?.title} الزامی است !`})
    }

    if(order.length === 0){
        return setErr({errMessage:"شما هیچ موردی را از جدول انتخاب نکرده اید !"})
    }
     if(agree === false){
        return setErr({errMessage:"لطفا قوانین وبسایت را تایید کنید !"})
    }

    if(order.length > 0 && agree === true && filter.length <= 0){
 
   const Post = 
   {
    object:{order}
   ,category:"exclusive"
   ,email:user.email
   ,des:description 
   ,amount:parseInt(rialsPay/2) 
   ,description:`خرید وبسایت اختصاصی خانم/آقای ${user.username} ${user.number[0].family}` 
   ,callback_url:`http://localhost:3000/order/buyComplete/${rialsPay/2}/`
   ,merchant_id:merchant
   }
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

 }

    return (
<div>
<Head>
   <link rel="icon" href="/art.png" />
    <title>سفارش سایت اختصاصی -dreamWeb</title>
    {/* <meta name="description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="keywords" content={jsonSeo && jsonSeo[0].keywords} />
    <meta property="og:site_name" content="دریم وب"/>
    <meta property="og:title" content={jsonSeo && jsonSeo[0].title} />
    <meta property="og:description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={jsonSeo && jsonSeo[0].ogUrl} />
    <meta name="og:type" content={jsonSeo && jsonSeo[0].ogType}/> */}
    <meta property="og:locale" content="Fa_IR" /> 
  </Head>
  {read === true && <div onClick={() => setRead(false)} id="backDrop">hello</div>}
              {read && <div className="law">
              <img onClick={() => setRead(false)} src="/images/cancel (1).png" alt=""/>
              {laws && <div dangerouslySetInnerHTML={{__html: laws}} />}
            </div>}
        <Navbar />
        {Auth && <div style={{zIndex:"1"}} onClick={() => setAuth(null)} id="backDrop">hello</div>}
        {Auth && 
            <div className="secc-comment" style={{zIndex:"151"}}>
              <img src={'/uploads/warning.png'} alt="" />
              <h1>لطفا برای خرید سایت اختصاصی خود وارد اکانت خود شوید !!</h1>
          <div>
               <a href="/Auth/Login" ><button style={{width:"120px",padding:"10px",margin:"5px",background:"#3f51b5"}}> ورود به اکانت</button></a> 
               <a href="/Auth/SignUp"><button style={{width:"120px" ,padding:"10px",margin:"5px",background:"#4caf50"}}>ثبت نام</button></a> 
            </div>
          </div>}
            <div className="order-ex">
            {PAy === true && <div onClick={() => seTpay(false)} id="backDrop">hello</div>}

                <form>
                    <div className="header-ex">
                    <h1> <img src="/images/dreamWeb.png" alt="dreamWeb Logo" /> سفارش سایت اختصاصی  دریم وب </h1>
                      <p>  در جدول زیر  شما میتوانید تمامی ویژگی ها و امکانات وبسایت خود را انتخاب نموده و هزینه آن به صورت آنلاین محاسبه میگردد .</p>
                      <p>تمامی وبسایت های اختصاصی در دریم وب به صورت 0 تا 100 توسط تیم دریم وب طراحی و ساخته میشوند و به همین دلیل کاملا قابل میتوانند دارای ویژگی های جدید و اختصاصی با توجه به ایده های کارفرما باشند .</p>
                    </div>

                  <div className="head-order">

                      <fieldset>
                      <legend>انتخاب خودکار ویژگی ها جهت سایت های زیر</legend>
                          <a href="#">
                          <input type="radio" checked={reset}  onClick={() => setReset(true)} /><p>ریست</p>
                          </a>
                          <a href="#">
                          <input type="radio" checked={category === "base"} onClick={() => setCategory("base")} /><p>پایه اختصاصی</p>
                          </a>
                          <a href="#">
                          <input type="radio" checked={category === "shop"} onClick={() => setCategory("shop")} /><p>سایت اختصاصی فروشگاهی</p>
                          </a>
                          <a href="#">
                          <input type="radio" checked={category === "company"} onClick={() => setCategory("company")} /><p>سایت اختصاصی شرکتی</p>
                          </a>
                      </fieldset>
                  </div>
                <table>
                      <thead >
                          <th style={{width:"10%"}}>
                              <a href="#">انتخاب</a>
                          </th>
                          <th style={{width:"20%"}}>
                              <a href="#">نام ویژگی</a>
                          </th>
                          <th style={{width:"45%"}}>
                              <a href="#">معرفی</a>
                          </th>
                          <th style={{width:"10%"}}>
                              <a href="#">نوع</a>
                          </th>
                          <th style={{width:"15%"}}>
                              <a href="#">قیمت (تومان)</a>
                          </th>
                      </thead>

                     <tbody >
                     {posts && posts[0].form.map(res => {
                             return <tr style={checked.includes(res.title)? {background:"#b39cdb"}:null} onClick={() => pushOrder(res)} className="tr-news">
                             <td>
                                 <input style={{cursor:"pointer"}} type="checkbox" checked={checked.includes(res.title)} />
                             </td>
                             <td>
                                 <a>{res.title}</a>
                             </td>
                             <td >
                                 <a>{res.des}</a>
                             </td>
                             <td >
                                 <a>{res.type}</a>
                             </td>
                             <td >
                                 <a>{res.price}</a>
                             </td>
                         </tr>
                         })}
                      </tbody> 
                      <tfoot></tfoot>
                     </table>
                     <div className="header-ex">
                     <textarea onChange={(e) => setDescription(e.target.value)} placeholder="توضیحات اضافی ..." />
                     </div>
                    <div className="Pay-ex">                     
                     <p style={{color:"red"}}>شرایط پرداخت قرارداد سایت اختصاصی دریم وب :</p>
                     <p style={{color:"red"}}>1:پرداخت 50% از مبلغ کل قرارداد به عنوان پیش پرداخت </p>
                     <p style={{color:"red"}}>2:پرداخت 50% از مبلغ کل قرارداد پس از تحویل طرح کد نویسی شده </p>
                     <p style={{color:"green"}}>پس از خرید تا 24 ساعت آینده برای شروع مراحل ساخت سایت شما با شما تماس خواهیم گرفت و قرارداد شما ارسال میشود!</p>
                     <div onClick={() => setAgree(prev => !prev)} style={{width:"99%" ,display:"flex",margin:"10px 0px"}}>
                      <input checked={agree} type="checkbox" />
                      <p>قوانین وبسایت را مطالعه کردم و با آن موافقم .<b style={{cursor:"pointer",color:"blueviolet",pointerEvents:"all"}} onClick={() => setRead(true)}>قوانین وبسایت</b></p>
                    </div>
                    </div>
                <div className="payment" style={{padding:"10px",marginTop:"20px"}}>
                    <p style={{margin:"20px 0px"}}>مبلغ قابل پرداخت : {totalCart/2} تومان </p>
                </div>
                <button onClick={paying} >پرداخت آنلاین</button>

                </form>
                {factor && totalCart > 0 &&  < div className="factor-ex">
                    <b>قیمت کل : {totalCart} تومان</b>
                    <b> قابل پرداخت : {totalCart/2} تومان</b>
                    <b> تعداد آیتم های انتخابی : {order.length}</b>
                    <img onClick={() => setFactore(false)} src={"/images/cancel (1).png"} />
                </div>}
                {err && totalCart <= 0 && < div style={{width:"20%" ,height:"100px"}} className="factor-ex">
                        <b style={{marginTop:"5px",fontSize:"13px" ,width:"100%"}}>{err.errMessage}</b>
                    <img style={{marginTop:"5px"}} onClick={() => setErr(false)} src={"/images/cancel (1).png"} />
                </div>}

                {err && !agree && < div style={totalCart > 0 ? {width:"max-content" ,height:"100px",top:"63%"}:{width:"20%" ,height:"100px"}} className="factor-ex">
                        <b style={{marginTop:"5px",fontSize:"13px" ,width:"100%"}}>{err.errMessage}</b>
                    <img style={{marginTop:"5px"}} onClick={() => setErr(false)} src={"/images/cancel (1).png"} />
                </div>}

                {err && agree && < div style={totalCart > 0 ? {width:"max-content" ,height:"100px",top:"63%"}:{width:"20%" ,height:"100px"}} className="factor-ex">
                        <b style={{marginTop:"5px",fontSize:"13px" ,width:"100%"}}>{err.errMessage}</b>
                    <img style={{marginTop:"5px"}} onClick={() => setErr(false)} src={"/images/cancel (1).png"} />
                </div>}
                

            </div>


    
            <Footer />
        </div>
    )
}

export default index
