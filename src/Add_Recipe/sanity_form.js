import { client, token } from "../client";
import { Modal, Button } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { Tooltip as ReactTooltip } from "react-tooltip";

function SanityForm() {
  const img_key = process.env.REACT_APP_IMG_KEY;
  const [imageUrl, setImageUrl] = useState("");

  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useUser();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const username = user.user.username;

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const imageData = reader.result.split(",")[1];

      // Upload the image to Imgbb and get the URL
      const payload = {
        key: img_key,
        image: imageData,
      };
      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: new URLSearchParams(payload),
      });
      const responseJson = await response.json();
      setImageUrl(responseJson.data.image.url);
      console.log(imageUrl);
    };
  };

  const onSubmit = async (data) => {
    try {
      console.log(imageUrl);
      await client.create(
        {
          _type: "recipe",
          authorName: username,
          recipeTitle: data.recipeTitle,
          recipeIngredients: data.recipeIngredients,
          recipeInstructions: data.recipeInstructions,
          recipeURL: imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };
  return (
    <div>
      <>
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
          className="add_recipe_form"
        >
          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input
              type="text"
              className="form-control"
              id="authorName"
              placeholder="Enter author name"
              value={username}
              disabled
            />
            {errors.authorName && <span>This field is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="recipeTitle">Recipe Title</label>
            <input
              type="text"
              className="form-control"
              id="recipeTitle"
              placeholder="Enter recipe title"
              {...register("recipeTitle")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="recipeIngredients">Recipe Ingredients</label>
            <textarea
              className="form-control"
              id="recipeIngredients"
              rows="3"
              {...register("recipeIngredients")}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="recipeInstructions">Recipe Instructions</label>
            <textarea
              className="form-control"
              id="recipeInstructions"
              rows="3"
              {...register("recipeInstructions")}
              data-tip="Please separate each instruction using a comma"
            ></textarea>
            <ReactTooltip />
          </div>

          <div className="form-group">
            <label htmlFor="recipeImage" className="custom-file-upload">
              Upload Recipe Image:
            </label>
            <input
              type="file"
              className="form-control-file"
              id="recipeImage"
              name="recipeImage"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thanks for your submission</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your recipe was added successfully!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default SanityForm;
