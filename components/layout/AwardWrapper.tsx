import CTABanner from "./CTABanner";
import Announcement from "./Announcement";
import React from 'react';

export default function AwardWrapper({children}: {children: React.ReactNode}) {
    return (
        <>
            <CTABanner>
                <Announcement />
            </CTABanner>
            {children}
        </>
    )
}