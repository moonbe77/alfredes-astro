import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Leaf, Sun, Cloud } from "lucide-react";
import { Image } from "astro:assets";

import exterior1 from "../assets/gallery/exterior/foto_1.jpg";
import exterior2 from "../assets/gallery/exterior/foto_2.jpg";
import exterior3 from "../assets/gallery/exterior/foto_3.jpg";
import exterior4 from "../assets/gallery/exterior/foto_4.jpg";
import exterior5 from "../assets/gallery/exterior/foto_5.jpg";
import exterior6 from "../assets/gallery/exterior/foto_6.jpg";
import exterior7 from "../assets/gallery/exterior/foto_7.jpg";
import exterior8 from "../assets/gallery/exterior/foto_8.jpg";
import exterior9 from "../assets/gallery/exterior/foto_9.jpg";
import exterior10 from "../assets/gallery/exterior/foto_10.jpg";
import exterior11 from "../assets/gallery/exterior/foto_11.jpg";
import exterior12 from "../assets/gallery/exterior/foto_12.jpg";
import interior1 from "../assets/gallery/interior/photo_int_1.jpg";
import interior2 from "../assets/gallery/interior/photo_int_2.jpg";
import interior3 from "../assets/gallery/interior/photo_int_3.jpg";
import interior4 from "../assets/gallery/interior/photo_int_4.jpg";
import interior5 from "../assets/gallery/interior/photo_int_5.jpg";
import interior6 from "../assets/gallery/interior/photo_int_6.jpg";
import interior7 from "../assets/gallery/interior/photo_int_7.jpg";
import interior8 from "../assets/gallery/interior/photo_int_8.jpg";
import interior9 from "../assets/gallery/interior/photo_int_9.jpg";

const images = [
  { ...exterior1, alt: "exterior1" },
  { ...exterior2, alt: "exterior2" },
  { ...exterior3, alt: "exterior3" },
  { ...exterior4, alt: "exterior4" },
  { ...exterior5, alt: "exterior5" },
  { ...exterior6, alt: "exterior6" },
  { ...exterior7, alt: "exterior7" },
  { ...exterior8, alt: "exterior8" },
  { ...exterior9, alt: "exterior9" },
  { ...exterior10, alt: "exterior10" },
  { ...exterior11, alt: "exterior11" },
  { ...exterior12, alt: "exterior12" },
  { ...interior1, alt: "interior1" },
  { ...interior2, alt: "interior2" },
  { ...interior3, alt: "interior3" },
  { ...interior4, alt: "interior4" },
  { ...interior5, alt: "interior5" },
  { ...interior6, alt: "interior6" },
  { ...interior7, alt: "interior7" },
  { ...interior8, alt: "interior8" },
  { ...interior9, alt: "interior9" },
];

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
      {/* <header className="py-6 px-4 bg-gradient-to-r from-green-400 to-blue-100 text-white">
        <h1 className="text-4xl font-bold text-center mb-2">
          Green Haven Cabin Gallery
        </h1>
        <p className="text-center text-xl">Explore the Beauty of Nature</p>
      </header> */}

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">{image.alt}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>

      <footer className="py-6 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white mt-8">
        <p className="text-center">
          © 2024 Green Haven Cabin. Embrace the wonder of nature!
        </p>
      </footer>

      {/* Decorative Elements */}
      <Leaf
        className="absolute top-20 left-4 text-green-500 animate-bounce"
        size={32}
      />
      <Sun
        className="absolute top-40 right-4 text-yellow-500 animate-pulse"
        size={40}
      />
      <Cloud
        className="absolute bottom-20 left-4 text-blue-300 animate-bob"
        size={36}
      />
      {/* <Mountains className="absolute bottom-40 right-4 text-green-600" size={48} /> */}
    </div>
  );
}
