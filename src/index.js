import "./style/index.scss";

const user = {
  id: "3d5h4d765d7",
  name: "Alex",
  age: 20,
};

const admin = {
  ...user,
  root: true,
};

console.log(user);
console.log(admin);
