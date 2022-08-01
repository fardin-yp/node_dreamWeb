import axios from 'axios';
import React,{useState , useEffect ,useRef ,useContext} from 'react';
import {format} from "timeago.js";
import io from 'socket.io-client';
import context from '../../helpers/context/authContext';
import Image from 'next/image';
import send from '../../public/images/send.png';



const liveChat = () => {

    const [email ,setEmail] = useState("");
    const [username ,setUserName] = useState("");
    const [arrivalMessage ,setArrivalMessage] =useState(null);
    const [loginLoading ,setLoginLoading] = useState(false)
    const [message ,setMessage] = useState("");
    const [users ,setUsers] = useState(null);
    const [error ,setError] = useState(null);
    const socket = useRef();
    const {find ,Api} = useContext(context);
    const messagesEndRef = useRef(null);
    const [notification ,setNotification] = useState(false);



    let classe = ["chat"];

    if(openChat === true){
        classe = ["openChat"]
    }

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

  
    useEffect(scrollToBottom, [allMessages]);


    useEffect(() => {
     socket.current = io(`ws://localhost:27017`)
     socket.current.on("getMessage" , data => {
        setArrivalMessage({
            sender:data.senderId,
            text: data.text,
            createdAt:Date.now(),
        })
     })
    } , []);
    const start = () => {
        new Audio('/mixkit-long-pop-2358.wav').play()
      }
    useEffect(() => {
     arrivalMessage && conversation[0].members.includes(arrivalMessage.sender) &&
     setAllMessages(prev => [...prev ,arrivalMessage])
    },[arrivalMessage ,conversation])

    useEffect(async() => {
      socket.current.emit("addUser" , conversation && conversation.length > 0 && conversation[0].members[0]);
      socket.current.on("getUsers" , users => {
        const findUser = users.find(res => res.userId === "Admin-hrttrhthr%00")
        if(findUser !== undefined && findUser){
            setUsers(findUser)
        }
      })
    },[conversation])

    const getconversation = async () => {
        await axios.get(`${Api}/conversation`,{withCredentials:true}).then((res) => {
             if(!res.data.errMessage){
               if(!loginLoading && res.data.length === 0 ){
                axios.get(`${Api}/conversation/logout`,{withCredentials:true});
                setConversation(null)
                
                 }
                 if(res.data.length > 0){
                    setConversation(res.data)
                 }
             }
      })
     };
     const getMessages = async () => {
         if(conversation){
            await axios.get(`${Api}/message/`,{withCredentials:true}).then(res => {
                setAllMessages(res.data)
           })
         }

    }
    useEffect(() => {

            getconversation()
        
    },[]);

    useEffect(() => {
        if(arrivalMessage){
            start()
        }
    },[arrivalMessage])
    
    useEffect(() => {
        getMessages()
    },[conversation]);
    
        const startChat = async (e) => {
            e.preventDefault()
            setLoginLoading(true)
            const post = {email:email ,username:username}
            await axios.post(`${Api}/conversation/` , post ,{withCredentials:true}).then(res => {
            
            if(res.data.errMessage){
                setLoginLoading(false);  
                alert(res.data && res.data.errMessage)
             } 
            if(!res.data.errMessage){
             getconversation()
             getMessages()
            }
        })

    }
    useEffect(async () => {
        if(find.username){
           await startChat(find.email ,find.username)
        }
        
    },[find])

    const sendMessage = async (e) => {
        e.preventDefault();
        if(conversation && conversation.length > 0){
            const con = conversation && conversation[0].members[0];
            const post = {conversationId:con , sender:con , text:message}
            if(message.length > 0){
            socket.current.emit("sendMessage" , {
                senderId:conversation && conversation[0].members[0],
                receiverId : "Admin-hrttrhthr%00",
                text : message
            })
        
    }
    setMessage("")
        if(message.length > 0){
            await axios.post(`${Api}/message/`,post ,{withCredentials:true}).then(res => {
                setAllMessages([...allMessages ,res.data])
            })
        }
    }
}
    useEffect(() => {
        const exist = localStorage.getItem("message");
        if(!exist){
            localStorage.setItem("message" ,false);
        }
        if(arrivalMessage){
            localStorage.setItem("message" ,true);
        }
    },[arrivalMessage]);
    useEffect(() => {
        const find = localStorage.getItem("message");
        setNotification(find);
    },[arrivalMessage]);


    return (
     
    <div className={classe}>
           {openChat === false && notification === "true" && <span></span>}
        <div className="open-label"  >
        
        <div id="label-image" onClick={() => setOpenChat(false)} >
             <img style={{width:"25px",height:"25px",left:"-25px"}} onClick={() => setOpenChat(false)} src={"/uploads/cancel.png"} alt="" />
        </div>
        <div className="agent-profile">
             <img src="/uploads/agent.png" alt=""/></div>
        <div style={{display:'flex' ,flexFlow:"column" ,justifyContent:"center",fontSize:"13px"}}>
            <p style={{marginBottom:"-5%" ,fontSize:"15px"}}> پشتیبانی سایت</p>
            {users && <p>پاسخگوی سوالات شما هستیم.</p>}
            {!users && <p style={{fontSize:"11px",color:"red"}}>متاسفانه در حال حاضر قادر به پاسخگویی نیستیم !</p>}
        </div>
    </div>
    <div className="chat-room" >
{ conversation && conversation.length > 0 && <div style={!conversation ? {display:"none"}:null}>
            { conversation && allMessages && allMessages.length > 0 && allMessages.map(res => {
            return <div style={res.sender !== res.conversationId ?{alignItems:"flex-end"} : null} key={res._id}>
                    <p style={res.sender !== res.conversationId ?{backgroundColor:"#78e6f3"} : null}>{res.text}</p>
                    <label>{format(res.createdAt)}</label>
                </div>
            })}
            {conversation && <div ref={messagesEndRef} />}
        </div>}
        {conversation && conversation.length === 0 && 
        <form className="chat-signUp">
                <b>لطفا نام و ایمیل خود را وارد کنید</b>
                <input placeholder="نام" onChange={(e) => setUserName(e.target.value)} />
                <input placeholder="ایمیل" onChange={(e) => setEmail(e.target.value)} />
                <button disabled={loginLoading} onClick={startChat}>شروع گفتگو{loginLoading && 
                <div style={{width:"25px",height:"25px",position:"absolute",borderRight:"4px solid #355c7d"}} className='loading-spinner'></div>} </button>
            </form>}
            {!conversation && <form style={conversation ?{ display:"none" }: null} className="chat-signUp">
                <b>لطفا نام و ایمیل خود را وارد کنید</b>
                <input placeholder="نام" onChange={(e) => setUserName(e.target.value)} />
                <input placeholder="ایمیل" onChange={(e) => setEmail(e.target.value)} />
                <button disabled={loginLoading} onClick={startChat}>شروع گفتگو{loginLoading && 
                <div style={{width:"25px",height:"25px",position:"absolute",borderRight:"4px solid #355c7d"}} className='loading-spinner'></div>} </button>
            </form>}


        </div>
        {openChat === true && <form className="chat-input">
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="پیامی بنویسید ..." />
        <button onClick={conversation && sendMessage}><Image width={27} height={25} src={send} alt="send.png" /></button></form>}

        {openChat === false && 
        <button onClick={() => {
            setOpenChat(true);
            localStorage.setItem("message" ,false)
            setNotification(localStorage.getItem("message"))
        }}>
            <img  src='/uploads/live-chat.png' alt="live-chat.image" />
        </button>}

    </div>

    )
}

export default liveChat
