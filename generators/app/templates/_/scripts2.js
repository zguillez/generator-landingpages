/* eslint no-unused-vars: "off" */

let hello = 'test ok!!';

console.log(hello);

const formSubmit = (e) => {
  e.preventDefault();
  console.log('formSubmit');

  axios.get('/user?ID=12345')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
