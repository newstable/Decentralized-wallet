import "./index.scss";

const Layout = (props) => {
  return (
    <>
      <div
        className="headerWrap unlockBack"
        style={{
          paddingBottom: "20px",
          overflow: "auto",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Layout;
