import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './actions';
import {thumbDownComment} from './actions';
import { deleteComment } from './actions';
import { editComment} from './actions';

const mapDispatchToProps = dispatch => ({
	thumbUpComment: (id) => dispatch(thumbUpComment(id)),
	thumbDownComment: (id) => dispatch(thumbDownComment(id)),
	deleteComment: (id) => dispatch(deleteComment(id)),
	editComment: (id) => dispatch(editComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);