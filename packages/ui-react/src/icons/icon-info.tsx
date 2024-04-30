import React from "react";
import type { SVGProps } from "react";
export const IconInfo = ({fill="#000",stroke="#000",...props}:SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 11V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={stroke}
        />
        <circle cx={12} cy="7.5" r={1} fill={fill} />
      </g>
    </svg>
  );
};
