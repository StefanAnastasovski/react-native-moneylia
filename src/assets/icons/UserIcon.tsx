import React from "react";
import { SvgCss } from "react-native-svg";
import { SvgIconProps } from "../../@types/SvgIconProps";

const xml = (props: SvgIconProps) => {
  const { height = 20, width = 20, fill = "#7476ED" } = props;
  return `
        <svg 
            width="${width}" 
            height="${height}" 
            viewBox="0 0 20 20" 
            fill="${fill}" 
            xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.79086 5 6 6.79086 6 9C6 11.2091 
                    7.79086 13 10 13C12.2091 13 14 11.2091 14 9C14 6.79086 12.2091 5 10 5ZM8 9C8 7.89543 8.89543 
                    7 10 7C11.1046 7 12 7.89543 12 9C12 10.1046 11.1046 11 10 11C8.89543 11 8 10.1046 8 9Z" 
                    fill="${fill}"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 
                    0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 2C5.58172 2 2 
                    5.58172 2 10C2 12.3894 3.04749 14.5341 4.70831 16C6.11787 14.7561 7.97104 14 9.99985 14C12.0287 
                    14 13.882 14.7562 15.2915 16.0001C16.9524 14.5342 18 12.3894 18 10C18 5.58172 14.4183 2 10 
                    2ZM10 18C8.7221 18 7.51418 17.7004 6.44266 17.1675C7.43838 16.4331 8.66816 16 9.99985 16C11.3316 
                    16 12.5614 16.4332 13.5572 17.1676C12.4857 17.7004 11.2778 18 10 18Z" 
                    fill="${fill}"/>
        </svg>`;
};

export const UserIcon = (props: SvgIconProps) => <SvgCss xml={xml(props)} />;
