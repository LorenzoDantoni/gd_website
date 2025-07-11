import Image from "next/image";

interface VipMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface VipMembersProps {
  members: VipMember[];
}

export function VipMembers({ members }: VipMembersProps) {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {members.map((member) => (
            <div
              key={member.name}
              className="w-full max-w-xs flex flex-col items-center text-center rounded-lg border border-gray-300 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-32 w-32 rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.imageUrl}
                  alt={`Foto di ${member.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {member.name}
              </h3>
              <p className="mt-4 text-base font-semibold text-orange-500">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}