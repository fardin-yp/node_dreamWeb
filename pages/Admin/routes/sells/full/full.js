import React from 'react';


const Full = ({select ,setSelect ,confirm ,deleteSells}) => {

    return (
        <div>
            {select && <div onClick={() => setSelect(null)} id="backDrop">hello</div>}
            {select && select.value === "noExclusive" &&

            <div className="full-sells">
                    <label>
                    <p>
                    {select.object.product.post ? select.object.product.post.name : select.object.product.json.title}
                        {!select.object.confirmation && 
                           <p style={{fontSize:"11px" ,opacity:"0.6"}}>
                             در انتظار تایید ..
                          </p>}
                          {select.object.confirmation === true && 
                           <p style={{fontSize:"11px" ,opacity:"0.6" ,color:"green"}}>
                             تایید شد !
                          </p>}
                    </p>

                          <div>
                          <img src="/images/kebab.png" />
                              <div>
                                  <b onClick={confirm}>تایید خرید</b>
                                  <b onClick={deleteSells}>حذف خرید</b>
                              </div>
                          </div>
                    </label>

                    <input value={` نام : ${select.object.buyer} `} />
                    <input value={` ایمیل : ${select.object.email} `} />
                    <input value={`پرداخت شده : ${select.object.price} ریال `} />
                    <input value={` شماره تماس : ${select.object.number} `} />
                    <input value={` کد ملی : ${select.object.meliCode} `} />
                    <input value={` تاریخ : ${select.object.date} `} />
                    <input value={` شماره پیگیری : ${select.object.Tracking} `} />
                    <textarea value={`توضیحات : ${select.object.des} `} />

            </div>

            }
      {select && select.value === "Exclusive" &&

<div className="full-sells" >
        <label>
        <p>
        {select.object.description}
            {!select.object.confirmation && 
               <p style={{fontSize:"11px" ,opacity:"0.6"}}>
                 در انتظار تایید ..
              </p>}
              {select.object.confirmation === true && 
               <p style={{fontSize:"11px" ,opacity:"0.6" ,color:"green"}}>
                 تایید شد !
              </p>}
        </p>

              <div>
              <img src="/images/kebab.png" />
                  <div>
                      <b onClick={confirm}>تایید خرید</b>
                      <b onClick={deleteSells}>حذف خرید</b>
                  </div>
              </div>
        </label>

        <input value={` نام : ${select.object.buyer} `} />
        <input value={` ایمیل : ${select.object.email} `} />
        <input value={`پرداخت شده : ${select.object.price} ریال `} />
        <input value={` شماره تماس : ${select.object.number} `} />
        <input value={` کد ملی : ${select.object.meliCode} `} />
        <input value={` تاریخ : ${select.object.date} `} />
        <input value={` شماره پیگیری : ${select.object.Tracking} `} />
        <textarea value={`توضیحات : ${select.object.des} `} />

        <tr />
        <h1 style={{width:"100%"  ,fontSize:"18px" ,margin:"20px",borderTop:"2px solid silver",padding:"10px"}}>آیتم های انتخابی</h1>
        <table>
                      <thead >
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
                     {select && select.object.product.order.map(res => {
                             return <tr onClick={() => pushOrder(res)} className="tr-news">
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

</div>

}
        </div>
    )

}

export default Full