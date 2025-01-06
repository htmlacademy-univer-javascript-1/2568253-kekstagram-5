
export const photos = [
  {
    url: 'photos/1.jpg',
    description: 'зима',
    likes: 150,
    comments: 20,
  },
  {
    url: 'photos/2.jpg',
    description: 'лето',
    likes: 200,
    comments: 45,
  },
  {
    url: 'photos/3.jpg',
    description: 'Горы и озеро',
    likes: 90,
    comments: 10,
  },
];

import { getRandomInteger, getRandomArrayElement } from './util.js';

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

// Функция для генерации уникальных ID
export const generateUniqueIds = (count) => {
  const ids = Array.from({ length: count }, (_, i) => i + 1);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
};

// Функция для создания комментариев
export const createComments = (commentId) => ({
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
});

// Функция для создания описания фотографии
export const createPhotoDescription = (id, url, commentId) => {
  return {
    id,
    url,
    description: 'Красивые кошки гуляют по полю:) Вот бы не было дедлайнов, извиняюсь, что я всё просрочила:(((((((',
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 30) }, (_, index) => createComments(commentId + index)),
  };
};

