<template>
  <div class="flex justify-center items-center relative">
    <label class="absolute top-0 left-0 text-gray-400 transition-all duration-300 h-fit my-auto"
      :class="[ selected ? 'opacity-100 text-xs absolute left-1 top-2 bottom-full' : 'opacity-50 text-md top-0 bottom-0 left-3 absolute' ]" :for="id">
      {{ label }}
    </label>
    <input :type="type" :name="name" :id="id" :value="modelValue"
      :maxlength="maxlength" :minlength="minlength" :required="required"
      @focus="selected = true" @blur="selected = false"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="bg-card-950 px-2 py-3 rounded-sm font-medium w-full" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const selected = ref(false);

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
