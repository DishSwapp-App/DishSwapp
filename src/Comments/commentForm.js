import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Create, Collection } from "faunadb";
import faunadb from "faunadb";

function CommentForm(recipe_id) {
  const fauna_key =process.env.REACT_APP_FAUNA_KEY
  const client = new faunadb.Client({
    secret: fauna_key,
  });

  const user = useUser();
  const username = user.user.username;


  const [formData, setFormData] = useState({
    username: username,
    recipeId: recipe_id.recipe_id, 
    comment: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value     
    });    
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formData);

  try {
    const result = await client.query(
      Create(Collection("comments"), {
        data: {
          username: formData.username,
          recipeID: formData.recipeId,
          comment: formData.comment,
        },
      })
    );

    console.log("Comment created: ", result.data);
  } catch (error) {
    console.log("Error creating comment: ", error);
  }
};
  return (     
    <form onSubmit={handleSubmit}>
      <input  
        type="text"      
        placeholder="Username"    
        name="username"   
        value={username}   
        onChange={handleChange} 
        disabled

        style={{ display: 'none' }}

      />

      <input     
        type="text"     
        placeholder="Recipe ID"  
        value={recipe_id.recipe_id}   
        name="recipeId"     
        onChange={handleChange} 
        
        style={{ display: 'none' }}


      />  
      
      <input                 
        type="text"
        placeholder="Comment"
        name="comment"        
        onChange={handleChange}    
      />

      <button type="submit"> Submit
      </button>    
    </form>
  );
}

export default CommentForm;