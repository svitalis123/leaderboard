const render = async (x) => {
  let result;
  let errors;
  await fetch(x).then((Response) => Response.json()).then((json) => {
    result = json.result;
  }).catch((error) => { errors = error; });
  const newresult = result.sort((a, b) => b.score - a.score);
  const thelist = document.getElementById('list');
  if (errors) {
    thelist.innerText = `${errors}`;
  }
  const whattoappend = newresult.map((res) => `<li><p>${res.user}:</p>${res.score}</li>`);
  thelist.innerHTML = whattoappend.join('');
  return result;
};

export default render;