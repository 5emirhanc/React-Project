import { Formik, Field, Form } from 'formik';
import "./App.css"

function App() {
  return (
    <div className='App'>
       <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" placeholder="Jane" />
<br/>
<br/>

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" placeholder="Doe" />
 <br/>
 <br/>

        <label htmlFor="email">Email</label>
        <Field
          
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  )
}

export default App
