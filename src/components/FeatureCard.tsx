interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard ({ icon, title, description } : FeatureCardProps) {
    return (
        <div className="bg-gaming-darker border border-gray-800 p-4 rounded-xl text-center hover:border-gaming-purple/50 transition-all group shadow-md hover:shadow-lg">
      <div className="w-8 h-8 mx-auto mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-1 group-hover:text-gaming-purple">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    )
}