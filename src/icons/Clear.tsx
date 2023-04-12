import * as React from "react";
import { SVGProps } from "react";
const SvgClear = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="clear_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="clear_svg__b" fill="#fff">
        <use xlinkHref="#clear_svg__a" />
      </mask>
      <g mask="url(#clear_svg__b)">
        <path
          d="M1 9.67h8.67l1-9.67H0l1 9.67Z"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2.667 5)"
        />
        <path
          d="M0 0v3.33"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(6.667 8.334)"
        />
        <path
          d="M0 0v3.33"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(9.334 8.333)"
        />
        <path
          d="m0 4 5.44-4L8 4"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(4 1)"
        />
      </g>
    </g>
  </svg>
);
export default SvgClear;
