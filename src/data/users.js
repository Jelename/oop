const getBirthday = function() {
  return Date.parse(this.dateOfBirth);
}

module.exports.data = [
  {
    name: "Ava",
    dateOfBirth: "1990-04-01",
    getBirthday
  },
  {
    name: "James",
    dateOfBirth: "1985-02-06",
    getBirthday
  },
  {
    name: "Danielle",
    dateOfBirth: "1987-09-15",
    getBirthday
  },
  {
    name: "Darnell",
    dateOfBirth: "1982-06-22",
    getBirthday
  }
]

module.exports.getBirthDate = function(user) {
  return new Date(user.dateOfBirth).getTime()
}
