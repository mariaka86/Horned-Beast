import React from "react";
class HornedBeast extends React.Component{
    constructor(props){
        super(props);
            this.state={
                favorites:0
        };
    };

    handleFavorites= () => {
       this.setState({
        favorites: this.state.favorites + 1

       });
    };






    render(){
        console.log('props in the hornedbeast',this.props)
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title}/> 
                 <p> {this.props.description}</p>
                 <p>{this.state.favorites} favorites </p>
            </div>

        )
    }
}
export default HornedBeast;