import {useState} from "react";

function Form() {
    const [form , setFrom]=useState({fullname:"",phone_number:""});

    const onChangeInput =(e)=>{
        setFrom({...form ,[e.target.name]: e.target.value });
    }
  return (
   
    <div>
      <div>
        <input name="fullname" placeholder="Full Name"/>
      </div>
      <div>
        <input name="phone_number" placeholder="Phone Number" />
      </div>
      <div>
        <button>Add</button>
        {form.}}{}
      </div>

    </div>
  );
}

export default Form;
