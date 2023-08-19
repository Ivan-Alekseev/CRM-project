import CartUser from "./CartUser/CartUser";
import Department from "./Department/Department";
import { StyledProfile } from "./styles";

const data = [
  {
    idDepartment: "0",
    nameDepartment: "Операторы",
    staff: [
      {
        idEmployee: "1",
        propertiesEmployee: {
          personAvatar: "./../../../../public/avatar-profile.png",
          link: "",
          firstName: "Мирон",
          lastName: "Батонов",
        },
      },
      {
        idEmployee: "2",
        propertiesEmployee: {
          personAvatar: "",
          link: "",
          firstName: "Алексей",
          lastName: "Ильин",
        },
      },
    ],
  },
  {
    idDepartment: "1",
    nameDepartment: "Бухгалтеры",
    staff: [
      {
        idEmployee: "1",
        propertiesEmployee: {
          personAvatar: "",
          link: "",
          firstName: "Мирон",
          lastName: "Батонов",
        },
      },
      {
        idEmployee: "2",
        propertiesEmployee: {
          personAvatar: "",
          link: "",
          firstName: "Алексей",
          lastName: "Ильин",
        },
      },
    ],
  },
];

function Profile() {
  return (
    <StyledProfile>
      <CartUser />
      {data &&
        data.map((department) => {
          return (
            <Department
              nameDepartment={department.nameDepartment}
              staff={department.staff}
            />
          );
        })}
    </StyledProfile>
  );
}

export default Profile;
