export const useStoreNotes = defineStore("storeNotes", () => {
  const notes = ref([
    {
      id: "id1",
      note: "this is first note",
    },
  ]);

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

  /* function editNote(isToEdit) {
    console.log(isToEdit, "is edited");
  } */

  const editNote = computed(() => {
    return (id) => {
      console.log(id, "from routes.params.id");
      return notes.value.filter((note) => {
        return note.id === id;
      })[0].note;
    };
  });

  function updateNote(id, note) {
    console.log(id, note);

    let index = notes.value.findIndex((note) => {
      return note.id === id;
    });

    notes.value[index].note = note;
  }

  return { notes, deleteNote, editNote, addNote, editNote, updateNote };
});
