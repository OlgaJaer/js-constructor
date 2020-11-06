import image from './assets/image.png'
import {
  TextBlock,
  ImageBlock,
  ColumnsBlock,
  TitleBlock,
} from './classes/blocks'

const text = `Нужен текст `

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'green',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),

  // {
  //   type: 'title',
  //   value: 'Конструктор сайтов на чистом JavaScript',
  //   options: {
  //     tag: 'h2',
  //     styles: {
  //       background: 'linear-gradient(to right, #ff0099, #493240)',
  //       color: 'green',
  //       padding: '1.5rem',
  //       'text-align': 'center',
  //     },
  //   },
  // },

  // {
  //   type: 'text',
  //   value: text,
  //   options: {
  //     styles: {
  //       background: 'linear-gradient(to left, #f2994a, #f2c94c)',
  //       padding: '1rem',
  //       'font-weight': 'bold',
  //     },
  //   },
  // },
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: { width: '500px', height: 'auto' },
    alt: 'This is a picture',
  }),
  // {
  //   type: 'image',
  //   value: image,
  //   options: {
  //     styles: {
  //       padding: '2rem 0',
  //       display: 'flex',
  //       'justify-content': 'center',
  //     },
  //     imageStyles: { width: '500px', height: 'auto' },
  //     alt: 'This is a picture',
  //   },
  // },
  new ColumnsBlock(
    [
      'Приложение на чистом JavaScript, без использования библиотек',
      'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
      'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),

  // {
  //   type: 'columns',
  //   value: [
  //     'Приложение на чистом JavaScript, без использования библиотек',
  //     'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
  //     'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
  //   ],
  //   options: {
  //     styles: {
  //       background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
  //       padding: '2rem',
  //       color: '#fff',
  //       'font-weight': 'bold',
  //     },
  //   },
  // },
]
