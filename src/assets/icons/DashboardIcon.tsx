import React from "react";
import { SvgCss } from "react-native-svg";
import { SvgIconProps } from "../../@types/SvgIconProps";

const xml = (props: SvgIconProps) => {
  const { height = 21, width = 21, fill = "#A5A5AA" } = props;
  return `
        <svg 
            width="${width}" 
            height="${height}" 
            viewBox="0 0 21 21" 
            fill="${fill}" 
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1366 1.29436C11.2569 0.524601 
            9.94332 0.5246 9.06359 1.29436L0.89692 8.4402C0.390552 8.88327 0.100098 9.52336 
            0.100098 10.1962V20.1668C0.100098 21.4555 1.14477 22.5001 2.43343 22.5001H7.1001C8.38876 
            22.5001 9.43343 21.4555 9.43343 20.1668V15.5001H11.7668V20.1668C11.7668 21.4555 
            12.8114 22.5001 14.1001 22.5001H18.7668C20.0554 22.5001 21.1001 21.4555 21.1001 
            20.1668V10.1962C21.1001 9.52336 20.8096 8.88327 20.3033 8.4402L12.1366 
            1.29436ZM10.6001 3.05037L2.43343 10.1962V20.1668H7.1001V15.5001C7.1001 14.2115 8.14477 
            13.1668 9.43343 13.1668H11.7668C13.0554 13.1668 14.1001 14.2115 14.1001 
            15.5001V20.1668H18.7668V10.1962L10.6001 3.05037Z" 
            fill="${fill}"/>
        </svg>`;
};

export const DashboardIcon = (props: SvgIconProps) => <SvgCss xml={xml(props)} />;
