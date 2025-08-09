import React from "react";
interface IReactButtonAtomProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const ReactButtonAtom: React.MemoExoticComponent<(props: IReactButtonAtomProps) => import("react/jsx-runtime").JSX.Element>;
export {};
