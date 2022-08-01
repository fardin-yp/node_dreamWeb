import React,{useState,useContext, useRef ,useEffect } from 'react';
import axios from 'axios';
import context from '../../helpers/context/authContext';
import ReCAPTCHA from 'react-google-recaptcha';
import ReactPaginate from 'react-paginate';
import Down from './download.png';
import Image from 'next/image';

const Comment = ( {comments ,id ,link ,admin ,type ,reCaptcha} ) => {

    
    const [des ,setDes] =useState("")
    const {find ,Api} = useContext(context);
    const [answer ,setAnswer] = useState('');
    const [email ,setEmail] = useState('');
    const [name ,setName] = useState('');
    const [loading ,setLoading] = useState(false);
    const [err ,setErr] = useState('false');
    const [secc ,setSecc] = useState(false);
    const [comment ,setComments] = useState(null);
    const [captcha ,setCaptcha] = useState('');
    const [perPage] = useState(7);
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const topRef = useRef(null);
    const [openAnswer ,setOpenAnswer] = useState("")


    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1);
        scrollToTop()
    };
    async function sendmessage(e){
        e.preventDefault();
        setLoading(true);
        const message = {name:name ,email:email ,des , id:id ,answer:answer, captcha:captcha }  
     try{
        await axios.put(`${Api}/comment/${link}`, message,{withCredentials:true}).then(res => {
            if(res.data.errMessage){
                setErr(res.data)
            }
            setLoading(false)
            if(!res.data.errMessage){
                setSecc(true)
                setErr("false")
                comments.push(res.data)
            }

        })

     }catch(err){
        
        setLoading(false)
     }
}

