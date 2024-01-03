<template>
  <div v-for="note in storeNotes.notes" :key="note.id">
    <UCard class="mb-8">
      <div class="text-lg mb-12">
        {{ note.note }}
      </div>
      <UDivider />
      <div class="text-xs font-mono mt-4">
        Note ID: {{ note.id }}
      </div>
      <template #footer>
        <div class="flex justify-around">
          <UButton label="edit" @click="storeNotes.editNote(note.id)" :to="`/editNote/${note.id}`" variant="link"
            class="text-lg" />


          <UButton label="delete" @click="isOpen = true" variant="link" class="text-lg" />
          <UModal v-model="isOpen" :transition="false">
            <UCard>
              <template #header>
                !! confirm delete !!
              </template>
              <div class="text-xl font-semibold">
                Are you sure you want to delete this note?
              </div>
              <template #footer>
                <div class="text-right">
                  <UButton label="Delete" color="red" @click="storeNotes.deleteNote(note.id)" class="text-lg mr-4" />
                  <UButton label="Cancel" variant="outline" class="text-lg " @click="isOpen = false" />
                </div>
              </template>
            </UCard>
          </UModal>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup>
const isOpen = ref(false)
const storeNotes = useStoreNotes()

/* const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
}) */
</script>
