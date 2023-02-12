import React from 'react';

export type SvgComponentProps = {
  height: string;
  width: string;
  color: string;
  fill?: string;
  lower?: boolean;
};

const getIconUsingRequire = (iconName: string): React.ComponentType<SvgComponentProps> => {
  return require(`./assets/${iconName}`).default;
};

export const getIcon = getIconUsingRequire;
