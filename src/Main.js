import { render } from "@testing-library/react";
import React from "react";
import HornedBeast from './HornedBeast.js'


class Main extends React.Component
render(){
return (
    <main>
        <HornedBeast title = "Griffin" imageUrl = "large" description="a roaring griffin"/>
        <HornedBeast title = "Rhinocerus" imageUrl= "large" description = "a charging rhinocerus"/>


    </main>

    )
}
export default Main;