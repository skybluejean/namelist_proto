import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from "@material-ui/core/TableCell";

class Information extends React.Component{
          render(){
            return(
              <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image}alt='thumnail'></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell>{this.props.phone}</TableCell>
                <TableCell>{this.props.email}</TableCell>
              </TableRow>
              // <div>
              //   <InformationThumnail id={this.props.id} image={this.props.image}/>
              //   <InformationDetails job={this.props.job} phone={this.props.phone} email={this.props.email}/>
              // </div>
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