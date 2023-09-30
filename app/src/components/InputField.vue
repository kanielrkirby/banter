<template>
    <label :for="id">
      <span>
        {{ label }}
      </span>
    <input
      :type="type"
      :name="name"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :required="required"
    />
    </label>
</template>

<script setup>
import { defineProps } from 'vue'

export const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  maxlength: {
    type: Number,
    default: 100,
  },
  minlength: {
    type: Number,
    default: 0,
  },
  required: {
    type: Boolean,
    default: false,
  },
})
</script>
