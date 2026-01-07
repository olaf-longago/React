import React, { useState, useEffect } from "react";

export default function App() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const cachedUrl = localStorage.getItem("cachedImgUrl");
    if (cachedUrl) {
      setImgUrl(cachedUrl);
    } else {
      fetch("https://picsum.photos/200").then((response) => {
        const finalUrl = response.url;
        setImgUrl(finalUrl);
        localStorage.setItem("cachedImgUrl", finalUrl);
      });
    }
  }, []);

  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>This is a paragraph</p>
      {imgUrl && <img src={imgUrl} alt="Random Image" />}
    </div>
  );
}
