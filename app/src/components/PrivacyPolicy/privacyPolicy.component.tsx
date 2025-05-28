interface PrivacyPolicyProps {
  id: number;
  title: string;
  content: string;
}
export function PrivacyPolicyComponent(props: Readonly<PrivacyPolicyProps>) {
  return (
    <div>
      <div className="w-full font-bold leading-tight">{props.title}</div>
      <div className="w-full">{props.content}</div>
    </div>
  );
}
