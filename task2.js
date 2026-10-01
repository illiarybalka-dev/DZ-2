function digitSum(k) {
    k = Math.abs(k);
    if (k === 0) {
        return 0;
    }
    return (k % 10) + digitSum(Math.floor(k / 10));
}
