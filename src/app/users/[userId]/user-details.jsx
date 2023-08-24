const getUser = async (userId) => {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  const usersData = await response.json();
  return usersData.data;
};

const UserDetails = async ({ id = 1 }) => {
  const {
    id: userId,
    email,
    first_name,
    last_name,
    avatar,
  } = await getUser(id);

  return (
    <>
      <div className="container text-center mt-5">
        <div className="row align-items-center justify-content-center py-5">
          <div className="col-4">
            <img className="img-fluid rounded-2" src={avatar} />
            <h1>
              {first_name} {last_name}{" "}
            </h1>
            <h2> {email}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
