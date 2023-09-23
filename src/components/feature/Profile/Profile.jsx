import CartUser from "./CartUser/CartUser";
import Department from "./Department/Department";
import { StyledProfile, UserProfile } from "./styles";
import img from "./../../../assets/icons/avatars/avatar-profile.png";
import User from "./User/User";
import { useState } from "react";


const data = [
  {
    idDepartment: "0",
    nameDepartment: "Операторы",
    staff: [
      {
        idEmployee: "1",
        propertiesEmployee: {
          personAvatar: img,
          link: "",
          firstName: "Мирон",
          lastName: "Батонов",
        },
      },
      {
        idEmployee: "2",
        propertiesEmployee: {
          personAvatar: "public/avatar-profile.png",
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

  const [visibility, setVisibility] = useState("false");

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <UserProfile>
    <User changeVisibility={changeVisibility} visibility={visibility}/>
    <StyledProfile visibility={visibility}>
      <CartUser  />
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
    </UserProfile>
  );
}

export default Profile;
