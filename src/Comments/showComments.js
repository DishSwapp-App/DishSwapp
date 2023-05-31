import React, {useState, useEffect} from 'react';
import { Comment } from 'semantic-ui-react';
import getAllComments from './getAllComments';


function Comments() {
  const [comments, setcomments] = useState([]);


    useEffect(() => {
        async function fetchData() {
          const result = await getAllComments(); 
          setcomments(result);
        }
        fetchData();
      }, []);


      return (
        <Comment.Group>
          {comments.map((comment, index) => (
            <Comment key={index}>
              <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
              <Comment.Content>
                <Comment.Author><b> {comment.username} </b></Comment.Author>
                <Comment.Text>
                  {comment.comment}
                </Comment.Text>
              </Comment.Content>
             <hr></hr>
            </Comment>
            
          ))}
          
        </Comment.Group>
      );
    }


export default Comments