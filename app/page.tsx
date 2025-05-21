import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  HardDrive,
  Monitor,
  Package,
  Star,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 pl-4 md:pl-6">
            <span className="text-xl">
              <span className="font-black">G<span className="text-indigo-600">.</span></span>
              <span className="font-bold hidden md:inline"> TecnoServicio</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#servicios" className="text-sm font-medium hover:text-indigo-600 hover:underline underline-offset-4">
              Servicios
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:text-indigo-600 hover:underline underline-offset-4">
              Beneficios
            </Link>
            <Link href="#precios" className="text-sm font-medium hover:text-indigo-600 hover:underline underline-offset-4">
              Precios
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-indigo-600 hover:underline underline-offset-4">
              Contacto
            </Link>
          </nav>
          <Link href="#contacto">
            <Button
              className="bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Solicitar Servicio
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Optimiza tu PC y actualiza tu sistema operativo
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Instalación de Windows, cambio de HDD a SSD e instalación de programas. Servicio rápido y profesional
                  en Rio Tercero.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contacto">
                    <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                      Solicitar Presupuesto
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#servicios">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer border-indigo-600">
                      Ver Servicios
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/imagen002.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Servicio de actualización de PC"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Servicios Profesionales</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Soluciones completas para mejorar el rendimiento de tu computadora
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center">
                    <Monitor className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Instalación de Windows</CardTitle>
                  <CardDescription>
                    Instalación limpia de Windows 10/11 con todas las actualizaciones y controladores necesarios.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Windows original</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Controladores actualizados</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Configuración personalizada</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contacto" className="w-full">
                    <Button className="w-full">Solicitar</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center">
                    <HardDrive className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Cambio de HDD a SSD</CardTitle>
                  <CardDescription>
                    Mejora drásticamente la velocidad de tu PC cambiando tu disco duro tradicional por un SSD.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Mayor velocidad</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Migración de datos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Instalación profesional</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contacto" className="w-full">
                    <Button className="w-full">Solicitar</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center">
                    <Package className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Instalación de Programas</CardTitle>
                  <CardDescription>
                    Instalamos y configuramos todos los programas que necesitas para tu trabajo o uso personal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Software esencial</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Programas específicos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Configuración inicial</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contacto" className="w-full">
                    <Button className="w-full">Solicitar</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Por qué elegir <span className="font-black">G<span className="text-indigo-600">.</span></span> TecnoServicio?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestro servicio se destaca por la calidad, rapidez y atención personalizada
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <Star className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Calidad Garantizada</h3>
                <p className="text-muted-foreground text-center">
                  Utilizo componentes y software de primera calidad para asegurar el mejor rendimiento.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Servicio Rápido</h3>
                <p className="text-muted-foreground text-center">
                  Entiendo la importancia de tu tiempo. Trabajo con eficiencia para entregarte tu equipo lo antes
                  posible.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Garantía de Servicio</h3>
                <p className="text-muted-foreground text-center">
                  Todos mis servicios incluyen garantía. Tu satisfacción es mi prioridad.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <MapPin className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Servicio Local</h3>
                <p className="text-muted-foreground text-center">
                  Estoy en Rio Tercero, cerca de ti para brindarte un servicio rápido y personalizado.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <Phone className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Soporte Continuo</h3>
                <p className="text-muted-foreground text-center">
                  Después del servicio, sigo disponible para resolver cualquier duda o problema.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <Mail className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Presupuesto Sin Compromiso</h3>
                <p className="text-muted-foreground text-center">
                  Solicita un presupuesto detallado sin ningún compromiso. Precios claros y sin sorpresas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="precios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Precios Competitivos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrezco la mejor relación calidad-precio del mercado
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Instalación de Windows</CardTitle>
                  <CardDescription>Instalación limpia con actualizaciones</CardDescription>
                  <div className="text-3xl font-bold">$XX</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Windows 10/11</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Controladores</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Configuración básica</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contacto" className="w-full">
                    <Button className="w-full">Solicitar</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Cambio a SSD + Windows</CardTitle>
                  <CardDescription>Paquete completo de actualización</CardDescription>
                  <div className="text-3xl font-bold">$XX</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>SSD 240GB/480GB</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Instalación de Windows</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Migración de datos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Programas básicos</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contacto" className="w-full">
                    <Button className="w-full">Solicitar</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Paquete Completo</CardTitle>
                  <CardDescription>Solución integral para tu PC</CardDescription>
                  <div className="text-3xl font-bold">$XX</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>SSD 480GB/1TB</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Windows 10/11</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Programas completos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Limpieza de hardware</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contacto" className="w-full">
                    <Button className="w-full">Solicitar</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                * Los precios pueden variar según el modelo de PC y requerimientos específicos. Solicita un presupuesto
                personalizado.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactame</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Solicita un presupuesto sin compromiso o consulta cualquier duda que tengas
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{"+54 9 3571 595365"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{"gabrielbustosdev@gmail.com"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{"R. Güiraldes 46, Rio Tercero. Córdoba."}</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">Horario de Atención</h3>
                  <p>Lunes a Viernes: 9:00 - 19:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                </div>
              </div>
              <div className="space-y-4">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="nombre"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="telefono"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Teléfono
                      </label>
                      <Input id="telefono" placeholder="Tu teléfono" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Tu email" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="servicio"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Servicio que te interesa
                    </label>
                    <select
                      id="servicio"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="windows">Instalación de Windows</option>
                      <option value="ssd">Cambio de HDD a SSD</option>
                      <option value="programas">Instalación de Programas</option>
                      <option value="completo">Paquete Completo</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="mensaje"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <Textarea id="mensaje" placeholder="Describe brevemente tu necesidad" />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Solicitud
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 pl-4 md:pl-6">
            <span className="font-black">G<span className="text-indigo-600">.</span></span>
            <span className="font-bold hidden md:inline"> TecnoServicio</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} G. TecnoServicio. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
