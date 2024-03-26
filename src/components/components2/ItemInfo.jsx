import React from 'react';
const ITEM_INFO = [
    {
        title: "Ingredients:",
        content: "Apple, Kale, Spinatch, Cinnamon Powder, Lemon"
    },
    {
        title: "Calories:",
        content: "245 Kcals"
    },
    {
        title: "Nutrition Facts:",
        content: "Enim dictum magna nunc integer quis turpis vitae amet. Amet commodo vitae tempor risus cursus semper. Fermentum tristique pharetra magna suspendisse porta felis."
    },
    {
        title: "Best with:",
        content: "Any Kinds of Nut Butter, Cabages, Carrot"
    },
    {
        title: "Preservation:",
        content: "Can be in room temperature for 2 days before being opening. After being opened, must keep it in the refrigerator and can go upto 3 days."
    }
]

export default function ItemInfo() {
  return (
    <div className='itemInfos'>
       { 
       ITEM_INFO.map((info, index) => (
            <div className='item-container' key={index}>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
            </div>
       ))}
    </div>
  )
}
