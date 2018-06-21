import { type } from "../actions/types";

export const addArticle = article => ({ type: type.ADD_ARTICLE, payload: article });
export const removeArticle = id => ({ type: type.REMOVE_ARTICLE, payload: id });
export const renameArticle = (id, name) => ({ type: type.RENAME_ARTICLE, payload: { id, name} });