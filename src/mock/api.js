import Mock from 'mockjs';

let data = Mock.mock("/user/login", {
  status: 0,
  data: {
    id: 12,
    username: "admin",
    email: "admin@51purse.com",
    phone: null,
    role: 0,
    createTime: 1479048325000,
    updateTime: 1479048325000
  }
});

console.log(data);
