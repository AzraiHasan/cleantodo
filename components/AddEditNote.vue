<template>
  <div class="mb-6">
    <UCard>
      <UTextarea color="primary" variant="outline" placeholder="Search..." size="xl" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" />

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
  }
})

const emit = defineEmits(['update:modelValue'])

</script>
