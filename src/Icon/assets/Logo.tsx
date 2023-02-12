import * as React from 'react';

const InTransit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100" height="100" rx="25" fill="#152A79" />
    <path
      d="M13 73V33.5L23.5 26.5V46.5V67.5L38.5 75.5V87.5L13 73Z"
      fill="#FEFEFE"
      stroke="#FEFEFE"
    />
    <path
      d="M28 66.5L38.5 72V34H40L52.5 43V58L43 53.5V64.5L55 72L81 56V24.5L55 9L28 24.5V66.5Z"
      fill="#FEFEFE"
      stroke="#FEFEFE"
    />
    <path d="M69.5 34.5L57 42V57.5L70.5 49V34L69.5 34.5Z" fill="#152A79" stroke="#152A79" />
    <path d="M54 22L42 30L54 38L67 30L54 22Z" fill="#152A79" stroke="#152A79" />
  </svg>
);
export default InTransit;
