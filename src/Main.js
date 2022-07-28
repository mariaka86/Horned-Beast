import React from "react";
import HornedBeast from './HornedBeast.js';
import Form from 'react-bootstrap/Form';
import './Main.css'
import data from './data.json'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            wayToSort: "",
            sortedData: data,

        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let title = event.target.title.value;
        let selected = event.target.selected.value;


        this.setState({
            title: title,
            numberOfHorns: selected,
        })
    }




    handleSelect = (event) => {
       let selected = event.target.value;
       if (selected === "1"){
        let newData = data.filter((number)=> number %2===1);
        this.setState ({sortedData:newData});
       }else if (selected === 2){
        let newData = data.filter((number)=> number %2===0);
        this.setState ({sortedData:newData});
       }else if (selected === 3){
        let newData = data.filter((number)=> number %2===1);
        this.setState ({sortedData:newData});
        } else{
            this.setState({sortedData:data});
        }  
    }; 

        
        


        render(){

            //let beasts = [];
            let beasts = this.state.sortedData.map ((newHornedBeast, index)=>{
                // console.log('mapxxxxxxxxxx',newHornedBeast);
                return <HornedBeast
                title={newHornedBeast.title}
                image_url={newHornedBeast.image_url}
                description={newHornedBeast.description}
                handleOnShowModal={this.props.handleOnShowModal}
                key={this.index} />
                 })

            return (
                <>
                    <div> Forms in React</div>
                    <div beastName="Number of Horns">
                        <Form onSubmit={this.handleSubmit} />
                        <Form.Group>
                            <p> Number of Horns</p>
                            <Form.Select title="selected" onChange={this.handleSelect}>
                                <option value="All"> All</option>
                                <option value="1"> 1</option>
                                <option value="2"> 2</option>
                                <option value="3"> 3</option>
                                <option value="100"> 100</option>
                            </Form.Select>
                        </Form.Group>
                        <button type= "submit"> submit</button>
                        {/* <HornedBeast
                            title={beasts.title}
                            image_url={beasts.image_url}
                            description={beasts.description}
                            handleOnShowModal={this.props.handleOnShowModal}
                            key={this.index} /> */}
                    </div>


                </>

            )

        }

    }


export default Main;