var options = {
    textColour: '#2c3e50',
    outlineColour = 'transparent',
    textHeight: 18,
    depth: 0.8
   };

  window.onload = function() {
    try {
      TagCanvas.Start('skillCanvas', '', options);
    } catch(e) {
      // if something went wrong, hide the canvas container
      document.getElementById('skillCanvasContainer').style.display = 'none';
    }
  };

