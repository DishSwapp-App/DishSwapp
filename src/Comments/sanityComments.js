import React, { useState, useEffect } from "react";
import { Comment } from "semantic-ui-react";
import "./comments.css";
import fetchComments from "../Add_Recipe/fetchComment";
import { Divider, Grid, Avatar, Paper } from "@mantine/core";

//
function SanityComments(recipeId) {
  const [comments, setComments] = useState([]);
  const id = recipeId.recipe_id;

  useEffect(() => {
    fetchComments(id).then((data) => setComments(data));
  }, [id]);

  console.table(comments);
  return (
    <>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <Paper
            style={{
              padding: "40px 20px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Comment key={index}>
                <Grid item>
                  <Avatar
                    src={comment.avatarImageURL}
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                    }}
                    alt="avatars"
                  />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <Comment.Content>
                    <b>{comment.author}</b>
                    <div className="comment_text">{comment.text}</div>
                  </Comment.Content>
                </Grid>
              </Comment>
              <Divider size={"xl"} />
            </Grid>
          </Paper>
        ))
      ) : (
        <p className="no-comments">No comments yet...</p>
      )}
    </>
  );
}

export default SanityComments;
