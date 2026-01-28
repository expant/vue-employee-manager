<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { Employee } from '../../models/Employee';

const form = reactive({
  firstName: '',
  lastName: '',
  experience: '',
  age: '',
  address: '',
});

const props = defineProps<{
  employee: Employee | null;
}>();
defineEmits(['submit']);

watch(
  () => props.employee,
  (value) => {
    if (!value) return;
    Object.assign(form, value);
  },
  { immediate: true }
);
</script>

<template>
  <form class="employee-form" @submit.prevent="$emit('submit', form)">
    <div class="row">
      <div class="field">
        <label for="firstName">Имя</label>
        <input id="firstName" v-model="form.firstName" type="text" />
      </div>

      <div class="field">
        <label for="lastName">Фамилия</label>
        <input id="lastName" v-model="form.lastName" type="text" />
      </div>
    </div>

    <div class="field">
      <label for="experience">Стаж</label>
      <input id="experience" v-model="form.experience" type="text" />
    </div>

    <div class="field">
      <label for="age">Возраст</label>
      <input id="age" v-model="form.age" type="number" min="0" />
    </div>

    <div class="field">
      <label for="address">Адрес</label>
      <input id="address" v-model="form.address" type="text" />
    </div>

    <div class="actions">
      <button type="submit">Сохранить</button>
    </div>
  </form>
</template>

<style scoped>
.employee-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.row {
  display: flex;
  gap: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

label {
  font-size: 14px;
  margin-bottom: 4px;
  color: #555;
}

input {
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>