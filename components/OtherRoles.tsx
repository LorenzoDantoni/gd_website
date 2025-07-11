import { User } from "lucide-react";

interface OtherRolesProps {
  title: string;
  members: { name: string; role: string }[];
}

export function OtherRoles({ title, members }: OtherRolesProps) {
  return (
    <section className="bg-gray-200 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {members.map((member) => (
              <div key={member.name} className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2">
                <User className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-base font-medium text-gray-800">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
