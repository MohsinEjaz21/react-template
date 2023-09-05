import ButtonWidget from '@src/components/Widgets/ButtonWidget';
import { store$ } from '@src/store';
import style from './HomePage.module.scss';

export const HomePage = () => {
  const store = store$.use();
  return (
    <div className={style[store.className]}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <pre>{JSON.stringify(store, null, 2)}</pre>
      <ButtonWidget kind="ok" onClick={() => { store$.className.set('gray') }}>GRAY</ButtonWidget>
      <ButtonWidget kind="ok" onClick={() => { store$.className.set('green') }}>GREEN</ButtonWidget>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis voluptatibus perspiciatis eius soluta! Maiores voluptatibus libero porro id, ullam odio dicta amet pariatur in. Molestias facere voluptatum impedit esse distinctio aliquid! Non aperiam eveniet suscipit expedita ipsam ipsum ducimus minus commodi qui esse temporibus eum dicta, illo labore illum obcaecati nemo ut laudantium corporis dolore libero unde dolorem neque? Eaque sunt nulla, quisquam dicta, ea corporis quam atque aliquid laborum in debitis cum dolorem saepe nihil accusamus dolore, vitae natus sed consectetur maxime ipsum. Voluptates voluptatibus incidunt, nulla excepturi soluta corrupti officia sequi quidem sit eos nam et accusantium, aspernatur, vero asperiores molestiae! Ullam odio modi voluptatem sequi expedita laborum rerum, voluptas aliquam iure, quas voluptatum deserunt nam veritatis. Sed, eaque reprehenderit!</p>
    </div>
  );
}
