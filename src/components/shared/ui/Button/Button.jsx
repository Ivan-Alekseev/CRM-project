import { StyledButton } from "./styles";

function Button({ children, link, className, variants, sizeWidth, endIcon }) {
  return (
    <>
      <StyledButton
      sizeWidth={sizeWidth}
      variants={variants}
      {...(link ? { href: link } : { as: "button", type: "button" })}
      className={className}
    >
      {children}
      {endIcon }
    </StyledButton>
    
    </>
  );
}

export default Button;