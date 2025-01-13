import { TestimonialCarousel } from "../components/testimonial-carousel"

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">O que nossos clientes dizem</h2>
        <TestimonialCarousel />
      </div>
    </section>
  )
}

