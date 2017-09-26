import {
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT
} from '../actions';

const initialState = {
  posts: {
    allIds: ["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez"],
    "8xf0y6ziyjabvozdd253nd": {
      id: "8xf0y6ziyjabvozdd253nd",
      timestamp: 1467166872634,
      title: "Udacity is the best place to learn React",
      body: "Everyone says so after all.",
      author: "thingtwo",
      category: "react",
      voteScore: 6,
      deleted: false
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: "6ni6ok3ym7mf1p33lnez",
      timestamp: 1468479767190,
      title: "Learn Redux in 10 minutes!",
      body: "Just kidding. It takes more than 10 minutes to learn technology.",
      author: "thingone",
      category: "redux",
      voteScore: -5,
      deleted: false
    }
  },
  comments: {},
  categories: {
    allCategories: ["react", "redux", "udacity"],
    "react": {
      name: "react",
      path: "react"
    },
    "redux": {
      name: "redux",
      path: "redux"
    },
    "udacity": {
      name: "udacity",
      path: "udacity"
    }
  }
}

function score (state=initialState, action) {
  console.log(action);
  switch (action.type){
    case UP_VOTE_POST :
      return {
        ...state,
          posts:{
            ...state.posts,
            [action.post_id]: {
              voteScore: state.posts[action.post_id].voteScore + 1
            }
          }
      }
    case DOWN_VOTE_POST :
      break;
    case UP_VOTE_COMMENT :
      break;
    case DOWN_VOTE_COMMENT :
      break
    default :
      return state;
  }
}

export default score;