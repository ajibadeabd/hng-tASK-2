// import logo from './logo.svg';
// import './App.css';;
import { useState } from "react";
import axios from "axios";

function App() {
    const [image,setImage ] =useState([])
    const [allImage,setAllImage ] =useState([])
    const [variety,setVarieties ] =useState([])
    const [allVariety,setALLVarieties ] =useState({})
    const [ALLVarietiestoSubmit,setALLVarietiestoSubmit ] =useState([])
    const [description,setDescription ] =useState('')
    const [name,setName ] =useState('')
    const [quantity,setQuantity ] =useState(0)
    const [price,setPrice ] =useState('')
    const [size,setSize ] =useState('')
    const [color,setColor ] =useState('')
    const [vimage,setvimage ] =useState([])
    const [getError,setError ] =useState('')
    const [varityquantity,setVarityQuantity ] =useState('')
    const fileSelect = (event)=>{
        console.log(event.target.files[0].name)
//         for(const each of event.target.files){
// each.variety='do'
// newfiles.push(each)
//         }
setImage([...image,...event.target.files])

        let img=[]
    for(const key of Object.keys(event.target.files)){
        console.log(event.target.files[key].name)
        img.push(event.target.files[key].name)
                    
                }
                    allVariety.image=img
                setvimage(img)

    }
    const addvarieties  = (quantity)=>{
        if(quantity  !==0 && (!price || !color || !size || vimage===0)){
// setError('')
setError('please fill all verieties fields')
        }else{
            if(image.length===0){
                setError('please upload image for this variety')

            }else{

            
        console.log(quantity)
        const arr = new Array(quantity+1)
       setVarieties(Array.from(Array(quantity+1).keys()))
    if(
        allVariety?.price){
            
        setALLVarietiestoSubmit([...ALLVarietiestoSubmit, allVariety])
        console.log(allVariety)
        setAllImage([...allImage,...image])
        setImage([])
        setvimage([])

    }
    // for(const key of Object.keys(image)){
    //     console.log(image[key].originalname)
                    
    //             }
        
        setColor('')
        setPrice('')
        setSize('')
        setALLVarieties({})
        setName('')
        setVarityQuantity('')
        setQuantity(quantity+1)
setError('')

    }
    }
}
    const onChangeDescription = (e)=>{
        // [e.target.name]: e.target.value
        if(e.target.name ==='description'){
            setDescription(e.target.value)
            console.log([].fill(2))
        // console.log(description)

        }
        else if(e.target.name ==='name'){
            setName(e.target.value)
        // console.log(name)

        }
        if(e.target.name ==='description'){
            // setDescription(e.target.value)
            setALLVarieties({[e.target.name]:e.target.value})
            
            
            setDescription(e.target.value)      
          }
        if(e.target.name ==='size'){
            setSize(e.target.value)
            
            if(allVariety?.size){
                allVariety.size=e.target.value
            setALLVarieties(allVariety)
            console.log(allVariety)

            }else{
            setALLVarieties({...allVariety,...{[e.target.name]:e.target.value}})
            console.log(allVariety)

            }
            
        }
        if(e.target.name ==='price'){

            setPrice(e.target.value)
            
            if(allVariety?.color){
                allVariety.color=e.target.value
            setALLVarieties(allVariety)
            console.log(allVariety)

            }else{
            setALLVarieties({...allVariety,...{[e.target.name]:e.target.value}})
            console.log(allVariety)
            }
            
        }
        if(e.target.name ==='color'){
            setColor(e.target.value)
            if(allVariety?.color){
                allVariety.color=e.target.value
            setALLVarieties(allVariety)
            console.log(allVariety)

            }else{
            setALLVarieties({...allVariety,...{[e.target.name]:e.target.value}})
            console.log(allVariety)

            // setALLVarieties({[e.target.name]:e.target.value})
            }

        }
        if(e.target.name ==='quantity'){
            setVarityQuantity(e.target.value)
            if(allVariety?.quantity){
                allVariety.quantity=e.target.value
            // setALLVarieties(allVariety)
            console.log(allVariety)
            }else{

            // setALLVarieties({[e.target.name]:e.target.value})
            setALLVarieties({...allVariety,...{[e.target.name]:e.target.value}})
            console.log(allVariety)

            }
            

        }
    }
        const upload = ()=>{
            console.log(ALLVarietiestoSubmit)
            if(!description || !name || ALLVarietiestoSubmit.length===0){
setError('please include all field')
            }else{

            
const formdata = new FormData()

        for(const key of Object.keys(allImage)){
formdata.append('image',allImage[key])
            
        }
        formdata.append('description',description)
        formdata.append('name',name)
        formdata.append('varieties',JSON.stringify(ALLVarietiestoSubmit))
        console.log(formdata)

  axios.post('http://localhost:24434/vasiti/product',formdata)
  .then((data)=>{
      console.log(data.data)
  })
  .catch(error=>{
console.log(error.response.data)
  })
   
}
}
  return (
    <div className="App">
     <h1 className="s">VERSITI file upload</h1>
<h3>{getError}</h3>
<br />

     PRODUCT_NAME:
     <input type='text' value={description} name='description' onChange={onChangeDescription}/>
     <br />
     PRODUCT_DISCRIPTION:
     <input type='text' value={name} name='name' onChange={onChangeDescription}/>
     <br />
     <button onClick={()=>{addvarieties(quantity)}}>add varieties</button>
     <button onClick={upload}>upload  product</button>


     {/* {variety.map((i,eacn)=>( */}
     <div>

         {/* VARIETY {i+1} <br /> <br /> <br /> */}
         PRICE:
     <input type='number' value={price} name='price' onChange={onChangeDescription}/>
     <br />
QUANTITY:
     <input type='number' value={varityquantity} name='quantity' onChange={onChangeDescription}/>
     <br />
     COLOR:
     <input type='text' value={color} name='color' onChange={onChangeDescription}/>
     <br />
     SIZE:
     <input type='number' value={size} name='size' onChange={onChangeDescription}/>
     <br />

         
        <input type="file"  multiple onChange={fileSelect}/>


     </div>
    {/* //  ))} */}
     
     {ALLVarietiestoSubmit.map((each,i)=>
     <div key={i}>
         <h3>variety {i+1}</h3>

<div >   price: {each.price}</div>
<div>   price: {each.price}</div>
<div>   size: {each.size}</div>
<div>   quantity: { each.quantity }</div>
<div>   color: {each.color}</div>
<div>   images: {each.image.map((eachimg,i)=>
    <span key={i}>
        {eachimg}
    </span>
)}</div>

<br />
<br />
<br />

     </div>
     )}


</div>
  );
}

export default App;
