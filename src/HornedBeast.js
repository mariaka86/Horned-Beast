import React from "react";
import "./HornedBeast.css"
import {Card,Col, Button} from 'react-bootstrap';



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
   
    helperFunctionEnlargeClick = () => {
        this.handleFavorites();
        this.props.handleOnShowModal(this.props)
    };

   

    render(){
        return(
        <Col className="mt-4">
                        <Card className="h-100 p-3" >
                            <Card.Title onClick={this.helperFunctionEnlargeClick} ></Card.Title>
                           
             <main>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} onClick={this.helperFunctionEnlargeClick}/> 
                 <p> {this.props.description}</p>
                 <p>{this.state.favorites} favorites 💖</p>
                 <Button onClick={this.handleFavorites}> Vote on favorite beast </Button>
            
            </main>
            </Card>
            </Col>

        )
    }
}
export default HornedBeast;