import { User } from "lucide-react";

interface ProvincialOrganizationProps {
  title: string;
  direzioneProvincialeMembers: { name: string; role?: string }[];
  assembleaProvincialeMembers: { name: string; role?: string }[];
}

export function ProvincialOrganization({
  title,
  direzioneProvincialeMembers,
  assembleaProvincialeMembers,
}: ProvincialOrganizationProps) {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="space-y-16">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-4">
                Direzione Provinciale
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {direzioneProvincialeMembers.map((member) => (
                <div key={member.name} className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2">
                  <User className="h-5 w-5 text-orange-500" />
                  <p className="text-base font-medium text-gray-800">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-4">
                Assemblea Provinciale
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {assembleaProvincialeMembers.map((member) => (
                <div key={member.name} className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2">
                  <User className="h-5 w-5 text-orange-500" />
                  <p className="text-base font-medium text-gray-800">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
