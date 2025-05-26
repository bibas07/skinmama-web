import { PrivacyPolicyComponent } from '../../components/PrivacyPolicy/privacyPolicy.component';

const PrivacyInformation = [
  {
    id: 1,
    title: 'Privacy Policy',
    content: 'This is first privacy policy',
  },
  {
    id: 2,
    title: 'Number Two',
    content: 'This is second privacy policy',
  },
];
export function PrivacyPolicy() {
  return (
    <div className="container h-full flex-col mx-auto">
      <div className="text-center w-full py-8">
        {"SkinMama's Privacy Policy"}
      </div>

      <div className="flex flex-col gap-6">
        {PrivacyInformation.map((item) => (
          <PrivacyPolicyComponent
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
