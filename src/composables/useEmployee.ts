import { ref } from "vue";
import type { Employee } from "../models/Employee";

export function useEmployee() {
  const employees = ref<Employee[]>([]);
  const selectedEmployee = ref<Employee | null>(null);

  const addEmployee = (employee: Employee) => {
    const id = employees.value.length + 1;
    employees.value.push({ ...employee, id });
  };

  const editEmployee = (employee: Employee) => {
    employees.value = employees.value.map(current => current.id === employee.id ? employee : current);
  };

  return { employees, selectedEmployee, addEmployee, editEmployee };
}