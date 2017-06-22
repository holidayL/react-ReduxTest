class fetchTest {

  static async fetchTestFunc(text, type, actionFunc) {
    console.log("fetchTestFunc启用");
    await fetch(text, {
      method: type,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    })
    .then((json) => {
      actionFunc(json);
    })
       .catch((error) => {
         console.warn('request failed', error);
       });
  }
}
export default fetchTest;