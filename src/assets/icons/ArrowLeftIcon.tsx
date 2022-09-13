import React from "react";
import { SvgCss } from "react-native-svg";
import { SvgIconProps } from "../../@types/SvgIconProps";

const xml = (props: SvgIconProps) => {
  const { height = 20, width = 11, fill = "white" } = props;
  return `
        <svg 
            width="${width}" 
            height="${height}" 
            viewBox="0 0 11 20" 
            fill="${fill}" 
            xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.325 1.00846C10.7807 1.46407 10.7807 
                2.20276 10.325 2.65837L2.98333 10.0001L10.325 17.3418C10.7807 17.7974 10.7807 18.5361 
                10.325 18.9917C9.86943 19.4473 9.13074 19.4473 8.67513 18.9917L0.508457 10.825C0.0528451 
                10.3694 0.0528451 9.63073 0.508457 9.17512L8.67513 1.00846C9.13074 0.552845 9.86943 0.552845 
                10.325 1.00846Z" 
                fill="${fill}"/>
        </svg>`;
};

export const ArrowLeftIcon = (props: SvgIconProps) => (
  <SvgCss xml={xml(props)} />
);
