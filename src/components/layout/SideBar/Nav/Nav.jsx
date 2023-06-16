import MenuItem from "../../../ui/MenuItem/MenuItem";
import { ButtonSiderBar, StyledNav, StyledNavButtons } from "./styles";
import { ReactComponent as IconChartTimelineVariant } from "./../../../../assets/iсons/Sidebar/icons/icon/chart-timeline-variant.svg";
import { ReactComponent as IconOrders } from "./../../../../assets/iсons/Sidebar/icons/icon/orders.svg";
import { ReactComponent as IconMails } from "./../../../../assets/iсons/Sidebar/icons/icon/mail_outline.svg";
import { ReactComponent as IconCalls } from "./../../../../assets/iсons/Sidebar/icons/icon/calls.svg";
import { ReactComponent as IconPeople } from "./../../../../assets/iсons/Sidebar/icons/icon/people.svg";
import { ReactComponent as IconDocuments } from "./../../../../assets/iсons/Sidebar/icons/icon/documents.svg";
import { ReactComponent as IconPerformers } from "./../../../../assets/iсons/Sidebar/icons/icon/perm_identity_black.svg";
import { ReactComponent as IconBriefcase } from "./../../../../assets/iсons/Sidebar/icons/icon/briefcase-outline.svg";
import { ReactComponent as IconKnowledgeLibrary } from "./../../../../assets/iсons/Sidebar/icons/icon/local_library_black.svg";
import { ReactComponent as IconSettings } from "./../../../../assets/iсons/Sidebar/icons/icon/settings.svg";


import { ReactComponent as IconCross } from "./../../../../assets/iсons/button-elements/cross.svg";
import { ReactComponent as IconExclamationPoint } from "./../../../../assets/iсons/button-elements/exclamation-point.svg";
import { sizeWidth, variants } from "../../../ui/Button/styles";




function Nav() {
  return (
    <>
      <StyledNav>
        <MenuItem link="/" startIcon={<IconChartTimelineVariant />} iconActive>Итоги</MenuItem>
        <MenuItem link="/" startIcon={<IconOrders />} iconActive>Заказы</MenuItem>
        <MenuItem link="/" startIcon={<IconMails />} iconActive>Сообщения</MenuItem>
        <MenuItem link="/" startIcon={<IconCalls />} iconActive>Звонки</MenuItem>
        <MenuItem link="/" startIcon={<IconPeople />} iconActive>Контрагенты</MenuItem>
        <MenuItem link="/" startIcon={<IconDocuments />} iconActive>Документы</MenuItem>
        <MenuItem link="/" startIcon={<IconPerformers />} iconActive>Исполнители</MenuItem>
        <MenuItem link="/" startIcon={<IconBriefcase />} iconActive>Отчеты</MenuItem>
        <MenuItem link="/" startIcon={<IconKnowledgeLibrary />} iconActive>База знаний</MenuItem>
        <MenuItem link="/" startIcon={<IconSettings />} iconActive>Настройки</MenuItem>
      </StyledNav>
      <StyledNavButtons>
        <ButtonSiderBar 
          variants={variants.contained} 
          sizeWidth={sizeWidth.WITHICON} 
          endIcon={<IconCross />}
        >Добавить заказ</ButtonSiderBar>
        <ButtonSiderBar 
          variants={variants.contained} 
          sizeWidth={sizeWidth.WITHICON} 
          endIcon={<IconExclamationPoint />}
        >Оплата</ButtonSiderBar>
      </StyledNavButtons>
    </>
  );
}

export default Nav;