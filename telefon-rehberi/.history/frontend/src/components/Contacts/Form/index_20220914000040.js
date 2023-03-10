import { useState } from "react";

function Form({addContact}) {
  const [form, setFrom] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === ""|| form.phone_number ==="") {
        return false;
    }

    addContact([])
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
