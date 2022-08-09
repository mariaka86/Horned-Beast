import React from "react";
import HornedBeast from './HornedBeast.js';
// import Form from 'react-bootstrap/Form';
import './Main.css'
import data from './data.json'
import {Container,Row} from "react-bootstrap"


class Main extends React.Component{

        
        


        render(){
            console.log (data);
            // console.log ('sorted data', this.state.sortedData);
            // let beasts = [];
            let allBeasts = this.props.data.map ((newHornedBeast,index)=>{
            //  
                return <HornedBeast
                title={newHornedBeast.title}
                image_url={newHornedBeast.image_url}
                description={newHornedBeast.description}
                handleOnShowModal={this.props.handleOnShowModal}
                key={index} />
                 });
                 return(
                    <>
                    <Container>
                      <Row lg={3}>
                        {allBeasts}
                      </Row>
                    </Container>
                    </>
                  );
                }
              }
     
    

export default Main;