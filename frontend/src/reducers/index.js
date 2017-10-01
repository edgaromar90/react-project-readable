import {
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  OPEN_POST_MODAL,
  CLOSE_POST_MODAL
} from '../actions';

/* Static State for now */
const initialState = {
  modalToOpen: null,
  posts: {
    filterBy: null,
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
  comments: {
    allIds: [
      { parentId: "8xf0y6ziyjabvozdd253nd", commentId: "894tuq4ut84ut8v4t8wun89g" },
      { parentId: "8xf0y6ziyjabvozdd253nd", commentId: "8tu4bsun805n8un48ve89" }
    ],
    "894tuq4ut84ut8v4t8wun89g": {
      "id": "894tuq4ut84ut8v4t8wun89g",
      "parentId": "8xf0y6ziyjabvozdd253nd",
      "timestamp": 1468166872634,
      "body": "Hi there! I am a COMMENT.",
      "author": "thingtwo",
      "voteScore": 6,
      "deleted": false,
      "parentDeleted": false
    },
    "8tu4bsun805n8un48ve89": {
      "id": "8tu4bsun805n8un48ve89",
      "parentId": "8xf0y6ziyjabvozdd253nd",
      "timestamp": 1469479767190,
      "body": "Comments. Are. Cool.",
      "author": "thingone",
      "voteScore": -5,
      "deleted": false,
      "parentDeleted": false
    }
  },
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
  switch (action.type){
    case UP_VOTE_POST :
      return {
        ...state,
          posts:{
            ...state.posts,
            [action.post_id]: {
              ...state.posts[action.post_id],
              voteScore: state.posts[action.post_id].voteScore + 1
            }
          }
      }
    case DOWN_VOTE_POST :
      return {
        ...state,
          posts:{
            ...state.posts,
            [action.post_id]: {
              ...state.posts[action.post_id],
              voteScore: state.posts[action.post_id].voteScore - 1
            }
          }
      }
    case UP_VOTE_COMMENT :
      break;
    case DOWN_VOTE_COMMENT :
      break
    case OPEN_POST_MODAL:
      return {
        ...state,
          modalToOpen: action.modalId
      }
    case CLOSE_POST_MODAL:
      return {
        ...state,
          modalToOpen: null
      }
    default :
      return state;
  }
}

export default score;