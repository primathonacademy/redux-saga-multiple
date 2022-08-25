export const fetchJokeApi = () => {
  console.log('Api Call');

  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return fetch('https://icanhazdadjoke.com', config).then((res) => res.json());
};

export const fetchMathApi = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return fetch('http://numbersapi.com/random/math', config).then((res) =>
    res.text()
  );
};
