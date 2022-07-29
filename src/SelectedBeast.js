import React from 'react';
import { Card, Col, Modal } from 'react-bootstrap';




class SelectedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beasts: '',
            showModal: false,
            selectBeast: ''
        };
    }


    helperFunctionH3Click = () => {
        this.props.handleOnShowModal(this.props.title)
    };



    render() {

        return (
 <>
                <Modal show={this.state.showModal} onHide={this.handleOnHide}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.selectBeast}</Modal.Title>
                        </Modal.Header>
                    </Modal.Dialog>
                    <Modal.Body>
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
                    </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.props.handleClose} variant="secondary">Close</Button> */}
          </Modal.Footer>
        </Modal>
                </>

        )
    };

}
 export default SelectedBeast;