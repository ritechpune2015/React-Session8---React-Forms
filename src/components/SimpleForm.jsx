import { useState } from "react";

let SimpleForm=()=>{
 const [UserName,setUserName]=useState('');
 const [Address,setAddress] =useState('');
 const [isChecked,setIsChecked]=useState(false);
 const [gender,setGender] =useState('');
 const [city,setCity] =useState('');
 let handleSubmit=(e)=>{
         e.preventDefault();
        console.log(`User Name: ${UserName}`);
        console.log(`Address:${Address}`);
        console.log(`Is Active:${isChecked}`);
        console.log(`Gender:${gender}`);
        console.log(`Cit:${city}`);
        console.log("Form Submitted!");
    }
 return( <>
 <h1> Simple Form </h1>
 <form onSubmit={handleSubmit}>
    <div>
        Enter Name: 
        <div>
<input type="text" value={UserName} onChange={(e)=>setUserName(e.target.value)} />
        </div>
    </div>
    <div>
        Address:
    
    <div>
        <textarea value={Address} onChange={(e)=>setAddress(e.target.value)}>
        </textarea>
    </div>
    </div>
    <div>
        IS Active:
        <div>
           <input checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)} type="checkbox" />
        </div>
    </div>
    <div>
         Gender:
         <div>
            <input checked={gender==='Male'} onChange={(e)=>setGender(e.target.value)}   value="Male" type="radio" /> <label> Male </label>
            <input checked={gender=="FeMale"} onChange={(e)=>setGender(e.target.value)} value="FeMale" type="radio" /> <label> FeMale</label>
         </div>
    </div>
    <div>
        select City:
        <div>
            <select value={city} onChange={(e)=>setCity(e.target.value)}>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
            </select>
        </div>
    </div>
    <div>
<button>Submit</button> 
    </div>
 </form>
 </>);
}

export default SimpleForm;