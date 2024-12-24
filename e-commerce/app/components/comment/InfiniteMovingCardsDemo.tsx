"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                // className ekleyebilirsiniz ama zorunlu değil
                // className="bg-red-100"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "Bu helva, şimdiye kadar tattığım en lezzetli tatlı! İlk lokmada beni çocukluğuma götürdü, her anında nostaljiyle doluydu.",
        name: "Ahmet Yılmaz",
        title: "Müşteri",
    },
    {
        quote:
            "Helvanın bu kadar çeşitli ve zengin tatlara sahip olabileceğini hiç düşünmemiştim. Özellikle tahinli helvayı herkese tavsiye ederim!",
        name: "Elif Demir",
        title: "Yemek Eleştirmeni",
    },
    {
        quote:
            "Bir parça helva, bir yudum mutluluk! Misafirlerime ikram ettiğimde herkes tarifini sordu.",
        name: "Bahar Kılıç",
        title: "Ev Hanımı",
    },
    {
        quote:
            "Helvanın tazeliği ve damakta bıraktığı enfes tatla kendimi ödüllendirmiş gibi hissettim. Geleneksel lezzetin modern yorumu harika!",
        name: "Murat Kaya",
        title: "Gurme Şef",
    },
    {
        quote:
            "Bu helvayı tattıktan sonra, başka tatlılara olan ilgim azaldı. Sade ve tahinli helva arasında seçim yapmakta zorlanıyorum çünkü ikisi de bir harika!",
        name: "Zeynep Çelik",
        title: "Tatlı Tutkunu",
    },
];

export default InfiniteMovingCardsDemo;
