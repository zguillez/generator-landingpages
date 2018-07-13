/* eslint no-unused-vars: "off", no-undef: "off" */

let hello = 'test ok!!';

console.log(hello);

const formSubmit = e => {
  e.preventDefault();
  console.log('formSubmit');

  axios.get('/user?ID=12345')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

window.module = window.module || {};
module.exports = {
  hello: hello,
};
