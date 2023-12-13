//import React, { useState } from "react";
import React from 'react';
import './InputBox.css'
import './MainBoxContainer.css'

const InputBox = () => {
  /*
  const [inputs, setInputs] = useState({
    name: "",
    job: "",
    phone:"",
    email:""
  });
  
  const { name, job, phone, email } = inputs; // 비구조화 할당을 통해 값 추출
  
  const displayText = (e) => {
    const { value, name } = e.target; // e.target에서 value와 name 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사(불변성을 위해)
      [name]: value, // name 키를 가진 값을 value 로 변경
    });
  };
  
  
  const onReset = (e) => {
    setInputs({
      name: "",
      job: "",
      phone:"",
      email:""
    });
  };
 */
  
  /*

  return (
    <div>
      <input name="id" onChange={displayText} value={id} placeholder="아이디" />
      <input
        name="nickname"
        onChange={displayText}
        value={nickname}
        placeholder="닉네임"
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값 : {id}({nickname})
        </b>
      </div>
    </div>
  );

  */

  return (
    <div className="input-Container">
      <InputName/>
      <InputJob/>
      <InputPhone/>
      <InputEmail/>
      <ImageUpload/>
      <UploadCardButton/>
    </div>
  );
};

const InputName = () =>{
  return(
    <div>
      <b>이름 : </b>
      {/* <input name="name" onChange={displayText} value={name} placeholder="이름" /> */}
      <input placeholder="이름" />
    </div>
  )
}

const InputJob = () =>{
  return(
    <div>
      <b>직업(직위) : </b>
      {/* <input name="job" onChange={displayText} value={job} placeholder="직업(직위)"/> */}
      <input placeholder="직업(직위)"/>
    </div>
  )
}

const InputPhone = () =>{
  return(
    <div>
      <b>핸드폰 : </b>
      {/* <input name="phone" onChange={displayText} value={phone} placeholder="전화번호"/> */}
      <input placeholder="전화번호"/>
    </div>
  )
}

const InputEmail = () =>{
  return(
    <div>
      <b>이메일 : </b>
      {/* <input name="email" onChange={displayText} value={email} placeholder="이메일"/> */}
      <input placeholder="이메일"/>
    </div>
  )
}

const ImageUpload = ()=> {
  /*
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const onchangeImageUpload = (e)=> {
     const {files} = e.target;
     const uploadFile = files[0];
     const reader = new FileReader();
     reader.readAsDataURL(uploadFile);
     reader.onloadend = ()=> {
     setUploadImgUrl(reader.result);
  }
}
*/
  return(
    <div className='file-Upload-Size'>
      <b>썸네일 : </b>
      <input type = "file" accept = "image/*"/>
    </div>
  )
}

const UploadCardButton = () =>{

  const uploadData = (e) => {
  
  }

  return(
    <div>
      <button className='button-Size' onClick={uploadData}>Upoload Card</button>
    </div>
  )
}

export default InputBox;