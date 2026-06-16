import { useRef, useState } from "react"
import "./profile.css"

export default function Profile() {

    const [uploadImg, setUploadImg] = useState(true)
    const [imgurl, setImgUrl] = useState("");
    const imgRef = useRef(null);

    const handleInput = (e) => {
        const image = e.target.files[0];
        if (image) {
            const url = URL.createObjectURL(image);
            setImgUrl(url);
            setUploadImg(false)
        }
    }
    const [count, setCount] = useState(0);
    const handleLike = () => {
        if(imgurl){
            setCount((prev) => prev + 1);
        }
    }
    return (
        <div className="full-page">
            <input type="file"
                accept="image/*"
                ref={imgRef}
                onChange={handleInput}
                hidden />

            {uploadImg ? (
                <div className="img-container" onClick={() => imgRef.current.click()}>
                    <h3>Upload Image</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512">
                        <path d="M144 480c-79.5 0-144-64.5-144-144 0-63.4 41-117.2 97.9-136.5-1.3-7.7-1.9-15.5-1.9-23.5 0-79.5 64.5-144 144-144 55.4 0 103.5 31.3 127.6 77.1 14.2-8.3 30.8-13.1 48.4-13.1 53 0 96 43 96 96 0 15.7-3.8 30.6-10.5 43.7 44 20.3 74.5 64.7 74.5 116.3 0 70.7-57.3 128-128 128l-304 0zM305 191c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31 0 102.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-102.1 31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72z" /></svg>
                </div>
            ) : (
                <img className="img" src={imgurl} alt="Profile" onClick={() => imgRef.current.click()} />
            )
            }
            <h2>Profile Picture</h2>
            <div className="like-section">
                <svg className={`heart-icon ${!imgurl ? "disabled" : ""}`}
                    onClick={handleLike}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z" /></svg>
                <p>Likes : {count} </p>
            </div>
        </div>
    )
}
