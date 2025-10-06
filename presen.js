'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}



function appearMycode () {
  const img = document.getElementById("apperMycode");
  if(img.src.includes("mycode.jpg")) {//.includes()は配列に指定した要素があればtrueを返す。なければfalse
    img.src ="";
  } else {
  img.src="mycode.jpg";
  }
}

const buttonON = document.getElementById("mycodeButton");
buttonON.addEventListener("click", appearMycode);

