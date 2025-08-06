import { useState } from "react";
import styles from './MultipleInputForm.module.css'
export function MultipleInputForm()
{
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        address:"",
        email:"",
        gender:"",
        city:"",
        password:""
    });

    const [errors,setErrors] =useState({});

    const handleChange=(e)=>{
        const {name,value} =e.target;
        setFormData(prev=>({
            ...prev,[name]:value
        }));
    }
    const validate=()=>{
       let error ={};
       
       const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[AZ]{2,4}$/i;

      if(!formData.firstname) 
          error.firstname="Please Input First Name";
      if(!formData.lastname)
          error.lastname  ="Please Input Last Name";
      if(!formData.address)
          error.address ="Please Input Address";
      if(!formData.email)
          error.email="Please Input Email";
      else if(emailRegex.test(formData.email))
          error.email="Invalid Email ";
      if(!formData.gender)
          error.gender="Select Gender";
       
      if((!formData.city) || formData.city==="Select")
          error.city ="Please Select City";
      if(!formData.password)
          error.password="Please Input Password";
        return error;
    };

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        let errors=validate();
        if(Object.keys(errors).length>0)
        {
            setErrors(errors);
            return;
        }
        else{
             setErrors({});
        }
        console.log(formData);
        console.log("Form Submitted!");
    };

    return(<>
     <h2> Registration Form </h2>
     <form onSubmit={handleOnSubmit}>
         <div>
            <label> First Name :</label>
            <div>
                <input name="firstname" value={formData.firstname} onChange={handleChange} type="text" />
                {errors.firstname && <div className={styles.error}>
                   {errors.firstname}
                </div>}
            </div>
         </div>
         <div>
            <label> Last Name :</label>
            <div>
                <input name="lastname" type="text" value={formData.lastname} onChange={handleChange} />
                {errors.lastname && <div className={styles.error}>{errors.lastname}</div>}
            </div>
         </div>
         <div>
            <label> Address :</label>
            <div>
                <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
                {errors.address && <div className={styles.error}>{errors.addresss}</div>}
            </div>
         </div>
         <div>
            <label> Gender:</label>
            <div>
                <input name="gender" type="radio" value="Male" checked={formData.gender==="Male"} onChange={handleChange} /> <label>Male</label>
                <input value="FeMale" name="gender" type="radio" checked={formData.gender==="FeMale"} onChange={handleChange} /> <label>FeMale</label>
                {errors.gender && <div className={styles.error}>{errors.gender}</div>}
            </div>
         </div>
         <div>
            <label> Email ID:</label>
            <div>
                <input name="email" type="text" value={formData.value} onChange={handleChange} />
                {errors.email && <div className={styles.error}>{errors.email}</div>}
            </div>
         </div>
         <div>
            <label> City:</label>
            <div>
                <select name="city" value={formData.city} onChange={handleChange}>
                    <option value="Select">Select</option>
                    <option value="Pune">Pune</option>
                    <option value="PCMC">PCMC</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Noida">Noida</option>
                </select>
                {errors.city && <div className={styles.error}>{errors.city}</div>}
            </div>
         </div>
         <div>
            <label> Password:</label>
            <div>
                <input name="password" type="password" value={formData.password} onChange={handleChange} />
                {errors.password && <div className={styles.error}>{errors.password}</div>}
            </div>
         </div>
         <div>
            <br>
          </br>
          <input type="submit" value="Send" />
         </div>
     </form>
    </>);
}