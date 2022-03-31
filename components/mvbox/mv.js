Component({
  //properties用来接受父组建传递给子组建的值，先定义好需要传递的值
  properties: {
    MVdata: {
      type: Object, //接受参数的类型
      value: { name: "hello" }, //默认值
    },
    // MVdata:Array, //简化接受参数定义方式，不需要指定默认值
  },
  data: {},
  methods: {},
});
