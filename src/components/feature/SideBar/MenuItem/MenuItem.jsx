import { StyledMenuItem, StyledIconActive, StyledMenuItemWrapper } from "./styles";



function MenuItem({ 
  children, 
  link, 
  className,  
  icon,
  iconActive
}) {
  return (
    <>
        <StyledMenuItem
          className={className}
        >
        <StyledMenuItemWrapper>
          {icon}
          {children}
          {iconActive ? <StyledIconActive /> : false }
        
        </StyledMenuItemWrapper>
      </StyledMenuItem>
    
    </>
  );
}

export default MenuItem;