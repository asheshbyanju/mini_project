(function() {
  let get_value = function() {
    let val1 = document.getElementById('answer').value;

    if(val1 == null || val1 == "")
      alert("Invalid answer");
    else
      alert("Success");
  }

  let btn = document.getElementById('post');
  btn.onclick = function() { get_value(); }

})();
