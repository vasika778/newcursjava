const numberOfil = promt('Сколько фильмов вы уже просмотрели?', '');

const personalMoviDB = {

    count:numberOfil,
    movis: {},
    actors: {},
    geners: [],
    prive: false
};


const a = prompt('Один из последних просмотреных фильмов', ''),
      b = prompt('Насколько оцениваете?', ''),
      c = prompt('Один из последних просмотреных фильмов', ''),
      d = prompt('Насколько оцениваете?', '');


personalMoviDB.movis[a]=b;
personalMoviDB.movis[c]=d;