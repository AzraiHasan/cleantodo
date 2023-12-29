<template>
  <div v-for="note in storeNotes.notes" :key="note.id">
    <UCard class="mb-6">
      {{ note.id }}
      {{ note.note }}
      <template #footer> 
        <div class="flex justify-around">
          <UButton label="edit" @click="storeNotes.editNote(note.id)" :to="`/editNote/${note.id}`" variant="link"
            class="text-lg" />
          <UButton label="delete" @click="storeNotes.deleteNote(note.id)" variant="link" class="text-lg" />
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup>
const storeNotes = useStoreNotes()
</script>
