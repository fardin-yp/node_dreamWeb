import {useState ,useEffect, useContext} from 'react';
import axios from 'axios';
import Edit from '../editor/edit';
import CKEditor from '../editor/Editor';
import context from '../../../helpers/context/authContext';

const Question = () => {

    const [question ,setQuestion] = useState("");
    const [answer ,setAnswer] = useState("");
    const [loading ,setLoading] = useState(false);
    const [route , setRoute ] = useState('');
    const [questions ,setQuestions] = useState(null);
    const [edit ,setEdit] = useState(null);
    const [id ,setId] = useState(null) ;
    const {Api} = useContext(context)
  

   const postHandler = async (e) =>{    
   e.preventDefault();
   const post = {question ,answer ,route};
   setLoading(true)
    try{      
        await axios.post(`${Api}/adminRoute/questions` , post ,{withCredentials:true} ).then(res => {
            if(res.data.errMessage){
                alert(res.data.errMessage);
                setLoading(false)
            }
            alert(res.data.Message);
            setLoading(false)
        } )
    }catch(err){
  }    
}

const getQuestions = async () =>{    

     try{      
         await axios.get(`${Api}/allRoutes/articles`).then(res => {
           setQuestions(res.data.findQuestions)
         } )
     }catch(err){
   }    
 }

 useEffect(() => {
     getQuestions()
 },[]);

 const update = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{ 
 const post = {question ,answer ,route ,id:edit._id}
    axios.put(`${Api}/adminRoute/updateQuestions` , post ,{withCredentials:true} ).then(res => {
            if(res.data.errMessage){
                alert(res.data,errMessage);
                setLoading(false);
                setLoading(false)
            }
            alert(res.data.Message);
            setLoading(false);
        } )
    }catch(err){
  }  
    
}

const deleteQuestions = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{ 
 const post = {id:id}
    axios.post(`${Api}/adminRoute/deleteQuestions` , post ,{withCredentials:true} ).then(res => {
            if(res.data.errMessage){
                alert(res.data,errMessage);
                setLoading(false);
                setLoading(false)
            }
            alert(res.data.Message);
            setLoading(false);
        } )
    }catch(err){
  }  
    
}

    return (
        <div className="products" style={{flexFlow:"column",alignItems:"center"}}>
            {edit && <div  onClick={() => setEdit(false)} id="backDrop">hello</div>}
            {id && <div onClick={() => setId(null)} id="backDrop">hello</div>}
            {id &&
            <div className="secc-comment">
                <img src={'/uploads/warning.png'} alt="" />
                <h1>آیا این سوال حذف شود ؟</h1>
                <button style={{background:"#fe1919"}} onClick={deleteQuestions}> حذف پست</button>
            </div>}
            <form style={{padding:"20px"}} onSubmit={postHandler}>
            <div className="article-holder">
                <input placeholder="عنوان پرسش" type='text' onChange={(e) => setQuestion(e.target.value)} />
                <select onChange={(e) => setRoute(e.target.value)}>
                    <option value="">مکان مورد استفاده</option>
                    <option value="home">صفحه اصلی</option>
                    <option value="exclusive">صفحه سایت اختصاصی</option>
                </select>
                <CKEditor setProperty={setAnswer} />
            </div>
                <button disabled={loading} onClick={postHandler}>
                    {loading && <div style={{height:"30px" ,width:"30px",top:"25%"}} className='loading-spinner'></div>}
                    ارسال
                </button>
            </form>
            {questions && questions.map((res ,idx) => {
                return <form style={{position:"relative" ,marginTop:"15px",cursor:"pointer"}}>
                    <b style={{padding:"10px" ,borderRadius:"50%" ,position:"absolute",right:"10px",background:"cyan",display:"flex",alignItems:"center",color:"white",justifyContent:"center",width:"30px",height:"30px"}}>{idx + 1}</b>
                    <input style={{width:"80%"}} value={res.question} />
                    <button onClick={(e) => {
                        e.preventDefault()
                        setId(res._id)
                        }}  style={{marginTop:"0",background:"red",width:"35%"}}>حذف</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setEdit(res)
                        setAnswer(res.answer)
                        setQuestion(res.question)
                        setRoute(res.route)
                    }
                        } style={{marginTop:"0",width:"35%"}}>ویرایش</button>
                </form>
            })}

       {edit &&
            <div className="secc-comment" style={{background:"none",height:"100%",zIndex:"185"}}>
             <form style={{padding:"20px",alignItems:"flex-start",position:"relative"}}  encType="multipart/form-data">
             <img 
             style={{cursor:"pointer",width:"20px",animation:"none",height:"20px" ,position:"absolute",left:"10px",top:"10px"}} 
             src="/images/cancel (1).png" 
             onClick={() => setEdit(false)}
             alt="" /> 
            <input value={question} placeholder="عنوان پرسش" type='text' onChange={(e) => setQuestion(e.target.value)} />
              <select value={route} onChange={(e) => setRoute(e.target.value)}>
                    <option value="">مکان مورد استفاده</option>
                    <option value="home">صفحه اصلی</option>
                    <option value="exclusive">صفحه سایت اختصاصی</option>
                </select>
                <Edit setProperty={setAnswer} data={answer} />
                <button disabled={loading} onClick={update}>آپدیت</button>
            </form>
            </div>}
        </div>

    )
}

export default Question