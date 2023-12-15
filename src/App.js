
///////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

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
//         axios.get('http://localhost:3001/')  // 서버 주소에 맞게 수정
//             .then(response => setUsers(response.data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // 폼 데이터를 서버로 전송
//         axios.post('http://localhost:3001/', formData)  // 서버 주소에 맞게 수정
//             .then(response => {
//                 console.log(response.data);
//                 // 사용자 목록을 갱신
//                 axios.get('http://localhost:3001/')  // 서버 주소에 맞게 수정
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
//               <form onSubmit={handleSubmit}>
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
//               </form>

//             <hr />

//             {/* 사용자 목록 출력 */}
//               {users.map(user => (
//                 <div key={user.id}>
//                   <p>ID: {user.id}</p>
//                   <p>Name: {user.name}</p>
//                   <p>Job Title: {user.job_title}</p>
//                   <p>Phone Number: {user.phone_number}</p>
//                   <p>Email: {user.email}</p>
//                   <p>Image Path: {user.image_path}</p>
//                   <hr />
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
          <div className='main-Container-InputBox'>
            <h2 className='title-Design-Input'>Name Card Information Input</h2>
            {/* 사용자 정보 입력 폼 */}
              <form onSubmit={handleSubmit} className="input-Container">
                <div className='label-Input-Container'>
<<<<<<< HEAD
                <label className='input-Label-Design'>이름: </label>
                <input type="text" className='input-Size' name="name" onChange={handleChange} value={formData.name} required /><br />
                </div>
                <div className='label-Input-Container'>
                <label className='input-Label-Design'>직업(직위): </label>
                <input type="text" className='input-Size' name="job_title" onChange={handleChange} value={formData.job_title} /><br />
                </div>
                <div className='label-Input-Container'>
                <label className='input-Label-Design'>전화번호: </label>
                <input type="text" className='input-Size' name="phone_number" onChange={handleChange} value={formData.phone_number} /><br />
                </div>
                <div className='label-Input-Container'>
                <label className='input-Label-Design'>이메일: </label>
=======
                <label className='input-Label-Design'>Name: </label>
                <input type="text" className='input-Size' name="name" onChange={handleChange} value={formData.name} required /><br />
                </div>
                <div className='label-Input-Container'>
                <label className='input-Label-Design'>Job Title: </label>
                <input type="text" className='input-Size' name="job_title" onChange={handleChange} value={formData.job_title} /><br />
                </div>
                <div className='label-Input-Container'>
                <label className='input-Label-Design'>Phone Number: </label>
                <input type="text" className='input-Size' name="phone_number" onChange={handleChange} value={formData.phone_number} /><br />
                </div>
                <div className='label-Input-Container'>
                <label className='input-Label-Design'>Email: </label>
>>>>>>> 9cda0e295ef4ca1e239539704600cc4023f0216b
                <input type="text" className='input-Size' name="email" onChange={handleChange} value={formData.email} /><br />
                </div>
                {/* <label>Image Path: </label>
                <input type="file" name="image_path" className='file-Upload-Size' onChange={handleChange} value={formData.image_path} /><br /> */}
<<<<<<< HEAD
                <button type="submit" className='button-Size-Input'>등록</button>
                <button type="submit" className='button-Size-Input'>재등록</button>
=======
                <button type="submit" className='button-Size-Input'>Upload</button>
>>>>>>> 9cda0e295ef4ca1e239539704600cc4023f0216b
              </form>
              {/* <form className='RnD-Container'>
              <button type="revise" className='button-Size'>Revise</button>
              <button type="delete" className='button-Size'>Delete</button>
              </form> */}
          </div>

            {/* 사용자 목록 출력 */}
            <div className='main-Container-CardList'>
            <h2 className='title-Design-View'>Name Card List</h2>
              {users.map(user => (
                <div key={user.id}>
                  <div className='card-editButton-Container'>
                    <div className='card-Container'>
                      {/* <p>ID: {user.id}</p> */}
                      {/* <img src={user.image_path} className='thumnail-size' alt="thumnail"/> */}
                      <p className='name'>{user.name}</p>
<<<<<<< HEAD
                      <p className='job-title'>직업(직위): {user.job_title}</p>
                      <p className='contact-info'>핸드폰 번호: {user.phone_number}</p>
                      <p className='contact-info'>Email: {user.email}</p>
                    </div>
                    <form className='RnD-Container'>
                      <button type="revise" className='button-Size'>수정</button>
                      <button type="delete" className='button-Size'>삭제</button>
=======
                      <p className='job-title'>Job Title: {user.job_title}</p>
                      <p className='contact-info'>Phone Number: {user.phone_number}</p>
                      <p className='contact-info'>Email: {user.email}</p>
                    </div>
                    <form className='RnD-Container'>
                      <button type="revise" className='button-Size'>Revise</button>
                      <button type="delete" className='button-Size'>Delete</button>
>>>>>>> 9cda0e295ef4ca1e239539704600cc4023f0216b
                    </form>
                  </div>
                </div>
            ))}
              </div>
        </div>
    );
};

export default App;