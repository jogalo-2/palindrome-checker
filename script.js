const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

checkBtn.addEventListener("click", () => {
  const text = input.value.trim();
  result.className = "";

  if (text === "") {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(text)) {
    result.textContent = `${text} is a palindrome.`;
    result.classList.add("palindrome");
  } else {
    result.textContent = `${text} is not a palindrome.`;
    result.classList.add("not-palindrome");
  }
});
 