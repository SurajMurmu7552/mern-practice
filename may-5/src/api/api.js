const URL = "https://retoolapi.dev/BUCPSc/posts";

const getPostsFromApi = async () => {
  let res = await fetch(URL, {
    method: "GET",
  });
  let data = await res.json();
  return data;
};

const getPostsByTitleFromApi = async (title) => {
  let res = await fetch(`${URL}?title=${title}`, {
    method: "GET",
  });

  let data = await res.json();

  return data;
};

const getPostsByIdFromApi = async (id) => {
  let res = await fetch(`${URL}/${id}`, {
    method: "GET",
  });

  let data = await res.json();

  return data;
};

const createPostFromApi = async (post) => {
  let res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();

  return data;
};

const updatePostFromApi = async (post) => {
  let res = await fetch(`${URL}/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();

  return data;
};

const deletePostFromApi = async (id) => {
  let res = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });

  let data = await res.json();

  return {
    data,
    id,
  };
};

export {
  getPostsFromApi,
  getPostsByIdFromApi,
  getPostsByTitleFromApi,
  createPostFromApi,
  updatePostFromApi,
  deletePostFromApi,
};
