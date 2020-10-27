import React from "react"
import faker from "faker"

const Comment = (props) => {
  return(
      <div className="comments-container">
          <div className="comment">
              <img alt="avatar" src={faker.image.avatar()}></img>
          </div>
          <div className="content">
              <p className="author"> {props.author}</p>
              <p className="text"> {props.text}</p>
          </div>
       </div>
          )
  }

export default Comment


// to make the author and text random, we use props