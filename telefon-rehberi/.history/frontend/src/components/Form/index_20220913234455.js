import {useState} from "react";

function Form() {
    const [form , setFrom]=useState({});
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
      </div>

    </div>
  );
}

export default Form;