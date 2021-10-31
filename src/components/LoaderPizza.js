import React from 'react';
import ContentLoader from "react-content-loader";

const LoaderPizza = (props) => {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={280}
                height={457}
                viewBox="0 0 280 457"
                backgroundColor="#f0f0f0"
                foregroundColor="#ffffff"
                {...props}
            >
                <circle cx="134" cy="120" r="120" />
                <rect x="0" y="255" rx="10" ry="10" width="280" height="38" />
                <rect x="0" y="314" rx="10" ry="10" width="280" height="73" />
                <rect x="0" y="403" rx="10" ry="10" width="92" height="34" />
                <rect x="199" y="423" rx="0" ry="0" width="0" height="1" />
                <rect x="134" y="403" rx="22" ry="22" width="146" height="42" />
            </ContentLoader>
        </div>

    )
}

export default LoaderPizza