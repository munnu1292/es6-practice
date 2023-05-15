const ages = [12, 14, 15, 16, 35];
const ages2 = [15, 24, 19];
const ages3 = [24, 26, 29];
// const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);

// const business = 540;
// const minister = 450;
// const sochib = 650;
const takaPoisa = [850, 450, 250];
// const maximum = Math.max(business,minister,sochib);
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);