import Button from "./Button";
import SectionTitle from "./SectionTitle";
import { ContactMeInfoObject } from "./ContactMeInfoObject";
import { ContactMeSocialObject } from "./ContactMeSocialObject";
import ContactMeInfo from "./ContactMeInfo";
import ContactMeSocial from "./ContactMeSocial";
export default function ContactMe() {
  return (
    <section className="w-full h-auto  py-[96px] flex justify-center">
      <div className="flex flex-col justify-center items-center gap-12">
        <div>
          <Button variant="secondary" size="sm" className="w-[122px] h-[28px]">
            Get in touch
          </Button>
          <div className="w-[550px] h-auto">
            <SectionTitle text=" What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
          </div>
        </div>

        {/* Contact info */}

        <div className="w-auto h-auto flex flex-col justify-center items-center gap-4">
          {ContactMeInfoObject.map((item) => (
            <ContactMeInfo
              key={item.id}
              icon={item.icon}
              description={item.description}
              symbol={item.symbol}
            />
          ))}
        </div>

        {/* Social Media */}

        <div className="flex flex-col justify-center">
          {ContactMeSocialObject.map((item) => (
            <ContactMeSocial
              key={item.id}
              description={item.description}
              social={item.social}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
