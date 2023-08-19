import styled from "styled-components";
import { defaultTheme } from "../../../../theme/default";
import {
  IconLogout,
  IconMailOutline,
  IconPhoneOutline,
} from "../../../shared/Icons";

export const StyledCartUser = styled.div`
  width:304px;
  margin:0px 32px 0px 32px;
  margin-bottom: 16px;
  position: relative;
  border-bottom: 1px solid #eaf0fa;
`;

export const StyledIconLogout = styled(IconLogout)`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const Name = styled.div`
  color: ${defaultTheme.colorBlackForText};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 124%; /* 22.32px */
  margin-bottom: 6px;
`;

export const Position = styled.div`
  color: ${defaultTheme.colorTextDefault};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 124%; /* 18.6px */

  &::after {
    margin-left: 8px;
    margin-right: 8px;
    content: "•";
    width: 4px;
    height: 4px;
    border-radius: 100%;
    color: ${defaultTheme.colorIconDefault};
  }
`;

export const Location = styled.div`
  color: ${defaultTheme.colorTextDefault};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 124%; /* 18.6px */
`;

export const StyledIconPhoneOutline = styled(IconPhoneOutline)`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  color: ${defaultTheme.colorTextDefault};
`;

export const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: ${defaultTheme.colorTextDefault};
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 124%; /* 18.6px */
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: ${defaultTheme.colorTextDefault};
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 124%; /* 18.6px */
`;

export const StyledIconMailOutline = styled(IconMailOutline)`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  color: ${defaultTheme.colorTextDefault};
`;
