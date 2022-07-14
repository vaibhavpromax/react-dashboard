import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../firebase";
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({})
  console.log(file);

  const handleAdd = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "cities"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://cdn-icons-png.flaticon.com/512/7734/7734301.png"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button type="">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
