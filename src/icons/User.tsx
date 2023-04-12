import * as React from "react";
import { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 38 38"
    {...props}
  >
    <defs>
      <filter
        id="user_svg__a"
        width={38}
        height={38}
        x={-4}
        y={-4}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_Shadow" />
        <feBlend in="SourceGraphic" in2="effect1_Shadow" result="shape" />
      </filter>
      <path id="user_svg__b" d="M0 0h30v30H0z" />
    </defs>
    <g transform="translate(4 2)">
      <g filter="url(#user_svg__a)">
        <rect stroke="#000" strokeOpacity={0.05} />
        <rect width={30} height={30} rx={10} />
      </g>
      <mask id="user_svg__c" fill="#fff">
        <use xlinkHref="#user_svg__b" />
      </mask>
      <g mask="url(#user_svg__c)">
        <text transform="translate(6 4.5)">
          <tspan
            x={0}
            y={16.24}
            fill="#000"
            fontFamily="SourceHanSansCN-Regular"
            fontSize={14}
            letterSpacing={0}
          >
            {"\uD83E\uDD23"}
          </tspan>
        </text>
      </g>
    </g>
  </svg>
);
export default SvgUser;
