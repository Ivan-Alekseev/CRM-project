import {IconCross} from './../../../shared/Icons';
import {IconChartTimelineVariant} from './../../../shared/Icons';
import {IconOrders} from './../../../shared/Icons';
import {IconMails} from './../../../shared/Icons';
import {IconCalls} from './../../../shared/Icons';
import {IconPeople} from './../../../shared/Icons';
import {IconDocuments} from './../../../shared/Icons';
import {IconPerformers} from './../../../shared/Icons';
import {IconBriefcase} from './../../../shared/Icons';
import {IconKnowledgeLibrary} from './../../../shared/Icons';
import {IconSettings} from './../../../shared/Icons';
import {ReactComponent as IconExclamationPoint} from './../../../../assets/icons/button-elements/exclamation-point.svg';
import MenuItem from './../MenuItem/MenuItem';
import { StyledNav, StyledNavButtons} from './styles';
import {sizeWidth, variants} from './../../../shared/ui/Button/styles';
import { Button } from '../../../shared/ui';

const listlinks = [
  {
    link: '/',
    icon: <IconChartTimelineVariant />,
    text: 'Итоги',
    iconActive: false,
  },
  {
    link: '/',
    icon: <IconOrders />,
    text: 'Заказы',
    iconActive: false,
  },
  {
    link: '/',
    icon: <IconMails />,
    text: 'Сообщения',
    iconActive: false,
  },
  {
    link: '/',
    icon: <IconCalls />,
    text: 'Звонки',
    iconActive: true,
  },
  {
    link: '/',
    icon: <IconPeople />,
    text: 'Контрагенты',
    iconActive: false,
  },
  {
    link: '/',
    icon: <IconDocuments />,
    text: 'Документы',
    iconActive: false,
  },
  {
    link: '/',
    icon: <IconPerformers />,
    text: 'Исполнители',
    iconActive: false,
  },
  {
    link: '/',
    icon: <IconBriefcase />,
    text: 'Отчеты',
    iconActive: false,
  },
  {
    link: '/',
    icon: <IconPerformers />,
    text: 'Исполнители',
    iconActive: false,
  },
  {
    link: '/',
    icon: <IconKnowledgeLibrary />,
    text: 'База знаний',
    iconActive: false,
  },
  {
    link: '/',
    icon: <IconSettings />,
    text: 'Настройки',
    iconActive: false,
  },
];

function Nav() {
  return (
    <>
      <StyledNav>
        {listlinks?
         listlinks.map(el => (
            <MenuItem link={el.link} icon={el.icon} iconActive={el.iconActive}>{el.text}</MenuItem>
            )) 
          : false}
      </StyledNav>
      <StyledNavButtons>
        <Button
          variants={variants.contained}
          sizeWidth={sizeWidth.WITHICON}
          endIcon={<IconCross />}
        >
          Добавить заказ
        </Button>
        <Button
          variants={variants.contained}
          sizeWidth={sizeWidth.WITHICON}
          endIcon={<IconExclamationPoint />}
        >
          Оплата
        </Button>
      </StyledNavButtons>
    </>
  );
}

export default Nav;
