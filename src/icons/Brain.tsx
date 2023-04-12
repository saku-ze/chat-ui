import * as React from "react";
import { SVGProps } from "react";
const SvgBrain = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="brain_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="brain_svg__b" fill="#fff">
        <use xlinkHref="#brain_svg__a" />
      </mask>
      <g mask="url(#brain_svg__b)">
        <path
          d="M5.01 13.33c-.32-1.06-.82-1.86-1.48-2.38-.98-.78-2.56-.3-3.14-1.11-.58-.8.41-2.29.76-3.17.34-.88-1.33-1.19-1.13-1.44.13-.16.97-.64 2.53-1.44C3 1.26 4.63 0 7.47 0c4.24 0 5.86 3.6 5.86 5.89 0 2.29-1.96 4.76-4.75 5.29-.25.37.11 1.08 1.08 2.15"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(1.333 1.333)"
        />
        <path
          d="M2.1 3.33c-.19 1.09.04 1.6.69 1.53.65-.07 1.05-.34 1.18-.81 1.02.28 1.57.04 1.66-.72.12-1.15-.5-2.07-.75-2.07s-.91-.03-.91-.38C3.97.52 3.2.33 2.5.33c-.69 0-.27-.47-1.23-.29C.64.17.26.44.13.88c-.22.84-.16 1.43.19 1.78.35.34.94.56 1.78.67Z"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(6.374 3.957)"
        />
        <path
          d="M1.97 0c-.34.21-.8.56-1 .83-.49.69-.88 1.1-.97 1.54"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(8.193 8.5)"
        />
      </g>
    </g>
  </svg>
);
export default SvgBrain;
