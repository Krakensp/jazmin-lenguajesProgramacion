const d = document;

const languajeSelector = (
  data,
  imgContainer,
  selected,
  $usos,
  $hello,
  $img
) => {
  data.languajes.forEach((languaje) => {
    if (languaje.name === selected) {
      $usos.innerText = "";

      languaje.usos.forEach((uso) => {
        let el = d.createElement("li");
        el.innerText = uso;
        console.log(uso);
        $usos.appendChild(el);

        // languaje.holaMundo.forEach((line) => {
        //   let code = d.createElement("span");
        //   code.innerHTML = "<br/>" + line;
        //   $hello.appendChild(code);
        // });
        $img.src = languaje.proyecto;
      });
    }
  });
  // languaje.holaMundo.forEach((line) => {
  //   let code = d.createElement("span");
  //   code.innerHTML = "<br/>" + line;
  //   $hello.appendChild(code);
  // });
  // $img.src = languaje.proyecto;
};

export default languajeSelector;
