<template>
  <li
    class="relative col-span-1 flex rounded-md transition duration-100 cursor-pointer bg-gray-200 dark:bg-gray-900 hover:shadow-md rounded-md"
  >
    <button class="flex w-full flex-row items-center" @click="setPath(path)">
      <span
        class="flex-shrink-0 flex items-center justify-center py-4 pl-3 text-gray-900 dark:text-gray-100 text-sm font-medium"
      >
        <FolderIcon class="h-4 w-4" />
      </span>
      <span class="shrink px-2 py-2 truncate">
        <span
          class="whitespace-normal text-left break-all text-gray-800 dark:text-gray-200 font-medium text-sm hover:text-gray-900 dark:hover:text-gray-100"
        >
          {{ name }}
        </span>
      </span>
    </button>
    <div class="flex flex-row items-center">
      <div class="relative flex-1 flex items-center justify-between">
        <Menu as="div" class="relative inline-block text-left">
          <MenuButton
            class="flex items-center text-gray-500 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-600/50 rounded-full mr-2 p-0.5"
          >
            <EllipsisVerticalIcon class="h-4 w-4" />
          </MenuButton>

          <MenuItems
            class="z-50 origin-top-right absolute right-0 mt-2 w-36 select-none overflow-hidden bg-white dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 px-1"
          >
            <div class="py-1">
              <MenuItem>
                <button
                  class="hover:bg-gray-50 dark:hover:bg-gray-800 block w-full text-left cursor-pointer py-2 px-3 focus:outline-none focus:ring rounded truncate whitespace-nowrap text-gray-500 active:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600"
                  @click="openModal(`rename-folder-${id}`)"
                >
                  {{ __('NovaFileManager.actions.rename') }}
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  class="hover:bg-red-50 dark:hover:bg-red-600/20 block w-full text-left cursor-pointer py-2 px-3 focus:outline-none focus:ring rounded truncate whitespace-nowrap text-red-500 dark:text-red-500 dark:hover:text-red-700"
                  @click="openModal(`delete-folder-${id}`)"
                >
                  {{ __('NovaFileManager.actions.delete') }}
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  </li>

  <DeleteFolderModal :name="`delete-folder-${id}`" :on-confirm="onDelete" />

  <RenameFolderModal :name="`rename-folder-${id}`" :old-path="name" :on-submit="onRename" />
</template>

<script setup>
import { useStore } from 'vuex'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { FolderIcon } from '@heroicons/vue/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/vue/24/solid'
import RenameFolderModal from '@/components/Modals/RenameFolderModal'
import DeleteFolderModal from '@/components/Modals/DeleteFolderModal'

const props = defineProps({
    disk: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
})

const store = useStore()

const openModal = name => store.dispatch('nova-file-manager/openModal', name)
const setPath = path => store.dispatch('nova-file-manager/setPath', path)

const onRename = value =>
    store.dispatch('nova-file-manager/renameFolder', {
        id: props.id,
        oldPath: props.path,
        newPath: value,
    })

const onDelete = () =>
    store.dispatch('nova-file-manager/deleteFolder', {
        id: props.id,
        path: props.path,
    })
</script>
