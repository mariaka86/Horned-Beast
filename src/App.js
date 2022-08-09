import React from 'react';
import './App.css'
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js'
// import SelectedBeast from './SelectedBeast.js'
import data from './data.json'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';


class App extends React.Component{
  // create a constructor function
  constructor (props){
    super(props)
    this.state = {
      beast: '',
      showModal: false,
      selectBeast:{},
      sortedData:data
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
  handleSelect = (event) => {
    let selected = event.target.value;
    if (selected === "1"){
     let newData = data.filter(hornsNum=> hornsNum===1);
     this.setState ({sortedData:newData});
    }else if (selected === "2"){
     let newData = data.filter(hornsNum=> hornsNum===2);
     this.setState ({sortedData:newData});
    }else if (selected === "3"){
     let newData = data.filter(hornsNum=> hornsNum===3);
     this.setState ({sortedData:newData});
    }else if (selected === "100") {
         let newData = data.filter(hornsNum => hornsNum===100);
         this.setState({sortedData:newData});
     } else{
         this.setState({sortedData:data});
     }  
 }; 


  
  render(){
    let numbers= this.state.sortedData.map((hornsNum,index)=>{
      return hornsNum;
    })
    return(

      <>
      <Header/>
                    <Form>
                        <Form.Group>
                            <label> Number of Horns </label>
                            <Form.Select title="selected" onChange={this.handleSelect}>
                                <option value="All"> All</option>
                                <option value="1"> 1</option>
                                <option value="2"> 2</option>
                                <option value="3"> 3</option>
                                <option value="100"> 100</option>
                            </Form.Select>
                        </Form.Group><br></br>
                       </Form>

      <Main
      addHornedAnimal = {this.addHornedAnimal}
      data= {numbers}
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