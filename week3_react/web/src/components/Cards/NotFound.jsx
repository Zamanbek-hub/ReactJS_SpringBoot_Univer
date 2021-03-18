import React from 'react'

function NotFound() {
    const not_found_style = {
        marginRight: "auto",
        marginLeft: "auto",
        textAling: "center",
    }

    const not_found_image_style = {
        width: "70px",
        height: "70px",
        color: "#8C3939", 
        fontWeight: "bold",
    }

    const button_div = {
        width: "100%",
        textAlign: "center",
    }

    return (
        <div className="not_found" style={not_found_style}>
            <h2>Results not Found</h2>
            <div className="button_div" style={button_div}>
                <i className="far fa-frown-open" style={not_found_image_style}></i>
            </div>
        </div>
    )
}

export default NotFound
