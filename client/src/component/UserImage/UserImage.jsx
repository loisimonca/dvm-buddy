import React, { useState, useContext } from "react";
import ImageUploading from "react-images-uploading";
import API from "../../utils/API";
import { UserContext } from "../../utils/UserContext";
import "./UserImage.css";
import "../AccountManage/UserAccountParts/UserPage.css";

function UserImage({ currentImage }) {
  const [imagedata] = useState([]);

  const { userId } = useContext(UserContext);
  const onChange = (selectedImage) => {
    console.log(selectedImage[0]);
    // data for submit
    let url = null;
    if (selectedImage[0] !== undefined) {
      url = selectedImage[0].data_url;
    }
    // setImage(url);
    // console.log(url)
    API.updateUserById(userId, { userImage: url }).then((user) => {
      window.location.reload();
    });
  };
  return (
    <div className="user__image__container">
      <ImageUploading
        multiple={false}
        value={imagedata}
        onChange={onChange}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {currentImage ? (
              <>
                <button
                  className="image-item"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                >
                  <img src={currentImage} alt="" width="100" />
                </button>
                <div className="image-item__btn-wrapper">
                  <button
                    className="update-img"
                    onClick={() => onImageUpdate()}
                  >
                    Update
                  </button>
                  <button
                    className="remove-img"
                    onClick={() => onImageRemove()}
                  >
                    Remove
                  </button>
                </div>
              </>
            ) : (
              <button
                className="image__placeholder"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
              >
                <i className="fas fa-user-plus"></i>
              </button>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UserImage;
