const postscores = async (url, username, userscore) => {
  const messa = document.getElementById('message');
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: username,
      score: userscore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((Response) => Response.json()).then((json) => {
    messa.innerText = `${json.result}`;
    messa.style.background = 'green';
    messa.style.color = 'white';
    setTimeout(() => {
      messa.innerText = '';
      messa.style.background = 'white';
      messa.style.color = 'white';
    }, 3000);
  }).catch((error) => {
    messa.innerText = `${JSON.stringify(error)}`;
  });
};

export default postscores;
