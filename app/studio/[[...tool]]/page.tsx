export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-ksf-bg flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <h1 className="text-ksf-text text-2xl font-bold tracking-tight mb-4">
          Killer Studio FX — CMS
        </h1>
        <p className="text-ksf-secondary text-sm mb-6 leading-relaxed">
          Para acceder al panel de administración de contenido, configurá tu proyecto
          en Sanity y desplegá el studio como app independiente, o usá el studio
          en sanity.io/manage.
        </p>
        <p className="text-ksf-secondary text-xs">
          Configurá <code className="text-ksf-accent">NEXT_PUBLIC_SANITY_PROJECT_ID</code> en <code className="text-ksf-accent">.env.local</code>
        </p>
      </div>
    </div>
  )
}
