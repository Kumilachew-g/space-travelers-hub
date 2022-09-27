import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';

const Mission = (props) => {
  const { missionName, description } = props;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{missionName}</td>
          <td>{description}</td>
          <td>Not a member</td>
          <td>
            {' '}
            <Button>Join Mission</Button>
            {' '}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string,
  description: PropTypes.string,
};

Mission.defaultProps = {
  missionName: '',
  description: '',
};

export default Mission;
