import Work from "./Content's-Child/Work";
import Inquire from "./Content's-Child/Inquire";
import Community from "./Content's-Child/Community";
import Manual from "./Content's-Child/Manual";
import { useContext } from 'react';
import userSelectContext from '../Context/userSelectContext';

export default function Contents() {
  const { userSelect } = useContext(userSelectContext);

  switch (userSelect) {
    case 'Manual':
      return <Manual />;
    case 'Community':
      return <Community />;
    case 'Inquire':
      return <Inquire />;
    default:
      return <Work />;
  }
}
