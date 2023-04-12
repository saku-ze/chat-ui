import * as React from "react";
import { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="edit_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="edit_svg__b" fill="#fff">
        <use xlinkHref="#edit_svg__a" />
      </mask>
      <g mask="url(#edit_svg__b)">
        <path
          d="M2.83 0v3c0 .37-.3.67-.66.67H0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(10.5 11)"
        />
        <path
          d="M10.67 4V.67c0-.37-.3-.67-.67-.67H.67C.3 0 0 .3 0 .67v12c0 .36.3.66.67.66h2"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2.667 1.333)"
        />
        <path
          d="M0 0h4.67"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(5.333 5.333)"
        />
        <path
          d="m0 7 5.67-7"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(7.667 7.667)"
        />
        <path
          d="M0 0h2.67"
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
export default SvgEdit;
