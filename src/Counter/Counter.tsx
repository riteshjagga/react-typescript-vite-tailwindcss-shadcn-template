import { Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'

type CounterProps = {
  value: number
  onIncrement: (event: React.MouseEvent<HTMLButtonElement>) => void
  onDecrement: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Counter = ({ value, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div>
      <p>Current Value: {value}</p>
      <div className="flex flex-wrap items-center gap-2 md:flex-row my-4">
        <Button variant="outline" size="icon" aria-label="Decrease" onClick={onDecrement}>
          <Minus />
        </Button>
        <Button variant="outline" size="icon" aria-label="Increase" onClick={onIncrement}>
          <Plus />
        </Button>
      </div>
    </div>
  )
}

export default Counter
