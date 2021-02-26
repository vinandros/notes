function sockMerchant(n, ar) {
  let pairs = 0;
  let evaluated = [];
  for (let i = 0; i < n; i++) {
    if (!evaluated.includes(ar[i])) {
      evaluated.push(ar[i]);
      const result = ar.filter((color) => color === ar[i]);
      pairs += Math.trunc(result.length / 2);
    }
  }
  return pairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
