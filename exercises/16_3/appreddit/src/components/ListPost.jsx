import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class ListPost extends Component {

  componentDidMount() {
    const { getPosts } = this.props;

    getPosts();
  }

  

  render() {
    const { posts, data} = this.props;

    const renderLI = (text)=> {
      return (
          <li>{text}</li>
      )
    }
    return (
      <aside>
        <section>
          <h2>
            {data}
        </h2>
          <input type="button" value="Refresh" />
        </section>
        <section>
          <ul>
            {posts && posts.map(post => renderLI(post))}
          </ul>
        </section>
      </aside>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(fetchPosts())
})

const mapStateToProps = ({
  posts: {
    posts,
    data,
  }
}) => (
  {
    posts,
    data,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ListPost);