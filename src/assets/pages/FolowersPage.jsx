import UserCard from "../components/userCard";
import PropTypes from "prop-types";
import FollowersDetail from "../../data/followers.json";


const FollowersPage = () => {
  return (
    <div className=" bg-gray-200 min-h-screen grid grid-cols-3 gap-4 p-10">
      {FollowersDetail.map((team) => {
        return (
          <UserCard
            key={team.id}
            name={team.name}
            role="Junior Full stack Intern"
            image={`${team.github}.png`}
          />
        );
      })}
    </div>
  );
};

export default FollowersPage;

// it does'nt work
FollowersPage.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  role: PropTypes.string,
};