useEffect(() => {
    setComments(comments)
    setPageCount(Math.ceil(comments.slice(0,30).length / perPage))
},[])

  const deleteComment = async (messId) => {
     setComments(comment.filter(res => res._id !== messId))
      const posts = {newComments:comment , id:id}
      axios.post(`${Api}/adminRoute/removeComment/${type}` ,posts ,{withCredentials:true}).then(res => {
        alert(res.data.Message)
    })
  }

  let commentCss= ['new-comment']

  if(find.username){
      commentCss = ['new-comment','newCommentInput']
  }

  
 
  const slice = comment && comment.slice(offset, offset + perPage);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" })
  }

    return (
        <>
        <div className="hole-comment">
       
        {secc === true && <div onClick={() => setSecc(false)} id="backDrop">hello</div>}
           <div id="hh" style={{width:"100%",height:"10%",display:"flex",alignItems:"center",opacity:"0.8",padding:"5px"}}>
              <img src={'/uploads/conversation.png'} style={{width:"35px",margin:"8px", marginRight:"0px"}} alt="message" />
              <p style={{fontWeight:"600"}}>دیدگاه</p>
            </div>
          <div id="newComment" className={commentCss.join(" ")}  >
          
               {answer && 
               <div style={{width:"100%" ,display:"flex", justifyContent:"space-between",backgroundColor:"#eceef3", padding:"0px 6px",borderRadius:"10px"}}>
               <p>پاسخ به {answer}</p>
               <button onClick={() => setAnswer("")} style={{fontWeight:"600",cursor:"pointer",background:"none",color:"black"}}>X</button>
               </div>}

        <div style={{marginTop:"10px",width:"100%" ,display:"flex" ,alignItems:"center" ,justifyContent:"space-between"}}>
            <input value={find.username?`${find.username}${find.family}`:null} style={err.err === 'all'|| err === 'name' ? {border:"1px solid red",boxShadow:" 0px 2px 8px rgba(231, 13, 13, 0.1) , 0px 0px 15px rgba(197, 75, 75, 0.1)"} : null} placeholder="نام و نام خانوادگی" onChange={(e) => setName(e.target.value)} />
            <input value={find?find.email:null} style={err.err === 'all'|| err === 'email' ? {border:"1px solid red",boxShadow:" 0px 2px 8px rgba(231, 13, 13, 0.1) , 0px 0px 15px rgba(197, 75, 75, 0.1)"}: null} placeholder="ایمیل" onChange={(e) => setEmail(e.target.value)} />
        </div>
            <textarea value={secc ? '' :null} style={err.err === 'all' ? {border:"1px solid red",boxShadow:" 0px 2px 8px rgba(231, 13, 13, 0.1) , 0px 0px 15px rgba(197, 75, 75, 0.1)"}: null} placeholder="دیدگاه خود را وارد کنید..." onChange={(e)=>setDes(e.target.value)} value={des}  /> 
            { <div ref={topRef} />}
               <ReCAPTCHA
               sitekey={reCaptcha}
               onChange={(val) => setCaptcha(val)}
                />
               <button disabled={loading} onClick={sendmessage}>ارسال دیدگاه</button>
               
               {err.errMessage && <p style={{color:"red",fontWeight:"600",background:"#eceff2",padding:"5px",borderRadius:"5px"}}>{err.errMessage}</p>}     
            </div>

            <hr style={{width:"100%",margin:"20px",backgroundColor:"silver",height:"1px",opacity:"0.5"}} />
            
            <div className="comments">
           
        {slice && slice.filter(res => !res.answer ).map(mes => {
            return<div  key={mes._id} className={"mess"} style={mes.name === openAnswer ? {height:"max-content"}:null}>
                   
                     <div style={{background:"#eafafd" ,borderRadius:"5px"}} className="c-top" >
                        <p style={{fontSize:"13px" ,opacity:"0.5",marginRight:"0%"}}>{mes.time}</p>
                    <div>
                         <p style={{fontWeight:"600"}}>ادمین سایت</p>
                         </div>
                         <img style={{borderRadius:"50%",width:"60px" ,height:"60px"}} src={mes.admin ? '/images/DreamIcon.png': '/uploads/user.png'} alt="user"/>
                     </div>
                      <div className="mess-des">
                          <p style={mes.answer && mes.answer !== "false" ? {color:"white"} : null}>{mes.des}</p>
                      </div>
                      <div className="answers">

                        <label> 
                            <button onClick={() => {
                              setAnswer(mes.name);
                              scrollToTop()                    
                            }}>افزودن پاسخ </button> 
                        </label>
                        

                          <label> 
                              <b onClick={() => setOpenAnswer(mes.name === openAnswer ? "" : mes.name)}>نمایش همه پاسخ ها </b> 
                              <Image width={15} height={15} src={Down} alt="down-flash"/>
                         </label>

                         { comment
                              .filter(res => res.answer === openAnswer)
                              .map(res => {
                                return <div 
                                style={mes.name === openAnswer ? {opacity:"1" ,visibility:"visible",display:"block"}:{opacity:"0" ,visibility:"hidden",display:"none"}} 
                                className="answer-comment">
                                        <div className="c-top" style={res.admin ? {background:"#0d2040",color:"white"}:null}>
                                            <p style={{fontSize:"13px" ,opacity:"0.5",marginRight:"0%"}}>{res.time}</p>
                                           <div>
                                                <p style={{fontWeight:"600"}}>{res.name}</p>
                                                </div>
                                                <img src={res.admin ? '/uploads/user.png': '/uploads/user.png'} alt="user"/>
                                            </div>
                                               
                                        <div className="mess-des">
                                             <p >{res.des}</p>
                                        </div>
                                    </div>
                                })}

                      </div>
                      {admin && 
                      <img 
                      onClick={() => deleteComment(mes._id)} 
                      src={"/images/cancel (1).png"} 
                      alt="delete"
                      style={{position:"absolute" ,left:"-35px" ,top:"-5px",width:"20px" ,height:"20px",cursor:"pointer",pointerEvents:"all"}}  /> 
                       }
                  </div>})}
               { pageCount > 1 && <div className="comment-paginate">
                <ReactPaginate
                    nextLabel={">"}
                    previousLabel={"<"}
                    pageCount={pageCount}
                    disabledClassName={"dis"}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                  </div>}
            </div> 
            {secc &&
            <div className="secc-comment">
                <img src={'/uploads/accept.png'} alt="" />
                <h1>دیدگاه شما با موفقیت ارسال شد !</h1>
                <button onClick={() => {
                    setDes('')
                    setName('')
                    setEmail('')
                    setSecc(false)}}>متوجه شدم</button>
            </div>}

            </div>
            
            </>
    )
}

export default Comment;