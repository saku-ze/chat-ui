import * as React from "react";
import { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="copy_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="copy_svg__b" fill="#fff">
        <use xlinkHref="#copy_svg__a" />
      </mask>
      <g mask="url(#copy_svg__b)">
        <path
          d="M0 2.48V.94C0 .42.42 0 .94 0h8.12c.52 0 .94.42.94.94v8.12c0 .52-.42.94-.94.94H7.51"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(4.333 1.667)"
        />
        <path
          d="M.94 0C.42 0 0 .42 0 .94v8.12c0 .52.42.94.94.94h8.12c.52 0 .94-.42.94-.94V.94C10 .42 9.58 0 9.06 0H.94Z"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(1.667 4.333)"
        />
      </g>
    </g>
  </svg>
);
export default SvgCopy;
