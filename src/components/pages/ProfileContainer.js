// import ProfileMissions from '../missions/ProfileMissions';
import AllJoinedMissions from './JoinedMission';
import ProfileRocket from '../rockets/ProfileRocket';

const ProfileContainer = () => (
  <div className="profileContainer">
    <ProfileRocket />
    <AllJoinedMissions />
    {/* <ProfileMissions /> */}
  </div>
);

export default ProfileContainer;
