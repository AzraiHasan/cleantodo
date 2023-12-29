<template>
  <div>
    <!-- this is edit note {{ $route.params.id }} -->
    <AddEditNote v-model="updateNoteContent" placeholder="Edit note...">
      <template #buttons>
        <div class="flex justify-end">

          <UButton label="Update Note" :disabled="!updateNoteContent" class="mr-6" @click="saveNote" />
          <UButton label="Cancel" variant="outline" @click="$router.back()" />
        </div>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const storeNotes = useStoreNotes()
const updateNoteContent = ref('')
const id = route.params.id
updateNoteContent.value = storeNotes.editNote(id)

const saveNote = () => {
  storeNotes.updateNote(route.params.id, updateNoteContent.value)
  router.push('/')
}

</script>

