<template>
  <div>
    this is edit note {{ $route.params.id }}
    <AddEditNote v-model="updateNoteContent" placeholder="Edit note...">
      <template #buttons>
        <div class="flex justify-end">

          <UButton label="Update Note" :disabled="!updateNoteContent" class="mr-6" />
          <UButton label="Cancel" />
        </div>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
const storeNotes = useStoreNotes()
const updateNoteContent = ref('')

updateNoteContent.value = storeNotes.getNoteContent

</script>

