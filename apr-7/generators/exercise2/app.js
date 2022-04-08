// api - https://reqres.in/api/users?page=2

//fetch data

async function* fetchData() {
  try {
    let response = yield fetch("https://reqres.in/api/users?page=2");
    if (response.status === 200) {
      let data = yield response.json();
      yield data;
    }
  } catch (err) {
    throw new Error(err);
  }
}

// fetchData()
//   .next()
//   .then((res) => console.log(res.value));

console.log(fetchData().next());
console.log(fetchData().next());
console.log(
  fetchData()
    .next()
    .then((data) => console.log(data))
);
