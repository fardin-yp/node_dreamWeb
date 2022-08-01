import React from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import cal from './calendar.png';
import Image from 'next/image';
import profile from './profile.png';
import views from './view.png';

import Comment from './comment';
import Head from 'next/head';
import {useRouter} from 'next/router'
import Share from '../../helpers/share/Share';


export async function getServerSideProps(context) {
  
  const con = context.params.articleId;
  const res = await fetch('https://dreamwebbackend.herokuapp.com/allRoutes/fullArticle/' + con)
  const json = await res.json();

  const reCaptcha ="6Lc5scwdAAAAABhLprESfkYx74BP2mEGvh9Ck01p";

  if(!json.title){
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
  const admin = await loggedIn.json();

  return {
    props:{
      json,
      reCaptcha,
      admin
    }
  }
}

const index = ({json ,reCaptcha ,admin}) => {
  const router = useRouter()

    return (
      <div>
        <Head>
             <link rel="icon" href="/art.png" />
             <title> مقاله {json.title} -dreamWeb</title>
             <meta name="description" content={`${json.title} , مقاله ${json.title} , درباره ${json.title}`} />
             <meta name="keywords" content={`${json.title} , مقاله ${json.title} , درباره ${json.title}`} />
             <meta property="og:site_name" content="دریم وب"/>
             <meta property="og:title" content={`مقاله ${json.title} -dreamWeb`} />
             <meta property="og:description" content={`${json.title} , مقاله ${json.title} , درباره ${json.title}`} />
             <meta name="viewport" content="width=device-width, initial-scale=1" />
             <meta property="og:url" content={router.pathname} />
             <meta name="og:type" content={"article"}/>
             <meta property="og:locale" content="Fa_IR" /> 
        </Head>
{ json && <div style={{alignItems:"center"}} className="layout">
          
            <Navbar />
            <div className="full-article">
              {json && 
               <div>
                <h1 id="article-h1">{json.title}</h1>
                <div>
                  <label><Image id="calendar" src={cal} layout="fill"/></label><p>{json.timestamp}</p>
                  <label style={{marginRight:"15px"}}><Image id="calendar" src={profile} layout="fill"/></label><p>Admin</p>
                  <label style={{marginRight:"15px"}}><Image id="calendar" src={'/uploads/conversation.png'} layout="fill"/></label><p>{json.comments.length || 0}</p>
                </div>
                <img src={`/uploads/${json.image}`} alt="" />
                <p>{json.des}</p>
                </div>
              }
             {json.info && <div dangerouslySetInnerHTML={{__html: json.info}} />}
              <div className="other-Articles"></div>
              
            </div>

            <Share title={json.title} />
            <Comment admin={admin} type={"articles"} reCaptcha={reCaptcha} id={json._id} comments={json.comments} link={"ArticleComment"} />
            
            <Footer />
        </div>}
        </div>
    )
}

export default index
