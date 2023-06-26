import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "filepond/dist/filepond.min.css";
import { FilePond } from "react-filepond";
import "./add_recipe.css";
import { Create, Collection } from "faunadb";
import faunadb from "faunadb";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useUser } from "@clerk/clerk-react";
import { Modal, Button } from "react-bootstrap";

export default function Form() {
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const formRef = useRef(null);
  const user = useUser();
  const username = user.user.username;
  const fauna_key = process.env.REACT_APP_FAUNA_KEY;
  const img_key = process.env.REACT_APP_IMG_KEY;

  const client = new faunadb.Client({
    secret: fauna_key,
  });

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
      const imageUrl = responseJson.data.image.url;
      setImageUrl(imageUrl);
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { authorName, recipeTitle, recipeIngredients, recipeInstructions } =
      data;
    let imageUrl = "";

    try {
      const imageInput = document.getElementById("recipeImage");

      if (imageInput.files && imageInput.files.length > 0) {
        const file = imageInput.files[0];
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
          imageUrl = responseJson.data.image.url;

          // Update the FaunaDB document with the imageUrl
          try {
            const result = await client.query(
              Create(Collection("recipes"), {
                data: {
                  authorName: username,
                  recipeTitle,
                  recipeIngredients,
                  recipeInstructions,
                  imageUrl, // Add the imageUrl to the document
                },
              })
            );
            console.log(result);
            formRef.current.reset();

            setShowModal(true);
          } catch (error) {
            console.error(error);
          }
        };
      } else {
        // Update the FaunaDB document without the imageUrl
        const result = await client.query(
          Create(Collection("recipes"), {
            data: {
              authorName: username,
              recipeTitle,
              recipeIngredients,
              recipeInstructions,
            },
          })
        );
        console.log(result, authorName);
        formRef.current.reset();

        setShowModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(errors);

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
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
          <FilePond allowMultiple={false} onupdatefiles={handleImageUpload} />
          {imageUrl && <img src={imageUrl} alt="Uploaded Recipe" />}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
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
  );
}
