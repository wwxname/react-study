import React, {Component} from 'react';

let _input = {value:'default'}

function SimpleFunForm(props) {



    let handleSubmit = function (event) {
        console.log(_input)
        //通过this.input 获取到input元素的值
        alert('The title you submitted was ' +
            _input.value);
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                title:
                <input type="text" defaultValue={'default'}  ref={(input) => _input =
                    input}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );

}

export default SimpleFunForm