export const useStoreNotes = defineStore("storeNotes", () => {
  const notes = ref([]);

  function addNote(newNote) {
    let currentDate = new Date().getTime(),
      id = currentDate.toString();

    let note = {
      id,
      note: newNote,
    };

    notes.value.unshift(note);
  }

  function deleteNote(idToDelete) {
    console.log(idToDelete, "is deleted");
    notes.value = notes.value.filter((note) => {
      return note.id !== idToDelete;
    });
  }

  function editNote(isToEdit) {
    console.log(isToEdit, "is edited");
  }

  return { notes, deleteNote, editNote, addNote };
});
