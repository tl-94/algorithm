/**
 * @param {number[]} balance
 */
 var Bank = function(balance) {
    this.balance = balance;

};
Bank.prototype.checkAccount = function(...args) {
    for(let i = 0; i < args.length;i++){
        if(args[i]-1 < 0 ||args[i]-1 >=this.balance.length){
            return false;
        }
    }
    return true
};
/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if(!this.checkAccount(account1,account2) || this.balance[account1 - 1] < money)return false;
    this.balance[account1 - 1] -= money
    this.balance[account2 - 1] += money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if(!this.checkAccount(account))return false;
    this.balance[account - 1] += money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if(!this.checkAccount(account) || this.balance[account-1] < money)return false;    
    this.balance[account - 1] -= money
    return true
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */