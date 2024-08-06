
import React from "react"

const Jumbotron = () => {
    return (
        <div className="container mt-2 mb-4">
            <div className="p-5 text-center text-muted bg-body border border-dashed rounded-5" style={{width:"80%", marginLeft:"10%"}}>
                <svg className="bi mt-5 mb-3" width="48" height="48"><use xlinkHref="#check2-circle"></use></svg>
                <h1 className="text-body-emphasis">A Warm Welcome!</h1>
                <p className="col-lg-6 mx-auto mb-4">
                This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
                </p>
                <button className="btn btn-primary px-5 mb-5" type="button">
                Call to action
                </button>
            </div>
        </div>
    )
}

export default Jumbotron



