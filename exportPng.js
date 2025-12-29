export function exportSvgToPng(svgElement, size = 800) {
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgElement);
  
    const img = new Image();
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
  
    img.onload = () => {
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
  
      canvas.toBlob(blob => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "frog.png";
        a.click();
      });
    };
  
    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgStr)));
  }
  