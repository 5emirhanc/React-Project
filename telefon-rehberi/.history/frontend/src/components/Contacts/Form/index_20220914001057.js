import { useState } from "react";

const initial
function Form({addContact,contacts}) {
  const [form, setFrom] = useState();

  const onChangeInput = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === ""|| form.phone_number ==="") {
        return false;
    }

    addContact([...contacts,form])

    setFrom({fullname:"",phone_number:""})
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
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
