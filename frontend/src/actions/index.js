export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

/* Actions Creators */

/* POSTS */
export function upVotePost(post_id){
  return {
    type: UP_VOTE_POST,
    post_id
  }
}

export function downVotePost(post_id){
  return {
    type: DOWN_VOTE_POST,
    post_id
  }
}

/* COMMENTS */
export function upVoteComment(post_id){
  return {
    type: UP_VOTE_COMMENT,
    post_id
  }
}

export function downVoteComment(post_id){
  return {
    type: DOWN_VOTE_COMMENT,
    post_id
  }
}