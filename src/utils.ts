import React from "react";

export interface NavLinkProps extends React.HTMLAttributes<HTMLElement> {
    href: string
    children: JSX.Element | string
}
