import React, { useState } from "react";
import Items from '../Component/Items';

export default function Body() {

    const [items, setItems] = useState("");
    const [lists, setLists] = useState([]);
    
    function inputChange(e) {
        let value = e.target.value;
        // let name = e.target.name;
        setItems(value)
        console.log(value);
    };

    function ClickEvent() {
        setLists((preData) => {
            return [...preData,items]
        });

        setItems("");
    };

    function Dleteted(id) {
        setLists((delItem) => {
            return delItem.filter((arrEle, index) => {
                return index !== id;
            })
        })
    }

    return (
    <>    
        <div>
            <input onChange = {inputChange} value = {items} type="text" placeholder="Items" autocomplete = "off" />
            <button onClick = {ClickEvent}>Click me</button>
        </div>
        <br />
        <br />
        <div>
            <ul>
                {lists.map((valData,index) => {
                    return <Items text = {valData} key = {index} id = {index} onSeclat = {Dleteted} />
                })}
            </ul>
        </div>
    </>    
    )
}
