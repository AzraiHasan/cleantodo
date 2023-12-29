<template>
  <AddEditNote v-model="inputNote">
    <template #buttons>
      <UButton label="Add Note" @click="submitNote" :disabled="!inputNote" class="flex w-full justify-center" size="lg" />
    </template>
  </AddEditNote>
  <NotesList />
</template>

<script setup>
const storeNotes = useStoreNotes()
const inputNote = ref('')

const submitNote = () => {
  storeNotes.addNote(inputNote.value)
  console.log(inputNote.value)
  inputNote.value = ''
}
</script>

