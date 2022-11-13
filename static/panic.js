const form = document.querySelector('form');
const input = document.querySelector('input');

function getCookie(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
    return match ? match[1] : null;
}

if (getCookie('panic') == null) {
  document.cookie = "panic=classroom.google.com;"
}

document.getElementById('panicForm').value = getCookie('panic')

form.addEventListener('submit', async event => {
    document.cookie = `panic=${input.value.trim()}`
});
