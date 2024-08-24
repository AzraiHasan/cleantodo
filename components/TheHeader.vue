<template>
  <div class="text-2xl">
    [ App Header / Settings Menu ]
    <UButton @click="displayNotes">Display All Notes in Console</UButton>
  </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

// Function to display all notes in the console
const displayNotes = () => {
  console.log('All Notes:', storeNotes.notes)
}
</script>