/* 버튼들 */
const loginButton = document.querySelector('#loginButton');
const signUpButton = document.querySelector('#signUpButton');
const registerButton = document.querySelector('#registerButton');

/* loginSection에서 아이디입력 인풋과 비밀번호 인풋 */
const id = document.querySelector('#id');
const password = document.querySelector('#password');

/* registerSection에서 회원 정보를 입력하는 인풋들 */
const newId = document.querySelector('#newId');
const newPassWord = document.querySelector('#newPassWord');
const uName = document.querySelector('#uName');
const agency = document.querySelector('#agency');

/* 로그인 부분과 회원가입에 필요한 내용을 적는 부분 */
const loginSection = document.querySelector('#loginSection');
const registerSection = document.querySelector('#registerSection');

/* 회원가입 버튼 누르면 회원가입 입력창 보이게 하는 기능구현 */
signUpButton.addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.classList.add('hide');
  registerSection.classList.remove('hide');
});

/* 회원정보를 로컬스토리지에 저장하는 기능을 구현 */
registerButton.addEventListener('click', () => {
  /** 회원정보를 등록하는 함수 */
  function registerProcess(originUserInformation) {
    const userId = newId.value;
    const userPassWord = newPassWord.value;
    const username = uName.value;
    const userAgency = agency.value;
    const userInformation = {
      id: userId,
      password: userPassWord,
      name: username,
      agency: userAgency,
    };
    originUserInformation.push(userInformation);
    localStorage.setItem(
      'userInformation',
      JSON.stringify(originUserInformation)
    );
  }
  if (localStorage.getItem('userInformation') !== null) {
    const originUserInformation = JSON.parse(
      localStorage.getItem('userInformation')
    );
    registerProcess(originUserInformation);
  } else {
    const originUserInformation = [];
    registerProcess(originUserInformation);
  }
});

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const originUserInformation = JSON.parse(
    localStorage.getItem('userInformation')
  );
  originUserInformation.forEach((item) => {
    if (item.id === id.value) {
      if (item.password === password.value) {
        alert('로그인 성공!');
        window.open('http://localhost:3000/');
      } else {
        alert('비밀번호가 틀렸어요');
        password.value = ' ';
      }
    } else {
      alert('아이디가 틀렸어요');
      password.value = ' ';
      id.value = ' ';
    }
  });
});
