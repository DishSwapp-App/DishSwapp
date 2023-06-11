import React, { useState, useEffect } from "react";
import { Comment } from "semantic-ui-react";
import { useUser } from "@clerk/clerk-react";
import "./comments.css";

function SanityComments(recipeId) {
  const user = useUser();
  const dishswapp_user = user.user;

  const [comments, setComments] = useState([]);
  const profile_pic = dishswapp_user.profileImageUrl;
  const id = recipeId.recipe_id;

  useEffect(() => {
    fetch(
      "https://sbwpz8d0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22comment%22%20%26%26%20recipeID%20%3D%3D%20%22LFnfZxO6WaODD0jfgT74yG%22%5D"
    )
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  return (
    <Comment.Group>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment key={comment.text}>
            <img
              src={profile_pic}
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              alt="avatar"
            />
            <Comment.Content>
              <Comment.Author>
                <b> {comment.author} </b>
              </Comment.Author>
              <Comment.Text>{comment.text}</Comment.Text>
            </Comment.Content>
            <hr></hr>
          </Comment>
        ))
      ) : (
        <p className="no-comments">No comments yet...</p>
      )}
    </Comment.Group>
  );
}

export default SanityComments;
