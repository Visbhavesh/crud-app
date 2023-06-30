import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({students,studentslist}) => {
    
    return students.map(student=>(
        
        <tr key={student.Batch}>
            <td>{student.Batch}</td>
            <td>{student.Name}</td>
            <td>{student.Email}</td>
            <td className='delete-btn' onClick={()=>studentslist(student.Batch)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
