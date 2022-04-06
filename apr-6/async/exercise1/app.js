async function loadJson(url) {
  try {
    let response = await fetch(url);
    if (response.status == 200) {
      let data = response.json();
      return data;
    }
    alert(response.status);
  } catch (err) {
    throw new Error(err);
  } finally {
    console.log("finally statement");
  }
}

loadJson("no-such-user.json");

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) return response.json();
//     else throw new Error(response.status);
//   });
// }
// loadJson("no-such-user.json").catch(alert);

// loadJson()
