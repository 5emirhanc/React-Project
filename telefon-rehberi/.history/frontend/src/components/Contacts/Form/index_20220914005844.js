import { useEffect, useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  const [form, setFrom] = useState(initialFormValues);

  useEffect(() => {
    setFrom(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="txt">
        <input
          name="fullname"
          placeholder="İsim"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Telefon"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button >Kaydet</button>
      </div>
    </form>
  );
}

export default Form;