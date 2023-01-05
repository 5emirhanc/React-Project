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
        <button>        {form.fullname}{form.phone_number}
</button>
      </div>

    </div>
  );
}

export default Form;
