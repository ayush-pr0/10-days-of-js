function getMaxLessThanK(n, k) {
    let maxNum = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let exp = i & j;
            if (exp < k && exp > maxNum) maxNum = exp;
        }
    }
    return maxNum;
}
