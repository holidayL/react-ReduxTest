import Mock from "mockjs";

Mock.mock("/data",{
  data:{
    test:"mockTest",
  }
});

Mock.mock("/number",{
  data:{
    number:123,
  }
})