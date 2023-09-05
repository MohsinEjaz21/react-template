import ButtonWidget from '@src/components/Widgets/ButtonWidget';
import style from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={style.container}>
      <h1 className="heading">Home Page</h1>
      <ButtonWidget kind="ok" onClick={() => { console.log('ok') }}>OK</ButtonWidget>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis voluptatibus perspiciatis eius soluta! Maiores voluptatibus libero porro id, ullam odio dicta amet pariatur in. Molestias facere voluptatum impedit esse distinctio aliquid! Non aperiam eveniet suscipit expedita ipsam ipsum ducimus minus commodi qui esse temporibus eum dicta, illo labore illum obcaecati nemo ut laudantium corporis dolore libero unde dolorem neque? Eaque sunt nulla, quisquam dicta, ea corporis quam atque aliquid laborum in debitis cum dolorem saepe nihil accusamus dolore, vitae natus sed consectetur maxime ipsum. Voluptates voluptatibus incidunt, nulla excepturi soluta corrupti officia sequi quidem sit eos nam et accusantium, aspernatur, vero asperiores molestiae! Ullam odio modi voluptatem sequi expedita laborum rerum, voluptas aliquam iure, quas voluptatum deserunt nam veritatis. Sed, eaque reprehenderit!</p>
    </div>
  );
}
