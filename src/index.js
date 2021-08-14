module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    } else {
        let num1;
        let num2;
        let num3;
        let oneToNineteen = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
        let twentyToNinety = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
        let a = number.toString().split('');
        if (number < 20) {
            return oneToNineteen[number].substr(1);
        } else if (number < 100) {
            num1 = a[a.length - 1];
            num2 = a[a.length - 2];
            return (twentyToNinety[num2] + oneToNineteen[num1]).substr(1);
        } else if (Number(number.toString().substr(-2)) < 20) {
            num3 = a[a.length - 3];
            return (oneToNineteen[num3] + ' hundred' + oneToNineteen[Number(number.toString().substr(-2))]).substr(1);
        } else {
            num1 = a[a.length - 1];
            num2 = a[a.length - 2];
            num3 = a[a.length - 3];
            return (oneToNineteen[num3] + ' hundred' + twentyToNinety[num2] + oneToNineteen[num1]).substr(1);
        }
    }
}
