import classes from ".//Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={props.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalLink = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalLink)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalLink
      )}
    </>
  );
};
export default Modal;
