import React from 'react'

const Addstudent = () => {
  return (
    <div className='d-flex justify-content-center    '>
    <div className='p-3 w-50 border border-success '>
      <h1 className='text-center my-4 border  '>Add Student</h1>

      <form >
  <div class="mb-3">
    <label for="stud_name"  className="form-label">Student Name</label>   
    <input type="text" className="form-control" id="stud_name" placeholder="Student Name"/> 
  </div>
  <div class="mb-3">
    <label htmlFor="stud_email" class="form-label">Student Email</label>
    <input type="email" className="form-control" id="stud_email" placeholder="Student Email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div class="mb-3">
    <label for="stud-mobile" className="form-label">Student Mobile</label>
    <input type="text" className="form-control" id="stud_mobile" placeholder='Mobile Number'/>
  </div>
  <div class="mb-3">
    <label for="stud-city" className="form-label">Student city</label>
    <input type="text" className="form-control" id="stud_mobile" placeholder='Student City'/>
  </div>


  <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary  ">ADD STUDENT</button>
</form>
    </div>
    </div>
  )
}

export default Addstudent
