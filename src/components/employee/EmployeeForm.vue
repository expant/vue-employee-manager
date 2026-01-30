<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { Employee } from '../../models/Employee';

const props = defineProps<{
  employee: Employee | null;
}>();

const emit = defineEmits<{ submit: [Employee] }>();

const experienceOptions = [
  'Менее 1 года',
  '1–3 года',
  '3–5 лет',
  '5+ лет',
];

const form = reactive<Employee>({
  id: 0,
  firstName: '',
  lastName: '',
  experience: '',
  age: null,
  address: '',
});

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
  <form class="employee-form" @submit.prevent="emit('submit', form)">
    <div class="row">
      <div class="field">
        <label for="firstName">Имя</label>
        <input id="firstName" v-model.trim="form.firstName" type="text" required />
      </div>

      <div class="field">
        <label for="lastName">Фамилия</label>
        <input id="lastName" v-model.trim="form.lastName" type="text" required />
      </div>
    </div>

    <div class="field">
      <label for="experience">Стаж</label>
      <select id="experience" v-model.trim="form.experience" required>
        <option value="" disabled>Выберите стаж</option>
        <option v-for="option in experienceOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <div class="field">
      <label for="age">Возраст</label>
      <input id="age" v-model="form.age" type="number" min="18" max="100" required />
    </div>

    <div class="field">
      <label for="address">Адрес</label>
      <input id="address" v-model.trim="form.address" type="text" required />
    </div>

    <div class="actions">
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </div>
  </form>
</template>

<style scoped>
.row,
.employee-form {
  display: flex;
  gap: 12px;
}

.field,
.employee-form {
  flex-direction: column;
}

.field {
  display: flex;
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

input,
select {
  padding: 6px 32px 6px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 12px 8px;
}

select:focus {
  outline: none;
  border-color: #0969da;
  box-shadow: 0 0 0 1px #0969da;
}

option {
  background-color: #111;
  color: white;
}
</style>