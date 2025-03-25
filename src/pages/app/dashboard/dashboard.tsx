import { AmountCard } from '@/components/amount-card'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <AmountCard title="Campanhas ativas" value={2} />
        <AmountCard title="Média por campanha" value={3207} />
        <AmountCard title="Total" value={7310} />
      </div>
    </div>
  )
}
