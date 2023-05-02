import React from "react";

interface HeaderProps {
    header: string;
}

const Header: React.FC<HeaderProps> = ({header}) => (
    <header>
        <h1>{header}</h1>
    </header>
);

export default Header;
