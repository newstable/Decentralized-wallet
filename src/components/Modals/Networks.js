import React, { useState } from "react";
import {
  faCheck,
  faPlus,
  faArrowDown,
  faComments,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Network(props) {
  const { openModal } = props;
  const [state, setState] = useState(false);
  const [networkState, setNetworkState] = useState("Ethereum Mainnet");

  const networkClickChange = (text) => {
    setNetworkState(text);
    openModal(false, text);
  };

  return (
    <div id="modal" className="modal">
      <div className="account-div">
        <div className="account-menu__item account-menu__header textAlign">
          Networks
        </div>
        <div className="border_bottom"></div>
        <div
          className="account-container"
          onClick={() => networkClickChange("Ethereum Mainnet")}
        >
          <div className="account-item">
            <div className="account-check-mark">
              {networkState == "Ethereum Mainnet" ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                ""
              )}
            </div>
            <div className="network_circle"></div>
            <div className="account-menu__account-info">
              <div className="account-menu__name">Ethereum Mainnet</div>
            </div>
          </div>
        </div>
        <div
          className="account-container"
          onClick={() => networkClickChange("Icicb Chain")}
        >
          <div className="account-item">
            <div className="account-check-mark">
              {networkState == "Icicb Chain" ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                ""
              )}
            </div>
            <div className="network_circle"></div>
            <div className="account-menu__account-info">
              <div className="account-menu__name">Icicb Chain</div>
            </div>
          </div>
        </div>
        <div className="border_bottom"></div>
        <div className="Align">
          <div
            className="AddNetwork"
            onClick={() => networkClickChange("addNetwork")}
          >
            Add Networks
          </div>
        </div>
      </div>
    </div>
  );
}
