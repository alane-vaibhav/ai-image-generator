import "./imageGenerator.css";
import Image from "../assets/pet.jpeg";
const ImageGenerator = () => {
  return (
    <div className="ai-image-gene">
      <div className="header">
        AI Image <span>generator</span>
      </div>
      <div className="loading">
        <div className="img-loading">
          <img src={Image} alt="" className="default-image" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Describe you want to see"
        />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
};
export default ImageGenerator;
