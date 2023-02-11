import React from "react";
import styled from "styled-components";
import { getIcon } from "./SvgComponent";
import { ValidIcons } from "./icons";
import type { SvgComponentProps } from "./SvgComponent";

const PX = "px";
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333';

function toPx(value: number): string {
  return value + PX;
}

type Props = {
  name: ValidIcons | string;
  height?: number;
  width?: number;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const SvgIcon = styled.div<SvgComponentProps>`
    margin-bottom: -6px;
`;

const Icon = ({
  name,
  height,
  width,
  color,
  onClick,
  ...wrapProperties
}: Props) => {
  const SvgComponent = getIcon(name);

  return (
    <span {...wrapProperties}>
      <SvgIcon
        data-testid={`icon-${name}`}
        as={SvgComponent}
        height={toPx(height || DEFAULT_SIZE)}
        width={toPx(width || DEFAULT_SIZE)}
        color={color || DEFAULT_COLOR}
        fill={color || DEFAULT_COLOR}
      />
    </span>
  );
};

export default Icon;
