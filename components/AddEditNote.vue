<template>
  <div class="mb-6">
    <UCard>
      <UTextarea resize :rows="6" color="primary" variant="outline" :placeholder="placeholder" size="xl"
        :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />

      <template #footer>
        <slot name="buttons" />
      </template>
    </UCard>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: "what the note..."
  }
})

const emit = defineEmits(['update:modelValue'])

</script>
