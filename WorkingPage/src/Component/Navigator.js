import { useContext } from 'react';
import userSelectContext from '../Context/userSelectContext';

export default function Navigator() {
  const { setUserSelect } = useContext(userSelectContext);
  const onClick = (mode) => {
    setUserSelect(`${mode}`);
  };
  return (
    <ul>
      <button onClick={() => onClick('Manual')}>
        <li>사용법</li>
      </button>
      <button onClick={() => onClick('Community')}>
        <li>커뮤니티</li>
      </button>
      <button onClick={() => onClick('Inquire')}>
        <li>개발자에게 문의하기</li>
      </button>
      <button onClick={() => onClick('Work')}>
        <li>작업창으로 돌아가기</li>
      </button>
    </ul>
  );
}
