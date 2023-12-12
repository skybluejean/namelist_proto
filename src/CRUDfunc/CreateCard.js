// import React, { useState } from "react";
// //import { v4 as uuidv4 } from "uuid";

// /*
// const [users, setUsers] = useState([
//   {
//     id: "1",
//     name: "열공",
//     job: "",
//     phone: "",
//     email: "100@hi.com",
//     active: true,
//   },
//   {
//     id: "2",
//     name: "홧팅",
//     job: "",
//     phone: "",
//     email: "ft@hi.com",
//     active: true,
//   },
//   {
//     id: "3",
//     name: "펭수",
//     job: "",
//     phone: "",
//     email: "GP@hi.com",
//     active: false,
//   },
// ]);
// */

// const [inputs, setUsers, setInputs] = useState({
//   id: "",
//   name: "",
//   job: "",
//   phone: "",
//   email: "",
//   // 필요에 따라 썸네일 관련 상태를 추가할 수 있습니다.
// });

// const InputBox = () => {
//   /*
//   const [inputs, setUsers, setInputs] = useState({
//     id: "",
//     name: "",
//     job: "",
//     phone: "",
//     email: "",
//     // 필요에 따라 썸네일 관련 상태를 추가할 수 있습니다.
//   });
//   */

//   const { name, job, phone, email } = inputs;

//   const onChange = (name, value) => {
//     setInputs({ ...inputs, [name]: value });
//   };

//   /*
//   const uploadData = () => {
//     // 여기에 데이터 업로드 로직을 구현하세요.
//     // 예를 들어, 데이터를 콘솔에 출력하는 등의 방식으로 구현할 수 있습니다.
//     console.log("Uploaded Data:", inputs);
//   };
//   */

//   const onCreate = (id) => {
//     const user = {
//       id,
//       name,
//       job,
//       phone,
//       email,
//     };
//     setUsers([...users, user]);
//     setInputs({ username: "", job: "", phone: "", email: "" });
//   };

//   return (
//     <div className="input-Container">
//       <InputName value={name} onChange={(value) => onChange("name", value)} />
//       <InputJob value={job} onChange={(value) => onChange("job", value)} />
//       <InputPhone value={phone} onChange={(value) => onChange("phone", value)} />
//       <InputEmail value={email} onChange={(value) => onChange("email", value)} />
//       <ImageUpload
//         // 필요한 경우에는 썸네일 관련 상태 및 이벤트 핸들러를 추가하세요.
//       />
//       <UploadCardButton onClick={onCreate} />
//     </div>
//   );
// };

// const InputName = ({ value, onChange }) => {
//   return (
//     <div>
//       <b>이름 : </b>
//       <input placeholder="이름" value={value} onChange={(e) => onChange(e.target.value)} />
//     </div>
//   );
// };

// const InputJob = ({ value, onChange }) => {
//   return (
//     <div>
//       <b>직업(직위) : </b>
//       <input placeholder="직업(직위)" value={value} onChange={(e) => onChange(e.target.value)} />
//     </div>
//   );
// };

// const InputPhone = ({ value, onChange }) => {
//   return (
//     <div>
//       <b>핸드폰 : </b>
//       <input placeholder="전화번호" value={value} onChange={(e) => onChange(e.target.value)} />
//     </div>
//   );
// };

// const InputEmail = ({ value, onChange }) => {
//   return (
//     <div>
//       <b>이메일 : </b>
//       <input placeholder="이메일" value={value} onChange={(e) => onChange(e.target.value)} />
//     </div>
//   );
// };

// const ImageUpload = () => {
//   // 썸네일 업로드 로직이 필요한 경우 구현하세요.
//   return <div className="file-Upload-Size">썸네일 : <input type="file" accept="image/*" /></div>;
// };

// const UploadCardButton = ({ onClick }) => {
//   return (
//     <div>
//       <button className="button-Size" onClick={onClick}>
//         Upload Card
//       </button>
//     </div>
//   );
// };

// export default InputBox;
