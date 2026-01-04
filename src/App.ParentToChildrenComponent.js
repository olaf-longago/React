function List({ children, title, footer = <div>默认底部</div> }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {children}
      </ul>
      {footer}
    </>
  );
}
export default function App() {
  return (
    <>
      <List
        title="列表1"
        footer={<p>这是底部内容1</p>}
      >
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
      </List>
      <List
        title="列表2"
        footer={<p>这是底部内容2</p>}
      >
        <li>内容A</li>
        <li>内容B</li>
        <li>内容C</li>
      </List>
      <List
        title="列表3"
      >
        <li>内容X</li>
        <li>内容Y</li>
        <li>内容Z</li>
      </List>
    </>
  );
}