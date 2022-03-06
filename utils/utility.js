function validateEmail(string) {
  var re = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return re.test(email);
}

function formatDateTime(DateTime) {
  return DateTime;
};


module.exports = { validateEmail, formatDateTime };