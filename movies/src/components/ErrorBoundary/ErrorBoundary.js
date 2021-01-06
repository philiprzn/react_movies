import React from 'react';

const ErrorBoundary = (props) => {
    const OopsText = () => {
        return (
            <h2>
                Ooops, something went wrong... We are doing our best to fix this issue.
            </h2>
        )
    };

    let isEverythingOk = true;

    return (
        <>
            {isEverythingOk ? props.children : <OopsText/>}
        </>
    )
};

export default ErrorBoundary;