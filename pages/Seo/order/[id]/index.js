import {useState ,useEffect ,useContext} from 'react';
import axios from 'axios';
import context from '../../../../helpers/context/authContext';

export async function getServerSideProps(context) {

    const id = context.params.id;
    const res = await fetch(`https://dreamwebbackend.herokuapp.com/allRoutes/SeoService/${id}`)
    const json = await res.json();
    const merchant = "d164f627-0400-4dc5-8da5-bc166ee30553";
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
       props: {json ,user ,merchant}
    }
  }

const index = ({json ,user ,merchant}) => {


    const [read ,setRead ] = useState(false);
    const [laws ,setLaws] = useState("");
    const [description ,setDescription] = useState("");
    const [ rialsPay ,setrialsPay] = useState("");
    const [err ,setErr] = useState(null);
    const {Api} = useContext(context);
    
    const law = async () => {
        await axios.get("https://dreamwebbackend.herokuapp.com/allRoutes/laws",{withCredentials:true}).then(res => {
          setLaws(res.data[0].text)
        })
       }
    useEffect(() => {
        if(user) {
          law()
          setrialsPay(json && json.payPrice + "0")
        }
      },[])

      const paying = async (e) => {
        e.preventDefault();
        
       const Post = {object:{json},email:user.email,category:"seo", des:description ,amount:parseInt(rialsPay) , description:json.title ,callback_url:`http://localhost:3000/order/buyComplete/${rialsPay}/`,merchant_id:merchant}
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
            {read === true && <div onClick={() => setRead(false)} id="backDrop">hello</div>}
            {read === true &&             
            <div className="law">
              <img onClick={() => setRead(false)} src="/images/cancel (1).png" alt=""/>
{laws && <div dangerouslySetInnerHTML={{__html: laws}} />}
            </div>}

            <h1> سفارش آنلاین {json.title}</h1>
            <form>
            <input style={{background:"#ddf0ff"}}  placeholder={`نام و نام خانوادگی: `} value={`نام و نام خانوادگی: ${user.username} ${user.number[0].family}`} onChange={(e) => setUserName(e.target.value)} />
                <input style={{background:"#ddf0ff"}} placeholder="شماره همراه" value={`شماره همراه: ${user.number[0].number}`} />
                <input style={{background:"#ddf0ff"}} placeholder={`کد ملی: `} value={`کد ملی: ${user.number[0].meliCode}`} />
                <input style={{background:"#ddf0ff"}} placeholder="ایمیل" value={`ایمیل: ${user.email}`} />  
             <textarea onChange={(e) => setDescription(e.target.value)} style={{fontWeight:"600",width:"92%",marginTop:"15px" ,borderRadius:"5px",border:"1px solid silver",height:"100px"}} placeholder="توضیحات بیشتر ... (دلخواه)" />        
             <label>
                <div style={{width:"99%",margin:"10px 0px"}}>
                      <input type="checkbox" />
                      <p>قوانین وبسایت را مطالعه کردم و با آن موافقم .<b style={{cursor:"pointer",pointerEvents:"all"}} onClick={() => setRead(true)}>قوانین وبسایت</b></p>
                    </div>
            </label>
                <div className="payment">
                    <p>مبلغ قابل پرداخت:</p>
                    <p>{json.price}</p>
                </div>
                <a href="#" onClick={paying}>پرداخت آنلاین</a>
            </form>
        </div>
    )
}

export default index;