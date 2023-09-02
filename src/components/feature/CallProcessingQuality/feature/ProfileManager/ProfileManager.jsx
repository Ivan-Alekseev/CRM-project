
import { Avatar } from '../../../../shared/ui';
import { Name, StyledProfileManager, TermOfWork } from './styles';

const manager = {
  name:'Александра С.',
  urlIMG:'',
  termOfWork:'1 г'
};

function ProfileManager() {
  return (
  <StyledProfileManager>
    <Avatar />
    <div style={{marginLeft:"20px"}}>
      <Name>
        {manager.name}
      </Name>
      <TermOfWork>
        {manager.termOfWork}
      </TermOfWork>
    </div>
  </StyledProfileManager>
  );
}

export default ProfileManager;
