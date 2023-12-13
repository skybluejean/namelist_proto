// import React from 'react';
// import InputBox from "./client/InputBox.js";
// //import React, { Component } from "react";
// import Card from './client/Card.js';
// import RnDButtons from './client/ButtonForR&D.js';
// //import './MainBoxContainer.css'

// const App = () => {
//   return (
//     <div className='main-Container'>
//       <div className='main-Container-CardList'>
//       <Card />
//       </div>
//       <div className='main-Container-InputBox'>
//       <InputBox/>
//       <RnDButtons/>
//       </div>
//     </div>
//   );
// };

// export default App;


//////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BoardList from './client/InputBox.js'

// const App = () => {
//     const [users, setUsers] = useState([]);
//     const [formData, setFormData] = useState({
//         name: '',
//         job_title: '',
//         phone_number: '',
//         email: '',
//         image_path: ''
//     });

//     useEffect(() => {
//         // 서버로부터 사용자 목록을 가져옴
//         axios.get('/user')
//             .then(response => setUsers(response.data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // 폼 데이터를 서버로 전송
//         axios.post('/user', formData)
//             .then(response => {
//                 console.log(response.data);
//                 // 사용자 목록을 갱신
//                 axios.get('/user')
//                     .then(response => setUsers(response.data))
//                     .catch(error => console.error('Error fetching users:', error));
//             })
//             .catch(error => console.error('Error creating user:', error));
//     };

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     return (
//         <div>
//             <h2>Name Card Board</h2>
//             {/* 사용자 정보 입력 폼 */}
//             <form onSubmit={handleSubmit}>
//                 <label>Name: </label>
//                 <input type="text" name="name" onChange={handleChange} value={formData.name} required /><br />
//                 <label>Job Title: </label>
//                 <input type="text" name="job_title" onChange={handleChange} value={formData.job_title} /><br />
//                 <label>Phone Number: </label>
//                 <input type="text" name="phone_number" onChange={handleChange} value={formData.phone_number} /><br />
//                 <label>Email: </label>
//                 <input type="text" name="email" onChange={handleChange} value={formData.email} /><br />
//                 <label>Image Path: </label>
//                 <input type="file" name="image_path" onChange={handleChange} value={formData.image_path} /><br />
//                 <button type="submit">Submit</button>
//             </form>

//             <hr />

//             {/* 사용자 목록 출력 */}
//             {users.map(user => (
//                 <div key={user.id}>
//                     <p>ID: {user.id}</p>
//                     <p>Name: {user.name}</p>
//                     <p>Job Title: {user.job_title}</p>
//                     <p>Phone Number: {user.phone_number}</p>
//                     <p>Email: {user.email}</p>
//                     <p>Image Path: {user.image_path}</p>
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './client/MainBoxContainer.css'
import './client/InputBox.css';
import './client/Card.css';
import './client/ButtonForR&D.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        job_title: '',
        phone_number: '',
        email: '',
        image_path: ''
    });

    useEffect(() => {
        // 서버로부터 사용자 목록을 가져옴
        axios.get('http://localhost:3001/')  // 서버 주소에 맞게 수정
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

    const handleSubmit = (e) => {
        e.preventDefault();

        // 폼 데이터를 서버로 전송
        axios.post('http://localhost:3001/', formData)  // 서버 주소에 맞게 수정
            .then(response => {
                console.log(response.data);
                // 사용자 목록을 갱신
                axios.get('http://localhost:3001/')  // 서버 주소에 맞게 수정
                    .then(response => setUsers(response.data))
                    .catch(error => console.error('Error fetching users:', error));
            })
            .catch(error => console.error('Error creating user:', error));
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='main-Container'>
          <h2 className='title-Design'>Name Card Board</h2>
            {/* 사용자 정보 입력 폼 */}
              <form onSubmit={handleSubmit} className="input-Container">
                <label>Name: </label>
                <input type="text" name="name" onChange={handleChange} value={formData.name} required /><br />
                <label>Job Title: </label>
                <input type="text" name="job_title" onChange={handleChange} value={formData.job_title} /><br />
                <label>Phone Number: </label>
                <input type="text" name="phone_number" onChange={handleChange} value={formData.phone_number} /><br />
                <label>Email: </label>
                <input type="text" name="email" onChange={handleChange} value={formData.email} /><br />
                <label>Image Path: </label>
                <input type="file" name="image_path" className='file-Upload-Size' onChange={handleChange} value={formData.image_path} /><br />
                <button type="submit" className='button-Size-Input'>Upload</button>
              </form>
              <form className='RnD-Container'>
              <button type="revise" className='button-Size'>Revise</button>
              <button type="delete" className='button-Size'>Delete</button>
              </form>

            <hr />

            {/* 사용자 목록 출력 */}
              {users.map(user => (
                <div className='card-Container' key={user.id}>
                  <p>ID: {user.id}</p>
                  <p>Name: {user.name}</p>
                  <p>Job Title: {user.job_title}</p>
                  <p>Phone Number: {user.phone_number}</p>
                  <p>Email: {user.email}</p>
                  <p>Image Path: {user.image_path}</p>
                  <hr />
                </div>
            ))}
        </div>
    );
};

export default App;