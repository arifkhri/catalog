import Card from '../../../../components/Card';
import style from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function CategoryItem({children}: Props) {
  return (
    <Card className="p-3">
      {children}
    </Card>
  );
}
