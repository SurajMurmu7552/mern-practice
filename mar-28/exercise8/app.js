let str = prompt('enter a string');

if (str.length > 2)
  alert(str.slice(str.length - 3) + str + str.slice(str.length - 3));
else alert('enter a valid string');
