// Login Api
const url = "https://apijurnal.ndamelweb.com/public/api/v1/";
(function () {
  $("#login").on("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataJSON = JSON.stringify(Object.fromEntries(formData));
    try {
      const api = await fetch(`${url}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: dataJSON,
      });
      if (api.status === 200) {
        const json = await api.json();
        $(".wrapper").toggleClass("hideLoader");
        setTimeout(() => {
          $(".wrapper").toggleClass("hideLoader");
          $.cookie("SESSION_TOKEN", json.token);
          $('#login')[0][0].value = "";
          $('#login')[0][1].value = "";
          return RefreshPage();
        }, 5000);
      } else {
        const { message = null, password = null } = await api.json();
        if (message !== null) {
          throw message;
        } else if (password !== null) {
          throw password[0];
        }
      }
    } catch (err) {
      alert(err);
    }
  });
})();

(async function(token){
  if(token !== null){
    const api = await fetch(`${url}jurnals`,{
      method:"GET",
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':`Bearer ${token}`
      }
    });

    if(api.status === 200){
      const json = await api.json();
      const {data} = json;
      let html = ''
      data.forEach(function(val){
        html += `
        <tr>
            <td>${val.id}</td>
            <td>${val.title}</td>
            <td>${val.content}</td>
            <td>${val.date}</td>
            <td>${val.users_id}</td>
          </tr>`
      });
      $('tbody').html(html)
    }
  }
})($.cookie('SESSION_TOKEN') || null);


// Cookies
function RefreshPage() {
  $(".loginForm").toggleClass("hide");
  $(".container").toggleClass("hide");
  return;
}

$(window).on("load", function () {
  if ($.cookie("SESSION_TOKEN")) {
    return RefreshPage();
  }
});

$(document).on("click", function (e) {
  if (e.target.getAttribute("id") === "logout") {
    $.removeCookie("SESSION_TOKEN");
    $('tbody').html('');
    return RefreshPage();
  }
});
