export const getUsersList = async () => {
  let res = await fetch("https://reqres.in/api/users", {
    method: "GET",
  });

  let list = await res.json();

  return list.data;
};

export const getSingleUser = async (id) => {
  let res = await fetch(`https://reqres.in/api/users/${id}`, {
    method: "GET",
  });
  let user = await res.json();

  return user.data;
};
