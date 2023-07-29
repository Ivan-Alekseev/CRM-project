
import { IconCross } from './../../../shared/Icons';
import { IconChartTimelineVariant } from './../../../shared/Icons';
import { IconOrders } from './../../../shared/Icons';
import { IconMails } from './../../../shared/Icons';
import { IconCalls } from './../../../shared/Icons';
import { IconPeople } from './../../../shared/Icons';
import { IconDocuments } from './../../../shared/Icons';
import { IconPerformers } from './../../../shared/Icons';
import { IconBriefcase } from './../../../shared/Icons';
import { IconKnowledgeLibrary } from './../../../shared/Icons';
import { IconSettings } from './../../../shared/Icons';
import { ReactComponent as IconExclamationPoint } from "./../../../../assets/icons/button-elements/exclamation-point.svg";

import MenuItem from "./../MenuItem/MenuItem";
import { ButtonSiderBar, StyledNav, StyledNavButtons } from "./styles";
import { sizeWidth, variants } from "./../../../shared/ui/Button/styles";

function Nav() {
  return (
    <>
      <StyledNav>
        <MenuItem link="/" icon={<IconChartTimelineVariant />} iconActive>Итоги</MenuItem>
        <MenuItem link="/" icon={<IconOrders />} iconActive>Заказы</MenuItem>
        <MenuItem link="/" icon={<IconMails />} iconActive>Сообщения</MenuItem>
        <MenuItem link="/" icon={<IconCalls />} iconActive>Звонки</MenuItem>
        <MenuItem link="/" icon={<IconPeople />} iconActive>Контрагенты</MenuItem>
        <MenuItem link="/" icon={<IconDocuments />} iconActive>Документы</MenuItem>
        <MenuItem link="/" icon={<IconPerformers />} iconActive>Исполнители</MenuItem>
        <MenuItem link="/" icon={<IconBriefcase />} iconActive>Отчеты</MenuItem>
        <MenuItem link="/" icon={<IconKnowledgeLibrary />} iconActive>База знаний</MenuItem>
        <MenuItem link="/" icon={<IconSettings />} iconActive>Настройки</MenuItem>
      </StyledNav>
      <StyledNavButtons>
        <ButtonSiderBar 
          variants={variants.contained} 
          sizeWidth={sizeWidth.WITHICON} 
          endIcon={<IconCross />}
        >
          Добавить заказ
        </ButtonSiderBar>
        <ButtonSiderBar 
          variants={variants.contained} 
          sizeWidth={sizeWidth.WITHICON} 
          endIcon={<IconExclamationPoint />}
        >
          Оплата
        </ButtonSiderBar>
      </StyledNavButtons>
    </>
  );
}

export default Nav;