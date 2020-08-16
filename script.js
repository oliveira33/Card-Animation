function selecionarOpcao(elmnt, className, color) {
    var x = document.getElementsByClassName(className)[0].children;
    for (i = 1; i < x.length; i++) {
      x[i].style.backgroundColor = '#fff';
      x[i].style.color = '#111';
      x[i].style.border = 'solid 1px ' + color;
    }
    elmnt.style.backgroundColor = color;
    elmnt.style.color = '#fff';
    elmnt.style.border = "1px solid #eee";
  }