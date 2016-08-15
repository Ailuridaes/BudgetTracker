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
            removeIncome: removeIncome,
            getIncomeList: function(){return incomeList},
            getIncomeTotal: function(){return incomeTotal},
            addExpense: addExpense,
            removeExpense: removeExpense,
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

        function removeIncome(income) {
            var index = incomeList.indexOf(income);
            if (index>-1) {
                incomeList.splice(index, 1);
                incomeTotal -= income.amount;
            }
            return incomeList;
        }

        function removeExpense(expense) {
            var index = expenseList.indexOf(expense);
            if (index>-1) {
                expenseList.splice(index, 1);
                expenseTotal -= expense.amount;
            }
            return expenseList;
        }
    }


})();
