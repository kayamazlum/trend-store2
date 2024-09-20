import { Fragment } from "react"
import "./Offcanvas.css"
import ReactDOM from "react-dom"

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose} />
}
const OffcanvasOverlay = (props) => {
    return (
        <div className="offcanvas">
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

const Offcanvas = (props) => {
    const portalElement = document.getElementById("overlays")
    return (
        <Fragment>
            {/*<div className="backdrop" onClick={props.onClose} />*/}
            {/*
            <div className="offcanvas">
                <div className="content">
                    {props.children}
                </div>
            </div>
            */}

            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<OffcanvasOverlay>{props.children}</OffcanvasOverlay>, portalElement)}
            

        </Fragment>
    )
}

export default Offcanvas
