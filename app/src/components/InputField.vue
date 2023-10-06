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
      class="bg-primary-dark text-opacity-50 opacity-90 placeholder:text-white px-3 py-1.5 rounded-md w-full placeholder:opacity-50 transition-all duration-150 hover:placeholder:opacity-70 placeholder:transition-all placeholder:duration-150 hover:placeholder:scale-[102%] focus:placeholder:opacity-100 focus:placeholder:scale-100 focus:outline-0 hover:shadow-[theme('colors.secondary-accent-dark')80_0_0_10px_2px] hover:ring-1 ring-secondary-accent focus:shadow-[theme('colors.secondary-accent-dark')f0_0_0_10px_1px] focus:ring-secondary-accent-dark focus:ring-1"
    />
    </label>
</template>

<script setup lang='ts'>
defineProps({
    modelValue: {
        type: String,
        required: true,
    },
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
    placeholder: {
        type: String,
        default: undefined,
    },
    maxlength: {
        type: String,
        default: undefined,
    },
    minlength: {
        type: String,
        default: undefined,
    },
    required: {
        type: Boolean,
        default: false,
    },
})
</script>
