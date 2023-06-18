import styled from "styled-components";
import { IconCross as StyledCross } from './../../Icons/index';
import { IconExclamationPoint as StyledExclamationPoint  } from './../../Icons/index';


export const sizeWidth = {
  BIG:'BIG',
  SMALL:'SMALL',
  WITHICON:'WITHICON',
}

export const sizeProperties = {
  'BIG':{
    sizeWidth:'200px',
    paddingSize:'11px 25px 13px',
    lineHeight:'24px',
    fontSize:'16px',
  },
  'SMALL':{
    sizeWidth:'122px',
    paddingSize:'9px 24px 11px',
    lineHeight:'20px',
    fontSize:'14px',
  },
  'WITHICON':{
    sizeWidth:'200px',
    paddingSize:'14px 20px 14px 24px',
    lineHeight:'24px',
    fontSize:'16px',
  },
}

export const variants = {
  contained:'contained',
  text:'text',
  outlined:'outlined',

}

export const variantsProperties = {
  'text':{
    colorForText: '#002CFB',
    colorForTextHover:"#0024CB",
    colorForTextActive:"#274BC8",

    colorForButton:`#FFFFFF`,
    colorForButtonHover:"#FFFFFF",
    colorForButtonActive:"#FFFFFF",
  },
  'contained':{
    colorForText: `#FFFFFF`,
    colorForTextHover:"#FFFFFF",
    colorForTextActive:"#FFFFFF",

    colorForButton:"#005FF8",
    colorForButtonHover:"#0024CB",
    colorForButtonActive:"#274BC8",
  },
  'outlined':{
    colorForText: `#002CFB`,
    colorForTextHover:"#FFFFFF",
    colorForTextActive:"#274BC8",

    colorForButton:"#FFFFFF",
    colorForButtonHover:"#0024CB",
    colorForButtonActive:"#FFFFFF",

    outline: "1px solid #002CFB",
    outlineHover:"1px solid #0024CB",
    outlineActive:"1px solid #274BC8",
  },
}

export const StyledButton = styled.a`
  display:flex;
  justify-content:space-between;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.3s ease-out, box-shadow 0.2s ease-out;
  
  width: ${(props) => sizeProperties[props.sizeWidth].sizeWidth};
  padding: ${(props) => sizeProperties[props.sizeWidth].paddingSize};
  line-height: ${(props) => sizeProperties[props.sizeWidth].lineHeight};
  font-size: ${(props) => sizeProperties[props.sizeWidth].fontSize};



  color: ${(props) => variantsProperties[props.variants].colorForText};
  background-color:${(props) => variantsProperties[props.variants].colorForButton};
  outline:${(props) => variantsProperties[props.variants].outline};

&:hover {
  background-color:${(props) => variantsProperties[props.variants].colorForButtonHover};
  color: ${(props) => variantsProperties[props.variants].colorForTextHover};
  outline: ${(props) => variantsProperties[props.variants].outlineHover};
}
&:active {
  background-color:${(props) => variantsProperties[props.variants].colorForButtonActive};
  color: ${(props) => variantsProperties[props.variants].colorForTextActive};
  outline: ${(props) => variantsProperties[props.variants].outlineActive};
}
`;

export const IconCross = styled(StyledCross)`
  width:24px;
  height:24px;
`;
export const IconExclamationPoint = styled(StyledExclamationPoint)`
  width:24px;
  height:24px;
`;

