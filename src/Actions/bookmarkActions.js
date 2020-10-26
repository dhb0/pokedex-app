export const addToBookmarks = (data) => {
  return {
    type: "ADD_TO_BOOKMARK",
    payload: data,
  };
};

export const deleteFromBookmarks = (id) => {
  return {
    type: "DELETE_FROM_BOOKMARK",
    payload: id,
  };
};

export const deleteAllBookmarks = () => {
  return {
    type: "DELETE_ALL_BOOKMARKS",
  };
};
