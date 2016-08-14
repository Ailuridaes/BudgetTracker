(function(){
    'use strict';

    angular
        .module('app')
        .controller('BudgetController', BudgetController);

    BudgetController.$inject = ['budgetFactory'];

    /* @ngInject */
    function BudgetController(budgetFactory) {
        var vm = this;
        vm.incomeTotal;
        vm.expenseTotal;
        vm.remainder;

        // use array so can ng-repeat same template for both sections
        var income = {
            title: "Income",
            addItem: addIncome,
            list: [],
            newItem: {}
        };
        var expenses = {
            title: "Expense",
            addItem: addExpense,
            list: [],
            newItem: {}
        };
        vm.budgetComponents = [income, expenses];

        activate();

        function activate() {
            income.list = budgetFactory.getIncomeList();
            expenses.list = budgetFactory.getExpenseList();
            vm.incomeTotal = budgetFactory.getIncomeTotal();
            vm.expenseTotal = budgetFactory.getExpenseTotal();
            vm.remainder = budgetFactory.getRemainder();
        }

        function addIncome(entry) {
            income.list = budgetFactory.addIncome(entry);
            vm.incomeTotal = budgetFactory.getIncomeTotal();
            vm.remainder = budgetFactory.getRemainder();
            income.newItem = {};
        }

        function addExpense(entry){
            expenses.list = budgetFactory.addExpense(entry);
            vm.expenseTotal = budgetFactory.getExpenseTotal();
            vm.remainder = budgetFactory.getRemainder();
            expenses.newItem = {};
        }
    }

})();
