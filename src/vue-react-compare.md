## react笔记

### 小记
- 虽然非受控组件代码更少，但还是推荐使用受控组件
- vue的属性必须先在date定义才能使用，而react可以随处定义
- vue的props必须先声明才能使用，还可以设置初始值，校验变量类型，react直接使用
- react的props默认有一个key，不传就是undefined
ref属性还待了解
### 生命周期函数
|生命周期|vue|react|
|--:|--:|--:|
|实例挂载前|created|componentDidMount|
|实例挂载后|mounted|componentWillUnmount|
|||