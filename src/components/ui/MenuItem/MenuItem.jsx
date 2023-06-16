import { StyledMenuItem, StyledIconActive, StyledMenuItemWrapper } from "./styles";



function MenuItem({ 
  children, 
  link, 
  className,  
  startIcon, 
  iconActive 
}) {
  return (
    <>
        <StyledMenuItem
        {...(link ? { href: link } : { as: "button", type: "button" })}
        className={className}
      >
        <StyledMenuItemWrapper>
        {startIcon}
        {children}
        {iconActive ? <StyledIconActive /> : false }
        
        </StyledMenuItemWrapper>
      </StyledMenuItem>
    
    </>
  );
}

export default MenuItem;