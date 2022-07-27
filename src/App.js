import React from 'react';
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js'
import './App.css'
import data from './data.json'
import Modal from 'react-bootstrap/Modal'
import SelectedBeast from './SelectedBeast.js'


class App extends React.Component{
  // create a constructor function
  constructor (props){
    super(props)
    this.state = {
      beasts: '',
      showModal: false,
      selectBeast:''
    }
  }




  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  }


  handleOnShowModal = (title) => {
    this.setState({
      showModal:true,
      selectBeast: title

    })
  }


  
  render(){
    return(

      <>
      <Header/>
      <Main data= {data}/>
      <Footer />
      <SelectedBeast handleOnShowModal= {this.handleOnShowModal}/>

      <Modal show={this.state.showModal} onHide={this.handleOnHide}>
       <Modal.Header closeButton>
          <Modal.Title>{this.state.selectBeast}</Modal.Title>
        </Modal.Header>
    </Modal>



      </>
    )
  }
}
export default App;