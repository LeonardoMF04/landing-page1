import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { TestimonialCard } from "./testimonial-card"

const testimonials = [
  {
    name: "João Victor Maniezo",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Ótimo atendimento. Entrega rápida e produtos de qualidade. Recomendo a todos."
  },
  {
    name: "João Santos",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Fiquei muito satisfeito com minha compra. Entrega rápida e produtos bem embalados."
  },
  {
    name: "Ana Oliveira",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Excelente variedade de produtos. Sempre encontro o que preciso nesta loja."
  },
  {
    name: "Carlos Ferreira",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Atendimento ao cliente de primeira. Resolveram meu problema rapidamente."
  }
]

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

