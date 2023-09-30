<template>
    <label :for="id" class="w-full">
      <span>
      </span>
    <input
      :type="type"
      :name="name"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder ?? label"
      :maxlength="maxlength"
      :minlength="minlength"
      :required="required"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="bg-primary placeholder:text-white px-3 py-1.5 rounded-md w-full placeholder:opacity-50"
    />
    </label>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, required: false },
  name: { type: String, required: true },
  id: { type: String, required: true },
  modelValue: { type: String, required: true },
  placeholder: { type: String, required: false },
  maxlength: { type: Number, required: false },
  minlength: { type: Number, required: false },
  required: { type: Boolean, required: false },
})
</script>
