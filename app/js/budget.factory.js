(function() {

    'use strict';

    angular
        .module('app')
        .factory('budgetFactory', budgetFactory);

    //budgetFactory.$inject = [''];

    /* @ngInject */
    function budgetFactory() {
        var incomeList = [];
        var expenseList = [];
        var incomeTotal = 0;
        var expenseTotal = 0;

        var service = {
            addIncome: addIncome,
            getIncomeList: function(){return incomeList},
            getIncomeTotal: function(){return incomeTotal},
            addExpense: addExpense,
            getExpenseList: function(){return expenseList},
            getExpenseTotal: function(){return expenseTotal},
            getRemainder: function(){return incomeTotal - expenseTotal;}
        };

        return service;


        function addIncome(income) {
            incomeList.push(income);
            incomeTotal += income.amount;
            return incomeList;
        }

        function addExpense(expense) {
            expenseList.push(expense);
            expenseTotal += expense.amount;
            return expenseList;
        }
    }


})();
