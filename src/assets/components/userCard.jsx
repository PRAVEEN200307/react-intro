const UserCard = ({name="Users",role="unknown",image="https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg"}) => {

  return (
    <div className="p-10 bg-white max-w-96  h-fit rounded">
      <img
        src={image}
        alt="mr.praveen kumar"
        className="rounded-full w-60 mx-auto"
      />
      <div className="text-center mt-5">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <small className="text-gray-600">{role}</small>
      </div>
    </div>
  );
};

export default UserCard;