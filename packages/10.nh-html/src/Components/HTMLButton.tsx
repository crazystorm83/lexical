import React, { memo } from "react";

interface IHTMLButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HTMLButton = memo((props: IHTMLButtonProps) => {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
});