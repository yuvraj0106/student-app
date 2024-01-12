import React from 'react'

const ViewStudent = () => {
  return (
    <div className='p-3 '>
     <form action="">
     <h1 className='text-center py-4'>View Student</h1>
        <div className=" d-flex justify-content-center fs-2">
            <label for="stud_name" className="px-3 ">Enter Roll No:</label>
            <input type="number" className="px-3" id="" placeholder="Roll no.." />
            <button type="submit" className="btn btn-dark px-3 mx-3 ">Submit</button>

          </div>
     </form>
    </div>
  )
}

export default ViewStudent