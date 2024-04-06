const FollowersPage = () => {
  return (
    <div className=" bg-gray-200 min-h-screen grid grid-cols-3 gap-4 p-10">
      {[1, 2, 3, 4, 5, 6, 7, 10].map((identify) => {
        return (
          <div className="p-10 bg-white max-w-96">
            <img
              src="https://avatars.githubusercontent.com/u/139258660?v=4"
              alt="mr.praveen kumar"
              className="rounded-full w-60 mx-auto"
            />
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Praveen kumar</h1>
              <small className="text-gray-600">Full Stack developer</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersPage;
