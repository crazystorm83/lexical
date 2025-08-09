import React, { memo } from 'react';

interface IReactButtonAtomProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ReactButtonAtom = memo((props: IReactButtonAtomProps) => {
    return <button onClick={props.onClick}>{props.children}</button>;
});
