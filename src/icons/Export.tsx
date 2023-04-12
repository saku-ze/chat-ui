import * as React from "react";
import { SVGProps } from "react";
const SvgExport = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="export_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="export_svg__b" fill="#fff">
        <use xlinkHref="#export_svg__a" />
      </mask>
      <g mask="url(#export_svg__b)">
        <path
          d="M12.27 9.11a3.09 3.09 0 0 0 1.16-3.44c-.41-1.28-1.65-1.98-2.99-1.98h-.77A4.924 4.924 0 0 0 5.47.03C3.45-.2 1.5.84.56 2.64c-.94 1.81-.67 4 .67 5.53"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(1.24 2.333)"
        />
        <path
          d="M0 6V0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(8 7.667)"
        />
        <path
          d="M4.24 0 2.12 2.12 0 0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(5.879 11.545)"
        />
      </g>
    </g>
  </svg>
);
export default SvgExport;
