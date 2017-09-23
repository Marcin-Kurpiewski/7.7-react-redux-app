import {ADD_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {THUMB_UP} from './actions';
import {THUMB_DOWN} from './actions';

const initialState={
    comments:[],
    users:[]
};

function reducer(state = initialState, action) {
    switch(action.type){
        case ADD_COMMENT:
            return Object.assign({}, state,{
                comments:[
                    {
                        id:action.id,
                        text:action.text,
                        votes:0
                    }
                    , ...state]
            });
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map( comment => comment.id == action.id)
            });
        case THUMB_UP:
            return Object.assign({}, state,{
                comments: state.filter(comment => comment.votes + 1)
            });
        case THUMB_DOWN:
            return Object.assign({}, state,{
                comments: state.filter(comment => comment.votes - 1)
            });
        default:
            return state;
    }
}

export default reducer;