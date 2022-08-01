import React,{useEffect ,useState} from 'react'
import Footer from '../../../components/footer/footer'
import Navbar from '../../../components/navbar/navbar';
import tick from './tick.png';
import Image from 'next/image';
import axios from 'axios';

export async function getServerSideProps(context) {


    var {amount} = context.params;
    var { Authority , Status } = context.query;
    
    const merchant = "d164f627-0400-4dc5-8da5-bc166ee30553";



    if(!amount||
        !Authority || 
        !Status
        ){
        return {
          redirect: {
            permanent: false,
            destination: "/404"
          }
        }
      }

    
    return {
       props: {Authority ,Status ,merchant ,amount}
    }
  
}

const Complete = ({Authority , Status ,merchant ,amount}) => {

    const [response ,setResponse] = useState(null);
    const [error ,setErr] = useState(null);
    const [loading ,setLoading] = useState(true)

    useEffect(() => {
      const fetch = async () => {
          
        const purchase = JSON.parse(localStorage.getItem("object"));
      
        const post = { Authority , Status ,merchant ,amount:amount , purchase:purchase }
        await axios.post('https://dreamwebbackend.herokuapp.com/sell/orderComplete', post ,{withCredentials:true}).then(res => {
            if(res.data.errMessage){
                setErr(res.data)
                setLoading(false)
            }
            else{
              setResponse(res.data)
              setLoading(false)
            }

        });
        
      }
      fetch()
    },[]);

    return (
        <div>

              {response && <div style={!loading ? {opacity:"1" ,transition:"1s ease"} : {opacity:"0" ,transition:"1s ease"}}> 
              <Navbar />

               {response && <div className="web-complete">
                   <Image src={tick} width={150} height={150} />
                   <h1>{response.message}</h1>
                   <p>خرید شما پس از تایید ادمین بلافاصله کارشناسان فروش ما با شما تماس خواهند گرفت .</p>
                   <p>کدپیگیری خرید شما : {response.Tracking}</p>
                   <a href="/">بازگشت به صفحه اصلی</a>
               </div>}
   
               <Footer />
               </ div>
              }

{error && <div style={!loading ? {opacity:"1" ,transition:"1s ease"} : {opacity:"0" ,transition:"1s ease"}}> 
              <Navbar />

               <div className="web-complete">
                   <img src="/images/warning (1).png" alt="warning" />
                   <h1>{error.errMessage}</h1>
                   <a href="/" style={{background:"red"}}>بازگشت به صفحه اصلی</a>
               </div>
   
               <Footer />
               </ div>
              }
           

           <div className="full-loading" style={!loading ? {opacity:"0" ,visibility:"hidden" ,transition:"1s ease"} :null }>
               <img src="/images/dreamWeb.png" alt="dreamWeb" />
               <circle></circle>
               <p>لطفا کمی صبر کنید ... </p>
            </div>
        </div>
    )
}

export default Complete
