import React from "react";
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






    render(){
        console.log('props in the hornedbeast',this.props)
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title}/> 
                 <p> {this.props.description}</p>
                 <p>{this.state.favorites} favorites </p>
                 <p onClick={this.handleFavorites}> Click on favorite beast</p>
            </div>

        )
    }
}
export default HornedBeast;