// import { Fragment } from "react/jsx-runtime";

import { useState } from "react";



export default function App() {
  // const divContent = '标签内容';
  // const divTitle = '标签标题';

  // const flag = false;
  // let divContent = null;
  // if (flag) {
  //   divContent = <span>flag为true</span>;
  // } else {
  //   divContent = <p>flag为false</p>;
  // }

  // const list = [
  // { id: 1, name: '小吴' },
  // { id: 2, name: '小李' },
  // { id: 3, name: '小花' },
  // ]
  // const listContent = list.map(item => (
  //   <Fragment key={item.id}>
  //     <li >{item.name}</li>
  //     <li>…………………………</li>
  //   </Fragment>
  // ));
  // const [content, setContent] = useState('标签的默认内容');

  const [data, setData] = useState([
    { id: 1, name: '小吴' },
    { id: 2, name: '小李' },
    { id: 3, name: '小花' }
  ])

  const listData = data.map(item =>
    <li key={item.id}>{item.name}</li>
  )

  const handleClick = () => {
    setData(data.filter(item => item.id !== 2));
  }

  return (
    // <div title={divTitle}>
    //   {divContent}
    // </div>

    // <ul>{listContent}</ul>
    <>
      <ul>{listData}</ul>
      <button onClick={handleClick}>按钮</button>
    </>
  );
}

// export default App;
