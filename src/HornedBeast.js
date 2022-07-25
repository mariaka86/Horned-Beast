import React from "react";
class HornedBeast extends React.Component{
    render(){
        console.log('props in the hornedbeast',this.props)
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title}/> 
                 <p> {this.props.description}</p>
            </div>

        )
    }
}
export default HornedBeast;