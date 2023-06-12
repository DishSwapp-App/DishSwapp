import React, { useState, useEffect } from "react";
import { Comment } from "semantic-ui-react";
import "./comments.css";
import fetchComments from "../Add_Recipe/fetchComment";

function SanityComments(recipeId) {
  const [comments, setComments] = useState([]);
  const id = recipeId.recipe_id;

  useEffect(() => {
    fetchComments(id).then((data) => setComments(data));
  }, [id]);

  return (
    <Comment.Group>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment key={comment.text}>
            <img
              src={comment.avatarImageURL}
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
