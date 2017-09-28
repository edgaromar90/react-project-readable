export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export const OPEN_POST_MODAL = 'OPEN_POST_MODAL';
export const CLOSE_POST_MODAL = 'CLOSE_POST_MODAL';

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

/* MODAL FORM */
export function openPostModal(){
  return {
    type: OPEN_POST_MODAL
  }
}

export function closePostModal(){
  return {
    type: CLOSE_POST_MODAL
  }
}