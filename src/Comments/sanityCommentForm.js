import React, { useState, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { client } from "../client";

function SanityCommentForm({ recipe_id, onRefresh, onCommentSubmit }) {
  const formRef = useRef(null);

  const user = useUser();
  const username = user.user.username;
  const profile_pic = user.user.profileImageUrl;
  const [formData, setFormData] = useState({
    username: username,
    recipeId: recipe_id,
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newComment = {
      _type: "comment",
      author: formData.username,
      avatarImageURL: profile_pic,
      text: formData.comment,
      recipeID: formData.recipeId,
    };

    try {
      await client.create(newComment);
      console.log("Comment created successfully!");
    } catch (error) {
      console.error("Error creating comment: ", error);
    }

    onRefresh();
    onCommentSubmit();
    await formRef.current.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="comment_form" ref={formRef}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleChange}
          disabled
          style={{ display: "none" }}
        />

        <input
          type="text"
          placeholder="Recipe ID"
          value={recipe_id}
          name="recipeId"
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <div className="comment_group">
          <input
            type="text"
            placeholder="Add a comment..."
            name="comment"
            required
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-primary comment_group_button"
          >
            {" "}
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default SanityCommentForm;
