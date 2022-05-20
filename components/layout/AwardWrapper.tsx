import CTABanner from "./CTABanner";
import React from 'react';

export default function AwardWrapper({children}: {children: React.ReactNode}) {
    return (
        <>
            <CTABanner />
            {children}
        </>
    )
}