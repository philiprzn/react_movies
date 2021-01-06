import React from "react";

function WithLoading (Component) {
    const LoadingIndication = () => <h2>Just a moment... Almost there</h2>

    return function WithLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />
        return <LoadingIndication />
    }
}

export default WithLoading;