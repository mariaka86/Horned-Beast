import React from 'react';
import './App.css'
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js'
// import SelectedBeast from './SelectedBeast.js'
import data from './data.json'
import Modal from 'react-bootstrap/Modal'


class App extends React.Component{
  // create a constructor function
  constructor (props){
    super(props)
    this.state = {
      beast: '',
      showModal: false,
      selectBeast:{}
    }
  }



  addHornedAnimal= ()=>{
    this.setState({
      hornedAnimal : this.state.hornedAnimal + '💖'
    });
  }

  handleOnShowModal = (name) => {
    this.setState({
      showModal:true,
      beast: name

    })
  }

  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  };


  
  render(){
    return(

      <>
      <Header/>
      <Main
      addHornedAnimal = {this.addHornedAnimal}
      data= {data}
      handleOnShowModal= {this.handleOnShowModal}
      />
      <Footer />
      <Modal show ={this.state.showModal} onHide = {this.handleOnHide}>
        <Modal.Header closeButton>
      <Modal.Title>{this.state.beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <img src={this.state.beast.image_url} alt={this.state.beast.title}/> 
        <p>{this.state.beast.description}</p>
      </Modal.Body>
    </Modal> 
      </>
    )
  }
}
export default App;