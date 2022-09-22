export const getSortedNotes = (notes, sortBy) => {
  if (sortBy === "old-to-new") {
    return [...notes].sort(
      (a, b) => Date.parse(a.created) - Date.parse(b.created)
    );
  } else if (sortBy === "new-to-old") {
    return [...notes].sort(
      (a, b) => Date.parse(b.created) - Date.parse(a.created)
    );
  }

  return notes;
};

export const getPriorityNotes = (notes, priorities) => {
  if (priorities.length !== 0) {
    return notes.filter((note) => priorities.includes(note.priority));
  }
  return notes;
};

export const getTagsNotes = (notes, tags) => {
  if (tags.length !== 0) {
    return notes.filter(
      (note) => note.tags.filter((tag) => tags.includes(tag)).length > 0
    );
  }
  return notes;
};
