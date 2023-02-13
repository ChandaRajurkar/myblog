document.getElementById("offer1").addEventListener("click", function() {
  var x = document.getElementById("offerpara1");
  if (x.style.display === "none") {
    x.style.display = "block";
    //document.getElementById("offerpara2").style.display = "none";
    document.getElementById("icondown1").style.display = "none";
    document.getElementById("iconup1").style.display = "block";
    
  
  } else {
    x.style.display = "none";
    //document.getElementById("hr").style.display = "none";
    document.getElementById("icondown1").style.display = "block";
    document.getElementById("iconup1").style.display = "none";
  }
});


document.getElementById("offer2").addEventListener("click", function() {
  var y = document.getElementById("offerpara2");
  if (y.style.display === "none") {
    y.style.display = "block";
    //document.getElementById("offerpara1").style.display = "none";
    document.getElementById("icondown2").style.display = "none";
    document.getElementById("iconup2").style.display = "block";
  } else {
    y.style.display = "none";
    document.getElementById("icondown2").style.display = "block";
    document.getElementById("iconup2").style.display = "none";
  }
});

const textElement = document.querySelector("#text");

const popupElement = document.querySelector("#popup");

textElement.addEventListener("click", function() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(textElement);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();

    popupElement.style.left = textElement.offsetLeft + "px";
    popupElement.style.top = textElement.offsetTop + textElement.offsetHeight + "px";
    popupElement.style.display = "block";
    setTimeout(function() {
      popupElement.style.display = "none";
    }, 2000);

  });



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var name = $("input[name='name']").val();
    var email = $("input[name='email']").val();
    var message = $("textarea[name='message']").val();

    if (!name || !email || !message) {
      alert("All fields are required.");
      return;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Invalid email address.");
      return;
    }

    var formData = {
      name: name,
      email: email,
      message: message
    };

    $.ajax({
      type: "POST",
      url: "form-processor.php",
      data: formData,
      success: function() {
        alert("Form submitted successfully.");
      }
    });
  });
});




