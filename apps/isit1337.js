const is1337 = date => {
  return date.getHours() == 13 && date.getMinutes() == 37;
};

const buzz = i => {
  setTimeout(()=>{
    if (i%2){
      Bangle.buzz();
      msg('1337!', 4);
    }
    else {
      Bangle.beep();
      msg('1337!', 8);
    }
    if (i<15) buzz(i+1);
  }, 300);
};

const msg = (txt, size) => {
  g.clear();
  g.setFontAlign(0,0); // center font
  g.setFont("6x8",size); // bitmap font, 8x magnified
  g.drawString(txt, g.getWidth()/2, g.getHeight()/2);
  g.flip();
};

const run = date => {
  if (is1337(date)) buzz(1);
  else msg('NOT 1337', 4);

  // Watch the watch every X seconds
  setTimeout(() => {
    const date = new Date();
    return run(date);
  }, 15000);

};

run(new Date());

// Fake it..
setWatch(() => {
  const date = new Date();
  date.setHours(13);
  date.setMinutes(37);
  return run(date);
}, BTN2);
