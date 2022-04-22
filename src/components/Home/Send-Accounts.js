import React, { useState } from "react";

const SendAccounts = () => {
  const [readMore, setReadMore] = useState(true);

  const changeReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <>
      <div className="account_btn">
        <div className="acc_item">
          <div>
            <svg
              style={{ borderRadius: "50%" }}
              x="0"
              y="0"
              width="28"
              height="28"
            >
              <rect
                x="0"
                y="0"
                width="28"
                height="28"
                transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)"
                fill="#FB1877"
              ></rect>
              <rect
                x="0"
                y="0"
                width="28"
                height="28"
                transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)"
                fill="#C8145F"
              ></rect>
              <rect
                x="0"
                y="0"
                width="28"
                height="28"
                transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)"
                fill="#03595E"
              ></rect>
            </svg>
          </div>
          <div className="accont_font">0x9D11...F20E</div>
        </div>
      </div>
      <div className="account_btn">
        <div className="acc_item">
          <div>
            <svg
              style={{ borderRadius: "50%" }}
              x="0"
              y="0"
              width="28"
              height="28"
            >
              <rect
                x="0"
                y="0"
                width="28"
                height="28"
                transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)"
                fill="#FB1877"
              ></rect>
              <rect
                x="0"
                y="0"
                width="28"
                height="28"
                transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)"
                fill="#C8145F"
              ></rect>
              <rect
                x="0"
                y="0"
                width="28"
                height="28"
                transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)"
                fill="#03595E"
              ></rect>
            </svg>
          </div>
          <div className="accont_font">0x9D11...F20E</div>
        </div>
      </div>
      {readMore ? (
        <div className="account_btn" onClick={() => changeReadMore()}>
          <div className="load_account">Load more</div>
        </div>
      ) : (
        ""
      )}
      {!readMore ? (
        <div className="account_btn">
          <div className="acc_item">
            <div>
              <svg
                style={{ borderRadius: "50%" }}
                x="0"
                y="0"
                width="28"
                height="28"
              >
                <rect
                  x="0"
                  y="0"
                  width="28"
                  height="28"
                  transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)"
                  fill="#FB1877"
                ></rect>
                <rect
                  x="0"
                  y="0"
                  width="28"
                  height="28"
                  transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)"
                  fill="#C8145F"
                ></rect>
                <rect
                  x="0"
                  y="0"
                  width="28"
                  height="28"
                  transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)"
                  fill="#03595E"
                ></rect>
              </svg>
            </div>
            <div className="accont_font">0x9D11...F20E</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SendAccounts;
