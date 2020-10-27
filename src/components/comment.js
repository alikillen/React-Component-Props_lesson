import React from "react"
import faker from "faker"
import Card from "./card"

// can include short circuit logic when creating components as well

const Comment = (props) => {
  return(
      <Card>
          <div className="comment">
              <img alt="avatar" src={faker.image.avatar()}></img>
          </div>
          <div className="content">
              <p className="author"> {props.author}</p>
              <p className="text"> {props.text}</p>
          </div>
       </Card>
          )
  }

export default Comment


// to make the author and text random, we use props