<template>
  <label :for="id" class="w-full">
    <span>
      {{ label }}
    </span>
    <input :type="type" :name="name" :id="id" :value="modelValue" :placeholder="placeholder ?? label"
      :maxlength="maxlength" :minlength="minlength" :required="required"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="bg-card-950 px-2 py-2.5 rounded-sm font-medium w-full" />
  </label>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  modelValue: string;
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  maxlength?: string;
  minlength?: string;
  required?: boolean;
}>();
</script>
