import React from "react";

class Information extends React.Component{
          render(){
            return(
              <div>
                <InformationThumnail id={this.props.id} image={this.props.image}/>
                <InformationDetails job={this.props.job} phone={this.props.phone} email={this.props.email}/>
              </div>
            );
          }
        }

class InformationThumnail extends React.Component{
      render(){
          return(
            <div>
              <img src={this.props.image} alt="thumnail"/>
              <h2>{this.props.name}({this.props.id})</h2>
            </div>
          )
      }
}

class InformationDetails extends React.Component{
            render(){
              return(
                <div>
                      <p>{this.props.job}</p>
                      <p>{this.props.phone}</p>
                      <p>{this.props.email}</p>
                </div>
              );
            }
}

export default Information;