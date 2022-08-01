import React,{useContext, useState} from 'react'
import Full from './full/full';
import context from '../../../../helpers/context/authContext';
import axios from 'axios'

const Sells = ({sells}) => {

    const [select ,setSelect] = useState(null);
    const {Api} = useContext(context);
    const [search ,setSearch] = useState("");
    const [search2 ,setSearch2] = useState("");
    const [search3 ,setSearch3] = useState("");

    const deleteSells = async () => {
        await axios.post(`${Api}/sell/delete` ,{id:select.object._id}).then(res => {
        if(res.data.errMessage){
        alert(res.data.errMessage)
        }

        alert("خرید حذف شد !")
        
        
    })
    }

    const confirm = async () => {
        await axios.post(`${Api}/sell/confirm` ,{id:select.object._id}).then(res => {
            if(res.data.errMessage){
            alert(res.data.errMessage)
        }

            alert("خرید تایید شد !")
        
    })
    }

    return (
        <>
       {sells && <div className="sells">
            <div className="sells-left">
                <div>
                    <label>
                    <b> <img src="/images/web.png" alt="" /> وبسایت های آماده ({sells.filter(res => res.category === "amade").length})</b>
                    <input placeholder="جستجو ..." onChange={(e) => setSearch(e.target.value)}/>
                    </label>
        {sells.length > 0 && 
            <table>
                <thead>
                    <th >
                         نام 
                    </th>
                    <th>
                        خریدار
                    </th>
                    <th>
                         قیمت
                    </th>
                    <th>
                        تاریخ
                    </th>
                </thead>
                <tbody >
                {sells && 
                sells
                .filter(res => res.buyer.toLowerCase().includes(search.toLowerCase()))
                .filter(res => res.category === "amade")
                .map(res => {
                return <tr onClick={() => setSelect({value:"noExclusive",object:res})}>
                       <td>
                       {res.product.post ? res.product.post.name : res.product.json.title}
                       </td>
                       <td >
                           {res.buyer}
                       </td>
                       <td >
                           {res.price} ریال
                       </td>
                       <td >
                           {res.date}
                       </td>
                   </tr>
                   })}
                </tbody> 
      <tfoot></tfoot>
        </table>
}
        </div>
            <div>
                <label>
                    <b><img src="/images/web-development.png" alt="" />  سایت اختصاصی ({sells.filter(res => res.category === "exclusive").length})</b>
                    <input onChange={(e) => setSearch2(e.target.value)} placeholder="جستجو ..."/>
                </label>
                {sells.length > 0 && 
            <table>
                <thead>
                    <th>
                        خریدار
                    </th>
                    <th >
                         آیتم ها 
                    </th>
                    <th>
                        پرداخت شده  
                    </th>
                    <th>
                        تاریخ
                    </th>
                </thead>
                <tbody >
                {sells.length > 0 && sells
                .filter(res => res.category === "exclusive")
                .filter(res => res.buyer.includes(search2.toLowerCase()))
                .map(res => {
                return <tr onClick={() => setSelect({value:"Exclusive",object:res})}>
                       <td>
                       {res.buyer}
                       </td>
                       <td>
                          {res.product.order.length}
                       </td>
                       <td >
                           {res.price} ریال
                       </td>
                       <td >
                           {res.date}
                       </td>
                   </tr>
                   })}
                </tbody> 
      <tfoot></tfoot>
        </table>
}
                </div>
            </div>
            <div className="sells-right">
                <div>
                <label>
                    <b> <img src="/images/internet.png" alt="" />  سئو سایت ({sells.filter(res => res.category === "seo").length})</b>
                    <input onChange={(e) => setSearch3(e.target.value)} placeholder="جستجو ..."/>
                </label>
                {sells.length > 0 && 
            <table>
                <thead>
                    <th >
                         نام 
                    </th>
                    <th>
                        خریدار
                    </th>
                    <th>
                        تاریخ
                    </th>
                </thead>
                <tbody >
                {sells.length > 0 && 
                sells
                .filter(res => res.buyer.includes(search3.toLowerCase()))
                .filter(res => res.category === "seo")
                .map(res => {
                return <tr onClick={() => setSelect({value:"noExclusive",object:res})}>
                       <td>
                       {res.product.post ? res.product.post.name : res.product.json.title}
                       </td>
                       <td >
                           {res.buyer}
                       </td>
                       <td >
                           {res.date}
                       </td>
                   </tr>
                   })}
                </tbody> 
      <tfoot></tfoot>
        </table>
}
                </div>
            </div>
            <Full confirm={confirm} deleteSells={deleteSells} select={select} setSelect={setSelect} />
        </div>
        }
        </>
    )

}

export default Sells;
