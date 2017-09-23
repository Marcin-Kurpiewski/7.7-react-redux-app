import {ADD_COMMENT} from './action';
import {EDIT_COMMENT} from './action';
import {REMOVE_COMMENT} from './action';
import {THUMB_UP} from './action';
import {THUMB_DOWN} from './action';

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