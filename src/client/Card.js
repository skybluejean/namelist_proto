import React from 'react';
import './Card.css'; // CSS 파일을 import 합니다.
import './MainBoxContainer.css'

/*
const Card = () => {
  return (
    <div className="card">
      <div className="name">Jin</div>
      <div className="job-title">Developer</div>
      <div className="contact-info">
        전화: 010-2627-7336<br />
        이메일: herj@euclidspft.co.kr
      </div>
    </div>
  );
};
*/

const Card = () => {
  return (
    <div className='card-Container'>
      <CardThumnail/>
      <CardInfoName/>
      <CardInfoJob/>
      <CardContactPhone/>
      <CardContactEmail/>
    </div>
  );
};

/*
class Card extends React.Component{
  render(){
    return(
      <div>
        <CardThumnail image={this.props.image}/>
        <CardInfo name={this.name.props} job={this.job.props}/>
        <CardContactInfo phone={this.props.phone} email={this.props.email}/>
      </div>
    );
  }
}
*/

/*
class CardInfo extends React.Component{
  render(){
    return(
      <div className='card'>
        <h2 className='name'>{this.props.name}</h2>
        <p className='job-title'>{this.props.job}</p>
      </div>
    )
  }
}
*/

const CardInfoName = () =>{
    return(
      <div className='name'>
        <h2>Jin Her</h2>
      </div>
    )
}

const CardInfoJob = () =>{
  return(
    <div>
      <p className='job-title'>Developer</p>
    </div>
  )
}

/*
class CardContactInfo extends React.Component{
  render(){
    return(
      <div className='contact-info'>
        <p>{this.props.phone}</p>
        <p>{this.props.email}</p>
      </div>
    )
  }
}
*/

const CardContactPhone = () =>{
  return(
    <div className='contact-info'>
        <p>Phone : 010-2627-7336</p>
    </div>
  )
}

const CardContactEmail = () =>{
  return(
    <div className='contact-info'>
        <p>E-mail : herj@euclidsoft.co.kr</p>
    </div>
  )
}

/*
class CardThumnail extends React.Component{
  render(){
      return(
        <div>
          <img src={this.props.image} alt="thumnail"/>
        </div>
      )
  }
}
*/

const CardThumnail = () =>{
  return(
   <div>
    <img className='thumnail-size' src={process.env.PUBLIC_URL + '/imagesFromNaver.jpg'}/>
  </div>
  )
}

export default Card;
