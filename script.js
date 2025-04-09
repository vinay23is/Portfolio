
document.getElementById('theme-toggle').onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
};

window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
};

// Scroll progress bar
window.onscroll = function () {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
};

// Typewriter effect
const words = ["a UI/UX Dev", "a CS Grad", "a Creative Engineer", "an AI & IoT Nerd"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  const typewriter = document.getElementById("typewriter");
  if (!typewriter) return;
  current = words[i];
  typewriter.innerHTML = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(type, 1000);
  }
}

setTimeout(type, 500);
