import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Edit from '../editor/edit';
import Loading from '../images/loadingshop.gif';
import Image from 'next/image';
import context from '../../../helpers/context/authContext'

const editProducts = () => {

    const [products ,setProducts] = useState([]);
    const [name ,setName] = useState('');
    const [price ,setPrice] = useState('');
    const [off ,setOff] = useState('');
    const [image ,setImage] = useState('');
    const [description ,setDescription] = useState('');
    const [category ,setCategoty] = useState('');
    const [link ,setLink] = useState("");
    const [property ,setProperty] = useState('');
    const [filter ,setFilter] = useState('');
    const [loading ,setLoading] = useState(false);
    const [edit ,setEdit] = useState(false);
    const [id, setId] = useState(false);
    const [deleteImage ,setDeleteImage] = useState('');
    const [deleteProduct , setDeleteProduct] = useState(null);
    const {Api} = useContext(context)

    const getProducts = async () => {
        await axios.get(`${Api}/allRoutes/allProducts`).then(res => {
            setProducts(res.data)
        })
    }

    const postHandler = async (e) =>{    
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        
    try{      
        formData.append("name" , name);
        formData.append("description" , description);
        formData.append("category" , category);
        formData.append("image" , image);
        formData.append("price" , price);
        formData.append("off" , off);
        formData.append("link" , link);
        formData.append("Property" , property);
        formData.append("deleteImage" , deleteImage);
        formData.append("id" , id);
    
        await axios.put(`${Api}/adminRoute/ProductsUpdate` , formData ,{withCredentials:true} ).then(res => {
            if(res.data.errMessage){
                alert(res.data.errMessage)
                setErr(res.data.errMessage)
                setLoading(false)
            }
            alert(res.data.Message)
            setMessage(res.data.Message);
            setLoading(false);
            setEdit(false)
        } )

    }catch(err){
        setLoading(false);
  }    
}


    useEffect(() => {
        getProducts()
    },[]);

    const uploadImage = async (e) => {
        const images = e.target.files[0]
        setImage(images)
    }

    const deletePR = async (e) => {
        e.preventDefault();
        const post ={ image:deleteProduct.image}
        await axios.put(`${Api}/adminRoute/delete/product/${deleteProduct._id}`,post ,{withCredentials:true} ).then(res => {
            alert(res.data.Message)
            setLoading(false);
            setDeleteProduct(null)
            setEdit('')
        } )
    }
    
    const sure = (e) => {
        e.preventDefault()
        setDeleteProduct(edit)
    }

    return (
        <div className="products">
            {deleteProduct && <div onClick={() => setDeleteProduct(null)} id="backDrop">hello</div>}
             {deleteProduct &&
            <div className="secc-comment">
                <img src={'/uploads/warning.png'} alt="" />
                <h1>آیا این پست حذف شود ؟</h1>
                <button style={{background:"#fe1919"}} onClick={deletePR}> حذف پست</button>
            </div>}

                
        {!edit && 
        <div className="edit-tabels" style={{zIndex:"13"}}> 
            {products.length === 0 && 
            <div style={{width:"100%" ,height:"450px" ,position:"relative",margin:"auto"}}>
                <Image src={Loading} layout={"fill"} alt="" />
            </div>} 
            <div>
            <label> 
            <b>ویرایش پروژه ها</b>
            <input style={{marginTop:"10px"}} placeholder="جستجو..." onChange={(e) => setFilter(e.target.value)} />
        </label>
        {products.length > 0 && <table>
                <thead>
                    <th >
                        تصویر
                    </th>
                    <th >
                         نام 
                    </th>
                    <th >
                         دسته بندی 
                    </th>
                    <th >
                        دیدگاه
                    </th>
                </thead>
                <tbody >
                {products.length > 0 && products.filter(res => {
                        return res.name && res.name.toLowerCase().includes(filter.toLocaleLowerCase())
                    }).map(res => {
                        return<tr onClick={() => {
                            setEdit(res);
                            setName(res.name)
                            setLink(res.link)
                            setCategoty(res.category)
                            setOff(res.off)
                            setDescription(res.description);
                            setDeleteImage(res.image)
                            setProperty(res.Property)
                            setId(res._id)
                        }} >

                       <td>
                           <img src={`/uploads/${res.image}`} alt="" />
                       </td>
                       <td >
                           <a>{res.name}</a>
                       </td>
                       <td >
                           <a>{res.category}</a>
                       </td>
                       <td >
                           <a>{res.comments.length}</a>
                       </td>
                   </tr>
                   })}
                </tbody> 
      <tfoot></tfoot>
        </table>
}
        </div>
        </div>
        }

            {edit.name && 
            <form style={{height:"100%",marginTop:"-10px"}} encType="multipart/form-data">
            <div style={{width:"90%" ,background:"#3f51b5",padding:"10px" 
            ,borderRadius:"10px",color:"white",position:"relative"}}> ویرایش پروژه {edit.name} 
            <button onClick={sure} style={{top:"-17px",padding:"10px",position:"absolute",left:"3px",fontSize:"12px",width:"max-content" ,height:"max-content",background:"red"}}>حذف پروژه</button></div>
              <input placeholder="title" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="قیمت" value={price} type='text' onChange={(e) => setPrice(e.target.value)} />
                <input placeholder="تخفیف" value={off} type='text' onChange={(e) => setOff(e.target.value)} />
                <input placeholder="لینک" value={link} type='text' onChange={(e) => setLink(e.target.value)} />
                <input placeholder="تصویر" type='file' filename="image" onChange={uploadImage} />
                <select value={category} style={{left:"0px" , top:"15px"}} onChange={(e) => setCategoty(e.target.value)}>      
                <option value="">انتخاب دسته بندی</option>
                <option value="shop">فروشگاهی</option>
                <option value="company">شرکتی</option>
                <option value="medical">پزشکی</option>
                <option value="realState">املاک</option>
                <option value="news">خبری</option>
                <option value="resturant">رستوران</option>
                <option value="personal">شخصی</option>
                </select>
                <textarea style={{width:"87%"}} placeholder="توضیحات ... " onChange={(e) => setDescription(e.target.value)} />
              <Edit setProperty={setProperty} data={property} />
              <button disabled={loading} onClick={postHandler}>
                    {loading && <div style={{height:"30px" ,width:"30px",top:"25%"}} className='loading-spinner'></div>}
                    تایید ویرایش
                </button>
            </form>
                }
        </div>
    )
}

export default editProducts
