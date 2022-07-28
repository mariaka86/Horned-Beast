import React from "react";
import "./HornedBeast.css"
import Button from 'react-bootstrap/Button';



class HornedBeast extends React.Component{
    constructor(props){
        super(props);
            this.state={
                //count favorites
                favorites:0
        };
    };

    handleFavorites= () => {
        //sets state
       this.setState({
        favorites: this.state.favorites + 1

       });
    };

    helperFunctionH3Click = () => {
        // this.props.handleOnShowModal('');
        this.props.handleOnShowModal(this.props.title)
    
      };
      

    render(){
        console.log('props in the hornedbeast',this.props)
        return(
             <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title}/> 
                 <p> {this.props.description}</p>
                 <p>{this.state.favorites} favorites 💖</p>
                 <Button onClick={this.handleFavorites}> Vote on favorite beast </Button>
            
            </div>

        )
    }
}
export default HornedBeast;