import React from "react";

const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className = "spinner-border text -success" role="status" style={{width: "20px",height: "20px"}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
export default Loading;