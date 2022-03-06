function validateEmail(string) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

function formatDateTime() {

};
module.exports = { validateEmail, formatDateTime };
