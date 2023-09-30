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
import { ref } from 'vue'

const label = ref('')
const type = ref('text')
const name = ref('')
const id = ref('')
const modelValue = ref('')
const placeholder = ref('')
const maxlength = ref(100)
const minlength = ref(0)
const required = ref(false)
</script>
