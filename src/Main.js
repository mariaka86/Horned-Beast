import React from "react";
import HornedBeast from './HornedBeast.js';
import Form from 'react-bootstrap/Form';
import './Main.css'
import data from './data.json'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allBeasts: "",
            sortedData: data,

        };
    }
    // this'll probably be in another file.
    handleSubmit = (event) => {
        event.preventDefault();
        let allBeasts = event.target.title.value;
       
    //     this.setState({
    //         title: title,
    //         numberOfHorns: selected,
    //     })
    };





    // fix these conditionals in the filter
    handleSelect = (event) => {
       let selected = event.target.value;
       if (selected === "1"){
        let newData = data.filter((hornsNum)=> hornsNum ===1);
        this.setState ({sortedData:newData});
       }else if (selected === "2"){
        let newData = data.filter((hornsNum)=> hornsNum===2);
        this.setState ({sortedData:newData});
       }else if (selected === "3"){
        let newData = data.filter((hornsNum)=> hornsNum===3);
        this.setState ({sortedData:data});
       }else if (selected === "100") {
            let newHorns = data.filter((hornsNum) => hornsNum === 100);
            this.setState({ StoredData:data });
        } else{
            this.setState({sortedData:data});
        }  
    }; 

        
        


        render(){
            console.log (data);
            // console.log ('sorted data', this.state.sortedData);
            // let beasts = [];
            let allBeasts = this.state.sortedData.map ((newHornedBeast,index)=>{
            //  
                return <HornedBeast
                title={newHornedBeast.title}
                image_url={newHornedBeast.image_url}
                description={newHornedBeast.description}
                handleOnShowModal={this.props.handleOnShowModal}
                key={index} />
                 });

            return (
                <>
                    <div> Forms in React</div>
    
                        <Form onSubmit={this.handleSubmit} />
                        <Form.Group>
                            <label> Number of Horns </label>
                            <Form.Select title="selected" onChange={this.handleSubmit}>
                                <option value="All"> All</option>
                                <option value="1"> 1</option>
                                <option value="2"> 2</option>
                                <option value="3"> 3</option>
                                <option value="100"> 100</option>
                            </Form.Select>
                        </Form.Group><br></br>

                        <button type= "submit"> submit</button>
                        {allBeasts}
                        
                        {/* <HornedBeast
                title={newHornedBeast.title}
                image_url={newHornedBeast.image_url}
                description={newHornedBeast.description}
                handleOnShowModal={this.props.handleOnShowModal}
                key={this.index} />
                    */}
                     {/* {this.state.sortedData.map((beast, idx) => (
            console.log('beastnnnnnnnnn', beast);
            
          ))} */}

                </>

            )

        }

    }


export default Main;