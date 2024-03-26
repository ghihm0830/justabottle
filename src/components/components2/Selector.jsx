import React, { useState, useEffect, useRef } from 'react';
const LIST = [
    { value: ""},
    { value: "Whey Powder"},
    { value: "Chia Seeds" },
    { value: "Quinoas" },
    { value: "Hemp Seeds" },
    { value: "Casein Powder" },
]

export default function Selector(props) {
    const [numOfItemValue, setNumOfItemValue] = useState(''); 
    const [addOnValue, setAddOnValue] = useState(''); 

    const numOfItemRef = useRef();
    const addOnRef = useRef();

    //render the page only when it is roaded first and values are selected.
    useEffect(() => {
        numOfItemRef.current = numOfItemValue;
        addOnRef.current = addOnValue;
        console.log('item:', numOfItemRef.current);
        console.log('item:', addOnRef.current);
    },[numOfItemRef.current, addOnRef.current])

    const numOfItemChange = (e) => {
        setNumOfItemValue(e.target.value);
    }

    const addOnValueChange = (e) => {
        setAddOnValue(e.target.value);
    }

    // Disable button if no option is selected for either selector
    const isButtonDisabled = (numOfItemValue === '' || numOfItemValue === '0') || addOnValue === '';

    // Debugging statements
    console.log("isButtonDisabled:", isButtonDisabled);

    return (
    <div className='selector-container'>

        <div className='selectors'>
            <div>
                <h3 className='selector-title'>Number of Items</h3>
                <div className='selector'>
                    <select value={numOfItemValue} onChange={numOfItemChange} ref={numOfItemRef}>
                    {
                        [...Array(21)].map((_, i) => i) //if [array(20)] => i + 1 option starts from 1-20
                            .map(i => <option key={i} value={i}>{i}</option>)
                    }
                    </select>
                </div>
            </div>
                
            <div>
                <h3 className='selector-title'>Add Ons</h3>
                <div className='selector'>
                    <select value={addOnValue} onChange={addOnValueChange} ref={addOnRef}>
                    {
                        LIST.map((list) => (
                        <option key={list.value} value={list.value}>{list.value}</option>
                    ))}
                    </select>
                </div>

            </div>
        </div>
        <button className='detail-button' type='submit' disabled={isButtonDisabled}>
        Proceed to Order
        </button>
    </div>
    )
}
