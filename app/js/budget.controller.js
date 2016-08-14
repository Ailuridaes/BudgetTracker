(function(){
    'use strict';

    angular
        .module('app')
        .controller('BudgetController', BudgetController);

    BudgetController.$inject = ['budgetFactory'];

    /* @ngInject */
    function BudgetController(budgetFactory) {
        var vm = this;
        var incomeTotal;
        var expenseTotal;
        var remainder;

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
            // incomeList = [{desc: "JOB", amount:100}, {desc:"STRIPPING", amount:500}];
            // console.log(incomeList);
            // income.list = incomeList;
            // console.log(income.list[0].desc);
        }

        function addIncome(entry) {
            income.list = budgetFactory.addIncome(entry);
            incomeTotal = budgetFactory.getIncomeTotal();
            income.newItem = {};
        }

        function addExpense(entry){
            expenses.list = budgetFactory.addExpense(entry);
            expenseTotal = budgetFactory.getExpenseTotal;
            expenses.newItem = {};
        }
    }

})();
