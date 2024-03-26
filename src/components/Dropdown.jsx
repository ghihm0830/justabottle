import React, { useState, useRef, useEffect } from 'react';
import { searchFilter } from './Filter';
import SearchIcon from '@mui/icons-material/Search';

const list = [
  { id: 1, name: 'Green Smoothie', type: 'Vegetables' },
  { id: 2, name: 'Berry Smoothie', type: 'Fruits' },
  { id: 3, name: 'Purple Smoothie', type: 'Fruits' },
  { id: 4, name: 'Protein Smoothie', type: 'Nuts' },
  { id: 5, name: 'Clean Smoothie', type: 'Vegetables' },
];

const DropdownItems = () => {
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  // click away listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => document.removeEventListener('mousedown', handleClick, false);
  }, []); //turn off the list on anywhere in window

  const handleClick = e => {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }
    setVisible(false);
  };

  const handleChange = e => {
    setSearchValue(e.target.value);
    if (!visible) {
      setVisible(true);
    }
  };

  const selectItem = item => {
    setSearchValue(item.name);
    setSelectedItem(item.id);
    setVisible(false);
  };

  // const selectChange = e => {
  //   console.log(e.target.value);
  // };
  return (
    <div className="search-container">
      <div tabIndex="0" className="input_container">
        <div className='input-wrapper'>
          <SearchIcon id="search-icon"/>
          <input
            className="input"
            type="text"
            placeholder="Search Text"
            value={searchValue}
            onChange={handleChange}
            onFocus={() => {
              // if (searchValue) {
              setVisible(true);
              // };
            }}
          />
        </div>
      </div>
      
      <div ref={dropdownRef} className={`dropdown ${visible ? 'v' : ''}`}>
        {visible && (
          <ul style={{padding: "0"}}>
            {!list && (
              <li key="zxc" className="dropdown_item">
                no result
              </li>
            )}
            {/* you can remove the searchFilter if you get results from Filtered API like Google search */}
            {list &&
              searchFilter(searchValue, list).map(x => (
                <li
                  key={x.id}
                  onClick={() => selectItem(x)}
                  className="dropdown_item"
                >
                  <div className="item_text1">{x.name}</div>
                  <div className="item_text2">{x.type}</div>
                </li>
              ))}
          </ul>
        )}
      </div>
      {/* <select onChange={selectChange}>
        <option value="seb">sebouh</option>
        <option value="arm">arman</option>
      </select> */}
    </div>
  );
};

export default DropdownItems;
