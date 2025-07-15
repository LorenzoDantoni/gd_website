import ContactCard from '@/components/ContactCard';
import RegionalContact from '@/components/RegionalContact';
import { contatti } from '@/data/contatti';

const ContattiPage = () => {
  const regionalContact = contatti.find(c => c.federation === 'Regionale');
  const otherContacts = contatti.filter(c => c.federation !== 'Regionale');

  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg py-7 flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Contatti
          </h1>
        </div>
      </header>
      <main className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {regionalContact && <RegionalContact {...regionalContact} />}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Federazioni Provinciali
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {otherContacts.map((contact) => (
                <ContactCard key={contact.federation} {...contact} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContattiPage;


