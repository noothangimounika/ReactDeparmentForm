import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{marginTop:'50px',marginLeft:'300px',height:'300px'}}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button style={{background:'blue',color:'white', marginTop:'20px',width:'200px',height:'50px',borderRadius:'10px',fontSize:'20px'}}
        type="submit" >Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>Form Submitted</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleForm;
