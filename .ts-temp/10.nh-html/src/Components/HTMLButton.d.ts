import React from "react";
interface IHTMLButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const HTMLButton: React.MemoExoticComponent<(props: IHTMLButtonProps) => import("react/jsx-runtime").JSX.Element>;
export {};
