import { ref } from "vue";
import type { Employee } from "../models/Employee";

export function useEmployee() {
  const employees = ref<Employee[]>([]);

  const addEmployee = (employee: Employee) => {
    const id = employees.value.length + 1;
    employees.value.push({ ...employee, id });
    console.log(employees.value);
  };

  return { employees, addEmployee };
}