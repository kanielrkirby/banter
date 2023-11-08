<template>
  <div class="flex justify-center items-center relative transition-all duration-200 hover:scale-105 group">
    <label class="absolute top-0 left-0 text-white transition-all duration-300 h-fit my-auto group-hover:opacity-60"
      :class="[ selected ? 'opacity-80 text-xs absolute left-1 top-2 bottom-full group-hover:!opacity-90' : 'opacity-40 text-md top-0 bottom-0 left-3 absolute' ]" :for="id">
      {{ label }}
    </label>
    <input :type="type" :name="name" :id="id" :value="modelValue"
      :maxlength="maxlength" :minlength="minlength" :required="required"
      @focus="toggle" @blur="toggle"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="bg-card-950 px-2 py-3 rounded-sm font-medium w-full" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const selected = ref(false);

const toggle = () => {
  if (props.modelValue === "") {
    selected.value = !selected.value;
  }
}

const props = defineProps<{
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
