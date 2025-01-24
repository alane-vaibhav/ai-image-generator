import "./imageGenerator.css";
import Image from "../assets/pet.jpeg";
import { useRef, useState } from "react";
const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    setLoading(true);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: "Bearer {api key}",
        "User-Agent": "Chrome",
      },
      body: JSON.stringify({
        prompt: `${inputRef.current.value}`,
        n: 1,
        size: "512*512",
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "Your message" }],
      }),
    });
    let data = await response.json();
    let finalData = data?.data;
    setImage_url(finalData?.[0].url);
    setLoading(false);
  };

  return (
    <div className="ai-image-gene">
      <div className="header">
        AI Image <span>generator</span>
      </div>
      <div className="loading">
        <div className="img-loading">
          <img
            src={image_url === "/" ? Image : image_url}
            alt=""
            className="default-image"
          />
        </div>
      </div>
      <div className="loading">
        <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
        <div className={loading ? "loading-text" : "display-none"}>
          Loading...
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Describe you want to see"
          ref={inputRef}
        />
        <div
          className="generate-btn"
          onClick={() => {
            imageGenerator();
          }}
        >
          Generate
        </div>
      </div>
    </div>
  );
};
export default ImageGenerator;
