// 注意这个 myEvent 是提前实例化并挂载到全局的，此处不再重复示范实例化过程
const globalEvent = window.myEvent;
class B extends React.Component {
  // 这里省略掉其他业务逻辑
  state = {
    newParams: "",
  };
  handler = (params) => {
    this.setState({
      newParams: params,
    });
  };
  bindHandler = () => {
    globalEvent.on("someEvent", this.handler);
  };
  render() {
    return (
      <div>
        <button onClick={this.bindHandler}>点我监听A的动作</button>
        <div>A传入的内容是[{this.state.newParams}]</div>
      </div>
    );
  }
}

class A extends React.Component {
  // 这里省略掉其他业务逻辑
  state = {
    infoToB: "哈哈哈哈我来自A",
  };
  reportToB = () => {
    // 这里的 infoToB 表示 A 自身状态中需要让 B 感知的那部分数据
    globalEvent.emit("someEvent", this.state.infoToB);
  };
  render() {
    return <button onClick={this.reportToB}>点我把state传递给B</button>;
  }
}

export default function App() {
  return (
    <div className="App">
      <B />
      <A />
    </div>
  );
}
