import Image from 'next/image';

interface StaffCardProps {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
    realImageUrl?: string;
}

export default function StaffCard({ name, role, description, imageUrl, realImageUrl }: StaffCardProps) {
    return (
        <div className="group relative bg-[#FAFAFA] rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 border border-black/[0.02] cursor-pointer">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden bg-white ring-8 ring-white shadow-sm">
                {/* Real photo (hidden by default, reveals on hover) */}
                {realImageUrl && (
                    <Image
                        src={realImageUrl}
                        alt={`${name} real photo`}
                        fill
                        sizes="192px"
                        className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transform scale-110 group-hover:scale-100 transition-all duration-700 ease-out z-10"
                    />
                )}
                {/* Cartoon avatar */}
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    sizes="192px"
                    className="object-cover relative transform scale-100 group-hover:scale-95 group-hover:opacity-0 transition-all duration-700 ease-out z-0"
                />
            </div>
            <h3 className="text-2xl font-bold text-[#111] mb-1">{name}</h3>
            <p className="text-sm font-bold tracking-widest uppercase text-[#C9A063] mb-4">{role}</p>
            <p className="text-[#666] text-sm leading-relaxed max-w-[200px]">
                {description}
            </p>
        </div>
    );
}
