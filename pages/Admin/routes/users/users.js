import React,{useContext, useState} from 'react';
import axios from 'axios';
import context from '../../../../helpers/context/authContext';

const Users = ({info}) => {

    const [sure ,setSure] = useState(false);
    const [loading ,setLoading] = useState(false);
    const [search ,setSearch] = useState('');
    const [slice ,setSlice] = useState(10);
    const [select , setSelect] = useState(null);
    const [surePromote , setSurePromote] = useState(null);
    const [roll ,setRoll] = useState("");
    const {Api} = useContext(context)

    const blockUser = async (e) => {
        e.preventDefault();
        setLoading(true)
        try{
            await axios.put(`${Api}/adminRoute/blockUser/${sure}`,sure ,{withCredentials:true}).then(res => {
                alert(res.data);
            });
            setLoading(false);
        }catch(err){
            setLoading(false);
        }
    }
    const PromoteUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        const post = {email:surePromote , roll:roll}
        try{
            await axios.post(`${Api}/auth/promot/`, post ,{withCredentials:true}).then(res => {
                alert(res.data);
            });
            setLoading(false);
        }catch(err){
            setLoading(false);
        }
    }
 const filter = info && info.filter(res => res.username.toLowerCase().includes(search.toLowerCase()))

 const addSlice = () => {
    setSlice(prev => prev + 10)
}
    return (
    <div className="products"  >
            {sure && <div onClick={() => setSure(false)} id="backDrop">hello</div>}
            {surePromote && <div onClick={() => setSurePromote(null)} id="backDrop">hello</div>}

            {sure &&
            <div className="secc-comment">
                <img src={'/uploads/warning.png'} alt="" />
                <h1>آیا این کاربر بلاک شود ؟</h1>
                <button style={{background:"#fe1919"}} onClick={blockUser}> بلاک کاربر</button>
            </div>}
            {surePromote &&
            <div className="secc-comment">
                <img src={'/uploads/warning.png'} alt="" />
                <h1>promote user</h1>
<select style={{padding:"10px 20px",cursor:"pointer" ,border:"1px solid grey" ,borderRadius:"20px"}} onChange={(e) => setRoll(e.target.value)}>
   <option value="">roll</option>
   <option value="master">master</option>
   <option value="poster">poster</option>
   <option value="ceo">Ceo</option>
   <option value="support">support</option>
</select>
        <button style={{background:"#6df671"}} onClick={PromoteUser}> Promote </button>
            </div>}
       {!select && <div style={{zIndex:"13",justifyContent:"center"}} className="tabels">
            <div>
            <label>
                <b >  کاربران سایت  ({info && info.length})</b>
                 <input placeholder="جستجو ..." onChange={(e) => setSearch(e.target.value)} />
            </label>
            <table >
                <thead  >
                    <th >
                        نام
                    </th>
                    <th >
                         ایمیل 
                    </th>
                    <th >
                        شماره همراه
                    </th>
                    <th>
                        تاریخ
                    </th>
                </thead>
                <tbody >

                {filter && filter.slice(0,slice).map(res => {
                return <tr onClick={() => setSelect(res)} style={{backgroundColor:"white"}}>

                       <td>
                           <a>{res.username}</a>
                       </td>
                       <td>
                           <a>{res && res.email && res.email.length > 25 ? ` ...${res.email.substring(0, 25)}` : `${res.email}`}</a>
                       </td>
                       <td>
                           <a>{res.number}</a>
                       </td>
                       <td>
                           <a>{res.timestamp}</a>
                       </td>
                   </tr>
                   })}
                </tbody> 
      <tfoot></tfoot>

        </table>
       </div>
    </div>
}
{ select && <div className="user-selected">
            <div className="selected-top">
               <div style={{borderBottom:"none" ,width:"50%" ,display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
               <img src="/uploads/user.png" alt=""/>
               <h2>{select.username}</h2>
               </div>
               <label>
                   <button >settings
                   <div>
                   <button onClick={() => setSurePromote(select.email)}>Promot</button>
                   <button onClick={() => {
                       setSure(select._id)}}>Block</button>
                   </div>
                   </button>


                </label>
            </div>
               <div className="selected-bot">
            <div >
              <p>نام : {select.username}</p>
            </div>
            <div><p>نام خانوادگی: {select.family}</p></div>
            <div><p>ایمیل: {select.email}</p></div>
            <div style={{borderBottom:"none"}}><p>شماره همراه: {select.number}</p></div>
            <div><p>کدملی: {select.meliCode}</p></div>
            <div><p>تاریخ ساخت: {select.timestamp}</p></div>
            </div>
        </div>}
    </div>
    )
 }

export default Users
