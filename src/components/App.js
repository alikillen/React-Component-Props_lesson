import React from "react"
import Comment from "./comment"

const App = () => {
  return(
      <div className="comments">
          <Comment
            author = "callum woral"
            text = "you are awesome"
          />
          <Comment
            author = "ahsley smith"
            text = "you are nice"
          />
      </div>
      
  )
}

export default App;
