import React from 'react'

let WelCome = function(props) {
    console.log('name is',props.name);
    return (<h1>Hello,{props.name}</h1>);
}
export default WelCome;