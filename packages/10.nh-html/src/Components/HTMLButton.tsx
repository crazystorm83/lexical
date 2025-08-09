/**
 * @class HtmlButton
 * @description HtmlButton 컴포넌트
 */

import { HtmlElementNode } from '@black-box';

interface IHtmlButtonProps {
    onClick?: (e: string) => void;
}

export class HtmlButton extends HtmlElementNode implements IHtmlButtonProps {
    onClick: (e: string) => void = () => {};
}
