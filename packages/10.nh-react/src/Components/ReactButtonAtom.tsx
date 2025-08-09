import React, { memo } from 'react';

interface IReactButtonAtomProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HtmlButtonElement>) => void;
}

export const ReactButtonAtom = memo((props: IReactButtonAtomProps) => {
    return <button onClick={props.onClick}>{props.children}</button>;
});
