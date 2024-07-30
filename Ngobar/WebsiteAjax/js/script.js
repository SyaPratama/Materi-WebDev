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
        $('body').css({
          'overflow': 'hidden'
        })
        $('.wrapper').css({
          'height':'100vh'
        })
        setTimeout(() => {
          $('html body').css({
            'overflow': 'auto'
          })
          $(".wrapper").toggleClass("hideLoader");
          $.cookie("SESSION_TOKEN", json.token);
          $('#login')[0][0].value = "";
          $('#login')[0][1].value = "";
          RefreshPage();
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

async function getJurnals(token) {
  if (token !== null) {
    const api = await fetch(`${url}jurnals`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    let html = '';
    if (api.status == 200) {
      const json = await api.json();
      const { data } = json;
      data.forEach(function (val) {
        html += `
        <tr>
            <td>${val.id}</td>
            <td>${val.title}</td>
            <td>${val.content}</td>
            <td>${val.date}</td>
            <td>${val.users_id}</td>
          </tr>`
      });
      return $('tbody').html(html)
    }
  }
};


// Cookies
function RefreshPage() {
  $(".loginForm").toggleClass("hide");
  $(".container").toggleClass("hide");
  const token = $.cookie('SESSION_TOKEN') || null;
  if(token !== null){
    return getJurnals(token);
  }
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
