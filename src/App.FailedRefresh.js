import React, { useState, useEffect } from "react";

export default function App() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    fetch("https://picsum.photos/3840/2160", { redirect: "manual" }).then(
      (response) => {
        const redirectUrl = response.headers.get("Location");
        if (redirectUrl) {
          setImgUrl(redirectUrl);
        }
      }
    );
  }, []);

  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>This is a paragraph</p>
      {imgUrl && <img src={imgUrl} alt="Random Image" />}
    </div>
  );
}
