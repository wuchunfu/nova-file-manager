<template>
  <InputModal :name="name" :on-submit="submit" :title="__('NovaFileManager.renameFolderTitle')">
    <template v-slot:inputs>
      <div>
        <div
          :class="[
            'w-full border rounded-md space-y-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600',
            !hasErrors
              ? 'border-gray-400 dark:border-gray-700'
              : 'border-red-400 dark:border-red-700',
          ]"
        >
          <label class="block text-xs font-medium text-gray-700 dark:text-gray-200" for="name">
            {{ __('Folder Name') }}
          </label>
          <input
            id="name"
            v-model="value"
            :placeholder="__('Type your folder name here')"
            class="block w-full border-0 p-0 bg-gray-100 dark:bg-gray-900 placeholder-gray-400 sm:text-sm text-black dark:text-white focus:outline-none focus:ring-0"
            name="name"
            type="text"
          />
        </div>
        <template v-if="hasErrors">
          <p
            v-for="(error, index) in errorsList"
            id="email-error"
            :key="index"
            class="mt-2 text-sm text-red-600"
          >
            {{ error }}
          </p>
        </template>
      </div>
    </template>
    <template v-slot:submitButton>
      <Button
        :disabled="value === oldPath"
        class="w-full sm:w-auto"
        type="submit"
        variant="primary"
      >
        {{ __('Rename Folder') }}
      </Button>
    </template>
    <template v-slot:cancelButton>
      <Button class="w-full sm:w-auto" type="button" variant="secondary" @click="closeModal(name)">
        {{ __('Cancel') }}
      </Button>
    </template>
  </InputModal>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import Button from '@/components/Elements/Button'
import InputModal from '@/components/Modals/InputModal'
import { useErrors } from '@/hooks'

const store = useStore()
const props = defineProps(['name', 'onSubmit', 'oldPath'])
let value = ref(null)

onMounted(() => (value.value = props.oldPath))
const { hasErrors, errorsList } = useErrors('renameFolder')

const closeModal = name => store.dispatch('nova-file-manager/closeModal', name)
const submit = () => props.onSubmit(value.value)
</script>
