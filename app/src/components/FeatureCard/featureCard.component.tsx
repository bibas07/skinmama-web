import { Card, CardContent, CardTitle } from '@skinmama/components/ui/card';
interface FeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
export function CardComponents(props: Readonly<FeatureProps>) {
  return (
    <Card className="transition-transform duration-500 hover:scale-105 focus-within:scale-105 hover:shadow-2xl shadow-amber-600">
      <CardTitle className="text-xl text-center">{props.title}</CardTitle>
      <CardContent>{props.description}</CardContent>
    </Card>
  );
}
