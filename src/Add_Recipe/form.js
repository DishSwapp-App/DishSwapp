import React from 'react';
import { useForm } from 'react-hook-form';
import "./add_recipe.css"
import { Create, Collection } from 'faunadb';
import faunadb from 'faunadb';



export default function Form() {

    const client = new faunadb.Client({
        secret: 'fnAFFFdVycAAUQIYdaKZBTm_cMJQeKQoOKMcfDXM'
      });



      const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
    
        reader.onload = async () => {
          const imageData = reader.result.split(',')[1];
    
          // Upload the image to Imgbb and get the URL
          const payload = { 'key': 'd1e7bfb26e41548bb635c550cf75d0c0', 'image': imageData };
          const response = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: new URLSearchParams(payload)
          });
          const responseJson = await response.json();
          const imageUrl = responseJson.data.image.url;
          console.log(imageUrl)
    
        
        }
        
      }


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const { authorName, recipeTitle, recipeIngredients, recipeInstructions } = data;
    let imageUrl = '';
  
    try {
      const imageInput = document.getElementById('recipeImage');
      
      if (imageInput.files && imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();
        
        reader.readAsDataURL(file);
        
        reader.onload = async () => {
          const imageData = reader.result.split(',')[1];
        
          // Upload the image to Imgbb and get the URL
          const payload = {'key': 'd1e7bfb26e41548bb635c550cf75d0c0', 'image': imageData};
          const response = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: new URLSearchParams(payload)
          });
          const responseJson = await response.json();
          imageUrl = responseJson.data.image.url;
          
          // Update the FaunaDB document with the imageUrl
          try {
            const result = await client.query(
                Create(
                    Collection('recipes'),
                {
                  data: {
                    authorName,
                    recipeTitle,
                    recipeIngredients,
                    recipeInstructions,
                    imageUrl // Add the imageUrl to the document
                  }
                }
              )
            );
        
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        };
      } else {
        // Update the FaunaDB document without the imageUrl
        const result = await client.query(
            Create(
                Collection('recipes'),
            {
              data: {
                authorName,
                recipeTitle,
                recipeIngredients,
                recipeInstructions
              }
            }
          )
        );
  
        console.log(result);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-group">
        <label htmlFor="authorName">Author Name</label>
        <input type="text" className="form-control" id="authorName" placeholder="Enter author name" {...register("authorName", {required: true, maxLength: 80})} />
        {errors.authorName && <span>This field is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="recipeTitle">Recipe Title</label>
        <input type="text" className="form-control" id="recipeTitle" placeholder="Enter recipe title" {...register("recipeTitle")} />
      </div>

      <div className="form-group">
        <label htmlFor="recipeIngredients">Recipe Ingredients</label>
        <textarea className="form-control" id="recipeIngredients" rows="3" {...register("recipeIngredients")}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="recipeInstructions">Recipe Instructions</label>
        <textarea className="form-control" id="recipeInstructions" rows="3" {...register("recipeInstructions")}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="recipeImage">Upload Recipe Image:</label>
        <input type="file" className="form-control-file" id="recipeImage" name="recipeImage" onChange={handleImageUpload} />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
  );
}
