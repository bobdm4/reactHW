export const Type = {
  SAVE_BUDGET: 'SAVE_BUDGET',
  ADD_EXPENCE: 'ADD_EXPENCE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

export const saveBudget = budget => ({
  type: Type.SAVE_BUDGET,
  payload: {
    budget,
  },
});

export const addExpense = expenseObject => ({
  type: Type.ADD_EXPENCE,
  payload: {
    expenseObject,
  },
});

export const removeExpence = id => ({
  type: Type.REMOVE_EXPENSE,
  payload: {
    id,
  },
});
