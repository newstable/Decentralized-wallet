import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import AccountModal from "..//Modals/Accounts";
import Network from "../Modals/Networks";
import AddNetwork from "../Modals/AddNetwork";

export default function Header() {
  const history = useHistory();
  const [modal, setModatStr] = useState("Ethereum Mainnet");
  const [add, setAdd] = useState(false);

  window.onclick = function (event) {
    if (event.target == document.getElementById("modal")) {
      setOpen(false);
      setOpenModal(false);
      setAdd(false);
    }
  };
  const [openAccount, setOpen] = useState(false);
  const [oModal, setOpenModal] = useState(false);
  const openAccounts = () => {
    setOpen(!openAccount);
  };

  const openModal = (state, val) => {
    setOpenModal(state);
    if (!state) {
      if (val == "addNetwork") setAdd(!add);
      else setModatStr(val);
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/home">
          <img className="logoName" src={logo} />
        </Link>
        <div className="network" onClick={() => openModal(true, "")}>
          {modal}
        </div>
        <div className="avatar avatar_png" onClick={() => openAccounts()} />
      </div>
      {openAccount ? <AccountModal /> : ""}
      {oModal ? <Network openModal={openModal} /> : ""}
      {add ? <AddNetwork /> : ""}
    </div>
  );
}
