import ButtonWidget from '@src/components/Widgets/ButtonWidget';
import style from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={style.container}>
      <h1>Home Page</h1>
      <ButtonWidget kind="ok" onClick={() => { console.log('ok') }}>OK</ButtonWidget>
    </div>
  );
}
