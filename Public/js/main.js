const Upper_Alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Lower_Alpha = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

generateBtn.addEventListener('click', () => {
  let characters = alpha;
  incNumbers.checked ? (characters += numbers) : '';
  incSymbols.checked ? (characters += symbols) : '';
  passwordTxt.value = generatePassword(length.value, characters);
});

const generatePassword = (length, characters) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', () => {
  passwordTxt.select();
  document.execCommand('copy');
  alert('Password Copied');
});
