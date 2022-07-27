import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'



class SelectedBeast extends React.Component {
    constructor (props){
        super(props)
        this.state = {
          beasts: '',
          showModal: false,
          selectBeast:''
        }
    }
}

helperFunctionH3Click = () => {
    this.props.handleOnShowModal(this.props.title)
};



render() {

     return(
 <>
    <Col className="mt-4">
        <Card className="h-100 p-3" >
            <Card.Title onClick={this.helperFunctionH3Click} >{this.props.title}</Card.Title>
         <Card.Img  
         src={this.props.image_URL}
          alt={this.props.title}
          onClick={this.props.favorites}
        />
     </Card>
     </Col>
        
     </>
    
        )};


export default SelectedBeast;