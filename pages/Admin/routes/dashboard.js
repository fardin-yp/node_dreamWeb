import React,{useContext} from 'react';
import context from "../../../helpers/context/authContext";
import Chart from '../chart/chart';

const dashboard = ({info ,setActive ,setRoute ,sells}) => {

const date_ob = new Date();
const {users} = useContext(context);

let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear()

const today = `${date}/${month}/${year}`

const filterToday = today && info && info.allSessions.filter(res => res.day === today);


const allSessions = info && info.allSessions.length || 0;

let onlineUsers = users && users.length || 0;

return (
      <div className="dashboard">
       
          <div id="dashboard-1">
            <div>
               <label>
               <p>فروش کل</p>
               <b>25000 تومان</b>
               </label>
               <circle><img src="/images/discount.png" style={{borderRadius:"50%"}}  alt="discount"/></circle>
            </div>
            <div >
               <label>
               <p> تعداد کل کاربران</p>
               <b>{info && info.allUsers.length || 0}</b>
               </label>
               <circle style={{background:"none"}}><img src="/images/user.png"  alt="discount"/></circle>
            </div>
            <div>
               
               <label>
               <p> تعداد کل مقالات</p>
               <b>{info && info.allArticles.length || 0}</b>
               </label>

               <circle style={{background:"none"}}><img src="/images/pages.png"  alt="discount"/></circle>

            </div>
            <div>
            
            <label>
               <p >تعداد کل پروژه ها</p>
               <b>{info && info.allProducts.length || 0}</b>
               </label>
               <circle style={{background:"none"}}><img src="/images/chart.png"  alt="discount"/></circle>
            </div>
          </div>
          <Chart sells={sells} info={info && info.allSessions } />
          <div className="users-dashboard">
             <div>
                <img src="/images/Data backup.png" alt="users" />
                <label>
                <p>بازدید های کل  </p>
                <b>{allSessions}</b>
                </label>

             </div>
             <div>
                 <label>
                 <p> کاربران آنلاین  </p>
                 <b>{onlineUsers}</b>
                 </label>
                 <img src="/images/International business meeting.png" alt="users" />
             </div>
          </div>
          <div className="tabels">
            <div>
              <label>
                  <b >آخرین سفارشات</b>
                  <button onClick={() => setActive("sells")}>همه سفارشات </button>
              </label>
              <table>
              <thead >
                    <th>
                        خریدار
                    </th>
                    <th >
                        عنوان
                    </th>
                    <th >
                        تاریخ خرید
                    </th>
                </thead>
               <tbody >
               {sells && sells.map(res => {
                return <tr >
                       <td>
                       { res.product.post?.name || res.product.json?.title || res?.description }
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

         </div>

         <div>
              <label>
                  <b>آخرین پروژه ها</b>
                  <button onClick={() => {
                     setRoute("edit-projects")
                     setActive("projects")}}>همه پروژه ها</button>
              </label>
              <table>
              <thead >
                    <th>
                        عنوان
                    </th>
                    <th >
                        دسته بندی
                    </th>
                    <th >
                        قیمت
                    </th>
                    <th >
                        تاریخ 
                    </th>
                </thead>
                <tbody>
                   {info && info.allProducts.map(res => {
                      return <tr>
                        <td>
                           {res.name}
                       </td>
                       <td>
                           {res.category}
                       </td>
                       <td>
                           {res.price}
                       </td>
                       <td>
                           {res.timestamp}
                       </td>
                      </tr>
                   })}
                </tbody>
               <tbody >
               </tbody> 
                <tfoot></tfoot>
            </table>

         </div>
      </div>
   </div>
    )
}

export default dashboard
