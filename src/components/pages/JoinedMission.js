import { useSelector } from 'react-redux';

const AllJoinedMissions = () => {
  const joinedMission = useSelector((state) => state.missions.joinedMission);

  const getJoinedMission = joinedMission.filter((mission) => mission);

  const renderJoinedMissions = getJoinedMission.map((mission) => (
    <ul key={mission.mission_id} className="list-group w-25 mx-5">
      <li className="list-group-item py-3">{mission.missionName}</li>
    </ul>
  ));

  return (
    <>
      <h1 className="mx-5">Missions</h1>
      {renderJoinedMissions}
    </>
  );
};

export default AllJoinedMissions;
