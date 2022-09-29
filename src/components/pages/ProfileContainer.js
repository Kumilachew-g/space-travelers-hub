import AllJoinedMissions from './JoinedMission';
import ProfileRocket from '../rockets/ProfileRocket';

const ProfileContainer = () => (
  <div className="profileContainer">
    <ProfileRocket />
    <AllJoinedMissions />
  </div>
);

export default ProfileContainer;
