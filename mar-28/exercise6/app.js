let str = prompt('enter a string');

if (str.length > 0)
  alert(str[str.length - 1] + str.slice(1, str.length - 1) + str[0]);
else alert('enter a valid string');
