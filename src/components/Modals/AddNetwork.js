import React from "react";

const AddNetwork = () => {
  return (
    <div id="modal" className="modal">
      <div className="account-div">
        <div className="account-menu__item account-menu__header textAlign">
          Add Network
        </div>
        <div className="border_bottom"></div>
        <div className="Align">
          <input className="add_Input" placeholder="Network Name"></input>
          <input className="add_Input" placeholder="RPC URL"></input>
          <input className="add_Input" placeholder="Chain Id"></input>
          <input className="add_Input" placeholder="Currency Symbol"></input>
          <input className="add_Input" placeholder="Block Exploro URL"></input>
        </div>
        <div className="border_bottom"></div>
        <div className="Align">
          <button className="button color-1">Add Network</button>
          <button className="button color-2">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddNetwork;
