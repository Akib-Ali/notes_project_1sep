import axios from "axios"
import { useState } from "react"
// import  "./employeecreate.css"
import "./createnotes.css"



export const CreateNotes=()=>{

const [formdata,setformdata]= useState({
    title_note:"",
    date:"",
    decription:"",
    
 
})



const API = "https://doctor-patient123.herokuapp.com/users";
const [data,setData]= useState([])

const handleChange=(e)=>{
    const {name,value}= e.target;
    setformdata({
        ...formdata,
        [name]:value,
    })
}



const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post(`${API}`, formdata).then(()=>{
        setformdata({
            title_note:"",
            date:"",
            decription:"",

        })
    })
}




    return(
        <div>
        <h1 className="heading">Create a Notes</h1>

        <form onSubmit={handleSubmit} className="addemployee">
            <div>
                Title:{}  <br></br>
                <input type="text"  name="title_note" className="title" placeholder="Enter Title" onChange={handleChange}/>
            </div>   <br></br>


            <div>
                Date:{} <br></br>
                 <input type="date" name="date" className="date" placeholder="Enter your Date" onChange={handleChange}/> 
                
            </div> <br></br>

            <div>
                Description:{} <br></br>
                <input type="text"  name="decription" className="description" placeholder="write description" onChange={handleChange}/>
            </div>  <br></br>


            
{/* 
            <div>
                Contact Number:{} <br></br>
                <input type="number" name="mobile" className="mobile" placeholder="Enter your Mobile" onChange={handleChange}/>
            </div> <br></br>

            <div>
                Image Url:{} <br></br>
                <input type="text" name="image" className="image" placeholder="Enter your Image Url" onChange={handleChange}/>
            </div> <br></br>



            <div>
                Department:{} <br></br>
                <input type="text" name="department" className="department" placeholder="Enter your Department" onChange={handleChange}/>
            </div><br></br>


            <div>
                Salary:{}<br></br>
                <input type="text" name="salary" className="salary" placeholder="Enter your Salary" onChange={handleChange}/>
            </div><br></br><br></br> */}



            <input className="submit" type="submit" value="Submit" />



        </form>

        </div>
    )
}
