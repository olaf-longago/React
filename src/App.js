import { Fragment } from "react";

export default function App() {
  // const divContent = '标签内容';
  const divTitle = '标签标题';

  const flag = false;
  let divContent = null;
  if (flag) {
    divContent = <span>flag为true</span>;
  } else {
    divContent = <p>flag为false</p>;
  }

  const list = [
    { id: 1, name: '小吴' },
    { id: 1, name: '小李' },
    { id: 1, name: '小花' },
  ]
  const listContent = list.map(item => (
    <Fragment key={item.id}>
      <li >{item.name}</li>
      <li>…………………………</li>
    </Fragment>
  ));

  return (
      <ul>{listContent}</ul>
  );
}

// export default App;
