const d = document;

const languajeSelector = (
  data,
  imgContainer,
  selected,
  $usos,
  $hello,
  $img,
  $video
) => {
  data.languajes.forEach((languaje) => {
    console.log($video);
    if (languaje.name === selected) {
      $usos.innerText = "";
      $hello.innerText = "";

      languaje.usos.forEach((uso) => {
        let el = d.createElement("li");
        el.innerText = uso;
        $usos.appendChild(el);
      });
      languaje.holaMundo.forEach((line) => {
        let code = d.createElement("li");
        code.innerText = line;
        $hello.appendChild(code);
      });
      if (selected === "JavaScript") {
        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
              console.log(stream);
              $video.srcObject = stream;
              $video.play();
              alert("Puedo verte");
            })
            .catch((err) => console.log());
        }
      }
      $img.src = languaje.proyecto;
    }
  });
};

export default languajeSelector;
