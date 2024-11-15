import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export function SearchInput() {
    return (
        <div className="relative w-full max-w-sm">
            <Input
                type="text"
                placeholder="Search for product"
                className="pl-10 pr-4 py-2 bg-[#FFFFFF] rounded-xl"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
    )
}