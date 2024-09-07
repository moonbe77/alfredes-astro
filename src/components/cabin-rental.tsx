"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle2 } from "lucide-react";
import Image1 from "@/assets/gallery/exterior/foto_1.jpg";
import Image2 from "@/assets/gallery/exterior/foto_2.jpg";
import Image3 from "@/assets/gallery/exterior/foto_3.jpg";
import Image4 from "@/assets/gallery/exterior/foto_4.jpg";
import Image5 from "@/assets/gallery/exterior/foto_5.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

export function CabinRental() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Green Haven Cabin Retreat
      </h1>

      <Carousel className="w-full max-w-3xl mx-auto mb-8">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <img
                    alt={`Cabin view ${index + 1}`}
                    className="object-cover w-full h-full"
                    height="400"
                    src={image.src}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width="600"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="max-w-3xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Our Cabin</h2>
          <p className="text-muted-foreground">
            Nestled in the heart of a lush, green forest, our Green Haven Cabin
            offers a perfect escape from the hustle and bustle of city life.
            Surrounded by towering trees and the soothing sounds of nature, this
            cozy retreat provides the ideal setting for relaxation and
            rejuvenation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What You'll Find</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Fully equipped kitchen",
              "Cozy fireplace",
              "Outdoor hot tub",
              "Hiking trails nearby",
              "Spacious deck with forest views",
              "High-speed Wi-Fi",
              "BBQ grill",
              "Board games and books",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle2 className="text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Experience Nature's Embrace
          </h2>
          <p className="text-muted-foreground mb-4">
            Whether you're seeking a romantic getaway, a family vacation, or a
            solo retreat, our cabin provides the perfect backdrop for creating
            lasting memories. Wake up to birdsong, enjoy your coffee on the deck
            overlooking the misty forest, and end your day stargazing from the
            comfort of your private hot tub.
          </p>
          <Button size="lg" className="w-full md:w-auto">
            Book Your Stay Now
          </Button>
        </section>
      </div>
    </div>
  );
}
