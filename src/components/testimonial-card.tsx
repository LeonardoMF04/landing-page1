import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  avatar: string
  rating: number
  text: string
}

export function TestimonialCard({ name, avatar, rating, text }: TestimonialCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600">{text}</p>
      </CardContent>
    </Card>
  )
}

