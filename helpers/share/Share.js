import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
  } from 'next-share';
  import Sharee from "./share.png";
  import Image from "next/image";
import { useEffect ,useState} from 'react';
  
 const Share = ({title}) => { 

    const size = 40;

    const [url ,setUrl ] = useState(null)

    useEffect(() => {
      setUrl(window.location.href) // Logs `http://localhost:3000/blog/incididunt-ut-lobare-et-dolore`
  }, [])

 return (
   <div>
     {url && <div className="Share-Links">
        <div>

            <Image width={25} height={25} src={Sharee} alt="share" />
            <p>به اشترک بگذارید</p>
            
        </div>
 <FacebookShareButton
    url={url}
    quote={title}
    hashtag={'#nextshare'}
    
    >
       <FacebookIcon size={size} round  />
  </FacebookShareButton>

  <LinkedinShareButton url={url}>
      <LinkedinIcon size={size} round />
  </LinkedinShareButton>

  <WhatsappShareButton
  url={url}
  title={title}
  separator=":: "
  >
       <WhatsappIcon size={size} round />
  </WhatsappShareButton>

  <TwitterShareButton
  url={url}
  title={title}
  >
        <TwitterIcon size={size} round />
  </TwitterShareButton>

  <EmailShareButton
  url={url}
  subject={title}
  body="body"
>
  <EmailIcon size={size} round />
</EmailShareButton>

  </div>}
  </div>
 )

 }

 export default Share;