import { Code2, Palette, Zap } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Palette,
      title: "SEO Friendly",
      description: "Optimized for better search ranking and visibility",
    },
    {
      icon: Zap,
      title: "Security First Approach",
      description: "Built with essential security and protection measures",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 font-bold tracking-tighter  text-center ">About Me</h2>
          {/* <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div> */}

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <p className="mb-6 leading-relaxed">
                {"I'm a Fullstack Web Developer focused on building scalable, SEO-friendly, secure, and elegant web solutions that solve real business problems. I enjoy transforming ideas into reliable digital products with clean architecture, usability, and long-term maintainability in mind."}
              </p>
              <p className="mb-6 leading-relaxed">
                {"When I'm not coding, I’m usually learning new development practices, exploring modern web technologies, or improving workflows to deliver better product value."}
              </p>
              <p className="leading-relaxed">
               {"My goal is to build meaningful solutions that help businesses grow sustainably while maintaining high standards in code quality, performance, and user experience."}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/common/fadil-rumasoreng.webp"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-white rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
