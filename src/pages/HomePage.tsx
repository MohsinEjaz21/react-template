import ButtonWidget from '@src/components/Widgets/ButtonWidget';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <ButtonWidget kind="ok" onClick={() => { console.log('ok') }}>OK</ButtonWidget>
    </div>
  );
}
