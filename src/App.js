import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('students');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || students state || students array of objects
  const [students, setstudents]=useState(getDatafromLS());

  // input field states
  const [Name, setName]=useState('');
  const [Email, setEmail]=useState('');
  const [Batch, setBatch]=useState('');

  // form submit event
  const handleAddstudentsubmit=(e)=>{
    e.preventDefault();
    // creating an object

    console.log();
    let student={
      Name,
      Email,
      Batch
    }
    setstudents([...students,student]);
    setName('');
    setEmail('');
    setBatch('');
  }

  // delete students from LS
  const studentslist=(Batch)=>{
    const filteredstudents=students.filter((element,index)=>{
      return element.Batch !== Batch
    })
    setstudents(filteredstudents);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('students',JSON.stringify(students));
  },[students])

  return (
    <div className='wrapper'>
      <h1>Student Profiles</h1>
      <p>Add and view  Students</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddstudentsubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={Name}></input>
            <br></br>
            <label>Email</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={Email}></input>
            <br></br>
            <label>Batch

            </label>
            <input type="text" className='form-control' required
            onChange={(e)=>setBatch(e.target.value)} value={Batch}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md' >
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {students.length>0 &&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Batch

                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View students={students} studentslist={studentslist}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setstudents([])}>Remove All</button>
          </>}
          {students.length < 1 && <div>No students are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
