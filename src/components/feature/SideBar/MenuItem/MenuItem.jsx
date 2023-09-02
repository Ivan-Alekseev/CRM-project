import {
  StyledMenuItem,
  StyledIconActive,
  StyledMenuItemWrapper,
} from './styles';

function MenuItem({children, link, className, icon, iconActive}) {
  return (
    <StyledMenuItem className={className}>
        <StyledMenuItemWrapper href={link} iconActive={iconActive}>
        <div>
          <div>{icon}</div>
          <div>{children}</div>
        </div>
        {iconActive ? <StyledIconActive /> : false}
      </StyledMenuItemWrapper>
    </StyledMenuItem>
  );
}

export default MenuItem;
