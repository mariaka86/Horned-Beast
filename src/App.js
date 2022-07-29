import React from 'react';
import './App.css'
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js'
import SelectedBeast from './SelectedBeast.js'


class App extends React.Component{
  // create a constructor function
  constructor (props){
    super(props)
    this.state = {
      beasts: '',
      showModal: false,
      selectBeast:{}
    }
  }


  handleOnShowModal = (title) => {
    this.setState({
      showModal:true,
      selectBeast: title

    })
  }

  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  }


  
  render(){
    return(

      <>
      <Header/>
      <Main
      handleOnShowModal={this.handleOnShowModal}
      />
      <Footer />
      <SelectedBeast handleOnShowModal= {this.handleOnShowModal}/>

    
      </>
    )
  }
}
export default App;