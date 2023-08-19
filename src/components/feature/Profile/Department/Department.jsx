import { Avatar } from "../../../shared/ui";
import {
  Employee,
  Link,
  Name,
  StyledDepartment,
  StyledIconLogout,
  Title,
} from "./styles";

function Department({ nameDepartment, staff }) {
  return (
    <StyledDepartment>
      <Title>{nameDepartment}</Title>
      {staff.map((employee) => {
        return (
          <Employee>
            <Link href={employee.propertiesEmployee.link}>
              <Avatar src={employee.propertiesEmployee.personAvatar} />
              <Name>
                {employee.propertiesEmployee.firstName}{" "}
                {employee.propertiesEmployee.lastName}
              </Name>
              <StyledIconLogout />
            </Link>
          </Employee>
        );
      })}
    </StyledDepartment>
  );
}

export default Department;
// employee.propertiesEmployee.personAvatar
