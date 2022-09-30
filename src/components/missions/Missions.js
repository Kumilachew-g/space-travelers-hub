import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import {
  joinMission,
  leaveMission,
} from '../../redux/missions/missionsReducer';
import './Missions.css';

const Mission = (props) => {
  const {
    id, reserved, missionName, description,
  } = props;
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions.missionList);

  const updateJoin = (value = false) => {
    const returnJoinedMission = missionList.map((mission) => {
      if (mission.mission_id !== id) {
        return mission;
      }
      return { ...mission, reserved: value };
    });
    return returnJoinedMission;
  };

  const handleJoinMission = () => {
    dispatch(joinMission(updateJoin(true)));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(updateJoin()));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="th-mission">Mission</th>
          <th className="th-desc">Description</th>
          <th className="th-status">Status</th>
          <th className="th-actions"> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="mission-names">{missionName}</td>
          <td>{description}</td>
          {reserved ? (
            <td className="text-white">
              <span className="bg-info rounded-pill px-2">Active Member</span>
            </td>
          ) : (
            <td className="text-center">
              {' '}
              <span className="bg-secondary rounded-pill px-2">
                NOT A MEMBER
              </span>
            </td>
          )}
          <td>
            {reserved ? (
              <button
                onClick={handleLeaveMission}
                type="button"
                className="btn btn-outline-danger"
              >
                Leave Mission
              </button>
            ) : (
              <button
                onClick={handleJoinMission}
                type="button"
                className="btn btn-outline-secondary"
              >
                Join Mission
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

Mission.propTypes = {
  id: PropTypes.string,
  reserved: PropTypes.bool,
  missionName: PropTypes.string,
  description: PropTypes.string,
};

Mission.defaultProps = {
  id: '',
  reserved: false,
  missionName: '',
  description: '',
};

export default Mission;
