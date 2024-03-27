//variables
const showModalBtn = document.querySelectorAll('.show-modal');
const hiddenModal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const backGround = document.querySelector('.overlay');
//functions
const closeSocial = function () {
  hiddenModal.classList.add('hidden');
  backGround.classList.add('hidden');
};

const openSocial = function (i) {
  console.log(i);
  hiddenModal.classList.remove('hidden');
  backGround.classList.remove('hidden');
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', openSocial);
}

closeBtn.addEventListener('click', closeSocial);
backGround.addEventListener('click', closeSocial);

document.addEventListener('keydown', function (i) {
  if (i.key === 'Escape' && !backGround.classList.contains('hidden')) {
    closeSocial();
  }
});
