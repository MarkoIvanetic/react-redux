import { type } from "../actions/types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        case type.REMOVE_ARTICLE:
        console.log("Remove called");
            return { ...state, articles: state.articles.filter(article => article.id !== action.payload) };
        case type.RENAME_ARTICLE:
            return { ...state,
                articles: state.articles.map(article => {
                    if (article.id === action.payload.id) {
                        article.title = action.payload.name;
                    }
                    return article;
                })
            }
        default:
            return state;
    }
};

export default rootReducer;