import React from 'react'

const DeparmentForm = () => {
  return (
    <div className='deparmentForm'>
        <form action="#">
        
            <input type="file" id='imageUpload'name='imageUpload'  accept='image.jpg' required/>
            <input type='text' name='name' id='name' placeholder='Full Name' required />
            <input type="text" name='phoneNo' id='phoneNo' placeholder='Phone Number' required />
            <input type="email" name='email' id='email' placeholder='Email Id' required />
            <input type="text" name='designation' id='designation' placeholder='Designation'/>
            <input type="text" name='location' id='location' placeholder='location' required />
            <input type="submit" id='submit' value={'Submit'} />
        </form>
    </div>
  )
}

export default DeparmentForm