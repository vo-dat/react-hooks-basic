import React, { useState } from 'react';
import PropTypes from 'prop-types';

ListStudent.propTypes = {
    students: PropTypes.array,
};
ListStudent.defaultProps={
    students:[],
}
function ListStudent(props) {
    const {students} = props;
    
    return (
            
           <div className="container">
             

               <table className="table table-bordered">
                    <thead>
                    <tr>
                         
                        <th>FirstName</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        {students.map(student=>(
                            <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
  </table>
           </div>
           
          
           
           

    );
}

export default ListStudent;