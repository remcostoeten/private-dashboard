import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { DotsVerticalIcon } from '@radix-ui/react-icons'

export default function ToggleSearchMode({ onClick }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button size="icon" variant="theme">
            <DotsVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onClick}>Toggle search</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
