import React, { Component } from "react";
import { getComments } from "./comment";
import Like from "./Like";

class Comments extends Component {
  state = {
    comments: getComments(),
  };

  handleLike = (comment) => {
    const comments = [...this.state.comments];
    const index = comments.indexOf(comment);
    comments[index] = { ...comments[index] };
    comments[index].liked = !comments[index].liked;
    this.setState({ comments });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.comments.map((comment) => (
          <tr key={comment.id}>
            <td>{comment.cmnt}</td>
            <Like
              liked={comment.liked}
              onClick={() => this.handleLike(comment)}
            />
          </tr>
        ))}
      </React.Fragment>
    );
  }
}

export default Comments;
