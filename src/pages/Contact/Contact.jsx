import React, { useState } from 'react';
import './contact.scss';
import { toast } from 'react-toastify'
const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const handInputValue = (e) => {
    setInput((preValue) => ({
      ...preValue, 
      [e.target.name] : e.target.value
    }));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if(!input.name || !input.email || !input.password || !input.message){
      toast("Fields Must Be Empty !!!!");
    }else{
      toast('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        });
    }
  }
  
  return (
    <>
       <div className="container container-contact-form">
        <h2>contact us page</h2>
        <hr />
        <p>{name}</p>
        <div className="contact-form">
          <div className="react-form">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="User Name" name="name"
                value={input.name} onChange={handInputValue}
              />
              <input type="text" name="email" placeholder="Email" value={input.email} onChange={handInputValue} />
              <input
                type="text" name="password"
                placeholder="Password"
                value={input.password}
                onChange={handInputValue}
              />
              <input type="text" name="message" placeholder="Message" value={input.message} onChange={handInputValue} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
