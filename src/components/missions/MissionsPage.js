import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../../redux/missions/missionsReducer';
import Mission from './Missions';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missionList);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'empty') {
      dispatch(fetchMission());
    }
  }, [status]);

  const allMissions = missions.map((mission) => (
    <Mission
      key={mission.mission_id}
      id={mission.mission_id}
      missionName={mission.mission_name}
      description={mission.description}
    />
  ));

  return <div>{allMissions}</div>;
};

export default MissionsPage;
