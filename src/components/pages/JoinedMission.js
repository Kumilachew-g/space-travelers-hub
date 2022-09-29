import { useSelector } from 'react-redux';

const AllJoinedMissions = () => {
  const missionList = useSelector((state) => state.missions.missionList);
  const joinedMissions = missionList.filter(
    (mission) => mission.reserved === true,
  );
  const mapMissions = joinedMissions.map((mission) => (
    <li key={mission.mission_id} className="list-group-item">
      <span>{mission.mission_name}</span>
    </li>
  ));

  const noReservedMission = () => (
    <li className="list-group-item">
      <span>No reserved missions.</span>
    </li>
  );

  return (
    <section>
      <ul className="list-group my-3">
        <li className="list-group-item">
          <h1>Missions</h1>
        </li>
        {joinedMissions.length === 0 ? noReservedMission() : mapMissions}
      </ul>
    </section>
  );
};

export default AllJoinedMissions;
