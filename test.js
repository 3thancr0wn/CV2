function divide(weight){
   return weight % 4 === 0 ? true : false;
}

console.log(divide(2));

// Test.assertEquals(divide(4), true);
// Test.assertEquals(divide(2), false);
// Test.assertEquals(divide(5), false);
// Test.assertEquals(divide(88), true);
// Test.assertEquals(divide(100), true);
// Test.assertEquals(divide(67), false);
// Test.assertEquals(divide(90), true);
// Test.assertEquals(divide(10), true);
// Test.assertEquals(divide(99), false);
// Test.assertEquals(divide(32), true);