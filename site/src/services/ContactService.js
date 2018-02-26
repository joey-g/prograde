export default {
  submit: function(name, email, message) {
    return fetch('https://api.joeygryder.com/contact', {
      method: 'post',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({
        'name': name,
        'email': email,
        'message': message
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  }
}
