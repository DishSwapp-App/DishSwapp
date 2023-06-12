import React, { useState, useEffect } from "react";
import { Comment } from "semantic-ui-react";
import getCommentsByRecipeId from "./getAllComments";
import { useUser } from "@clerk/clerk-react";
import "./comments.css";

function Comments(recipe_id) {
  const user = useUser();
  const dishswapp_user = user.user;

  const [comments, setcomments] = useState([]);
  const profile_pic = dishswapp_user.profileImageUrl;
  const RECIPE_ID = recipe_id.recipe_id;
  console.log(RECIPE_ID);

  useEffect(() => {
    async function fetchData() {
      const result = await getCommentsByRecipeId(RECIPE_ID);
      setcomments(result);
    }
    fetchData();
  }, [RECIPE_ID]);

  return (
    <Comment.Group>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <Comment key={index}>
            <img
              src={profile_pic}
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              alt="avatar"
            />
            <Comment.Content>
              <Comment.Author>
                <b> {comment.data.username} </b>
              </Comment.Author>
              <Comment.Text>{comment.data.comment}</Comment.Text>
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

export default Comments;
