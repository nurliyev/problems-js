function getStudentsWithNamesAndTopNotes(input) {
  // Your code
  return input.map((item) => {
    const topNote = item.notes.length > 0 ? Math.max(...item.notes) : 0;
    return { name: item.name, topNote };
  });
}

console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ])
);

export default getStudentsWithNamesAndTopNotes;
