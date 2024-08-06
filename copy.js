// 10장 node.js
//얕은복사
let original = { name: "Alice", address: { city: "Wonderland" } };
let shallowCopy = { ...original };
// 원본 데이터 변경
original.name = "Bob";
original.address.city = "New Wonderland";
console.log(shallowCopy.name); // "Alice"
console.log(shallowCopy.address.city); // "New Wonderland" (원본과 공유됨)
// 여기서 name은 원시 값이기 때문에 복사 시 독립적으로 존재하게 되어, original의 name을 변경해도 shallowCopy의 name은 영향을 받지 않습니다.
// 반면에 address는 객체이므로 얕은 복사 시 참조가 복사되어 원본과 복사본이 같은 address 객체를 참조하게 됩니다. 따라서 address.city를 변경하면 원본과 복사본 모두에 영향을 미칩니다.



//깊은복사
let original = { name: "Alice", address: { city: "Wonderland" } };
let deepCopy = JSON.parse(JSON.stringify(original));
// 원본 데이터 변경
original.name = "Bob";
original.address.city = "New Wonderland";
console.log(deepCopy.name); // "Alice"
console.log(deepCopy.address.city); // "Wonderland"
 //원본 객체나 배열의 모든 단계 깊이의 데이터를 완전히 복사합니다. 즉, 원본 데이터와 복사된 데이터는 서로 완전히 독립적인 객체가 됩니다. 따라서 원본데이터를 변경해도 깊은복사객체는 변하지 않음.
