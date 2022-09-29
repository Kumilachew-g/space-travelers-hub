import AllJoinedMissions from './JoinedMission';
import ProfileRocket from '../rockets/ProfileRocket';
import './myProfile.css';

const ProfileContainer = () => (
  <div className="d-flex justify-content-between profile-list ">
    <ProfileRocket />
    <AllJoinedMissions />
  </div>
);

export default ProfileContainer;
