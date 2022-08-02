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
        this.props.handleOnShowModal(this.props.main)
    };

   

    render(){
        return(
        <Col className="mt-4">
                        <Card className="h-100 p-3" >
                            <Card.Title onClick={this.helperFunctionEnlargeClick} >{this.props.title}</Card.Title>
                            <Card.Img
                                src={this.props.image_URL}
                                alt={this.props.title}
                                onClick={this.props.addHornedAnimal}
                            />

        
             <main>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title}/> 
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