<template>
  <div v-for="note in storeNotes.notes" :key="note.id">
    <UCard class="mb-8">
      <div>
        {{ note.note }}
      </div>
      <UDivider class="my-4" />
      <div class="text-sm">
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
              Are you sure you want to delete this note?
              <template #footer>
                <div class="text-right">
                  <UButton label="Cancel" variant="outline" class="text-lg mr-4" @click="isOpen = false" />
                  <UButton label="Delete" color="rose" variant="outline" @click="storeNotes.deleteNote(note.id)"
                    class="text-lg" />
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
