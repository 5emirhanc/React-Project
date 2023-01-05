import {useState} from "react";

function Form() {
    const [form , setFrom]=useState({fullname:"",phone_number:""});

    const onChangeInput =(e)=>{
        setFrom({...form ,[e.target.name]: e.target.value });
    };



  return (
   
    <div>
      <div>
        <input name="fullname" placeholder="Full Name" onChange={onChangeInput}/>
      </div>
      <div>
        <input name="phone_number" placeholder="Phone Number"  onChange={onChangeInput} />
      </div>
      <div>
        <button>Add</button>
       {}
      </div>

    </div>
  );
}

export default Form;
