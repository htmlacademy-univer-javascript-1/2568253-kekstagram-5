import { generateUniqueIds, createPhotoDescription } from './data.js';

const photoIds = generateUniqueIds(25);

const photoUrls = photoIds.map((id) => `photos/${id}.jpg`);


/*
Объект состоит из:
id- число от 1 до 25, не повторяется
url-строка photos/{{i}}.jpg, где {{i}} —
  это число от 1 до 25. Адреса картинок
   не должны повторяться.
description - описание
likes - кол-во лайков, число от 15 до 200
comments: массив из объектов из коммент(от 0 до 30):
  комментарий:
  id  - любое число, не должно повторяться
  avatar - img/avatar-{{случайное число от 1 до 6}}.svg
  message - любое выражение
  name - просто набор имен
*/
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

// Функция для генерации случайного числа в пределах заданного диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для выбора случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция для генерации уникальных ID
const generateUniqueIds = (count) => {
  const ids = Array.from({ length: count }, (_, i) => i + 1);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
};

const createComments = (commentId) => {
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  };
};

const createPhotoDescription = (id, url, commentId) => {
  return {
    id,
    url,
    description: 'Красивые кошки гуляют по полю:) Вот бы не было дедлайнов, извиняюсь, что я всё просрочила:(((((((',
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 30) }, (_, index) => createComments(commentId + index)),
  };
};

// Генерация уникальных id для фотографий
const photoIds = generateUniqueIds(25);

// Создание массива URL для каждой фотографии
const photoUrls = photoIds.map((id) => `photos/${id}.jpg`);

// Генерация массива описаний фотографий

const Photos = photoIds.map((id, index) => createPhotoDescription(id, photoUrls[index], index * 30)); // Для каждого фото стартуем ID комментариев с уникальной базой

console.log(Photos);
