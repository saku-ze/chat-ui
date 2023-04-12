import * as React from "react";
import { SVGProps } from "react";
const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="add_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="add_svg__b" fill="#fff">
        <use xlinkHref="#add_svg__a" />
      </mask>
      <g mask="url(#add_svg__b)">
        <path
          d="M13.33 6.67A6.66 6.66 0 0 0 6.67 0C2.98 0 0 2.98 0 6.67a6.66 6.66 0 0 0 6.67 6.66c3.68 0 6.66-2.98 6.66-6.66Z"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(1.333 1.333)"
        />
        <path
          d="M0 0v5.33"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(8 5.333)"
        />
        <path
          d="M0 0h5.33"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(5.333 8)"
        />
      </g>
    </g>
  </svg>
);
export default SvgAdd;
