import * as React from "react";
import { SVGProps } from "react";
const SvgMax = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="max_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="max_svg__b" fill="#fff">
        <use xlinkHref="#max_svg__a" />
      </mask>
      <g mask="url(#max_svg__b)">
        <path
          d="m0 0 3.33 3.3"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 2)"
        />
        <path
          d="M0 3.3 3.33 0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 10.667)"
        />
        <path
          d="M3.3 3.3 0 0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(10.7 10.667)"
        />
        <path
          d="M3.3 0 0 3.3"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(10.667 2)"
        />
        <path
          d="M0 0h3v3"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(11 2)"
        />
        <path
          d="M3 0v3H0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(11 11)"
        />
        <path
          d="M3 3H0V0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 11)"
        />
        <path
          d="M0 3V0h3"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 2)"
        />
      </g>
    </g>
  </svg>
);
export default SvgMax;
