import * as React from "react";
import { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <defs>
      <path id="menu_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="menu_svg__b" fill="#fff">
        <use xlinkHref="#menu_svg__a" />
      </mask>
      <g mask="url(#menu_svg__b)">
        <path
          d="M0 0h10.67"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2.65 3.983)"
        />
        <path
          d="M0 0h10.67"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2.65 7.983)"
        />
        <path
          d="M0 0h10.67"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2.65 11.983)"
        />
      </g>
    </g>
  </svg>
);
export default SvgMenu;
