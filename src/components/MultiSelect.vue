<template>
  <div>
        <Multiselect
        v-model="value"
        mode="tags"
        :close-on-select="false"
        :searchable="true"
        :create-option="true"
        :options="[
            { value: 'batman', label: 'Batman' },
            { value: 'robin', label: 'Robin' },
            { value: 'joker', label: 'Joker' },
        ]"
        />
  </div>
</template>

<script>
  import Multiselect from '@vueform/multiselect'
  import '@vueform/multiselect/themes/default.scss'
  export default {
    components: {
      Multiselect,
    },
    data() {
      return {
        mode: 'tags',
        value: ['batman'],
        closeOnSelect: false,
        options: [
            { value: 'batman', label: 'Batman' },
            { value: 'robin', label: 'Robin' },
            { value: 'joker', label: 'Joker' },
        ],
        searchable: true,
        createOption: true
        }
    }
  }
</script>

