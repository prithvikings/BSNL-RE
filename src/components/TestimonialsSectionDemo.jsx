import { TestimonialsSection } from "./ui/testimonials-with-marquee"


const testimonials = [
  {
    author: {
      name: "Narendra Modi",
      handle: "@narendramodi",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4dWktUS1t2byYRgTny-hP_N9WVOJT00RDg&s"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/narendramodi"
  },
  {
    author: {
      name: "Nirmala Sitharaman",
      handle: "@nirmalasitharaman",
      avatar: "https://s7d1.scene7.com/is/image/wbcollab/nirmala-sitharam?qlt=75&resMode=sharp2"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/nirmalasitharaman"
  },
  {
    author: {
      name: "Rahul Gandhi",
      handle: "@rahulgandhi",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/9/91/Rahul_Gandhi.png"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  },
  {
    author: {
      name: "Sonia Gandhi",
      handle: "@soniagandhi",
      avatar: "https://theleaderspage.com/wp-content/uploads/2020/09/10373068_564102830388920_7420287936146617325_o.jpg"
    },
    text: "The customer support team is outstanding. They helped us customize the solution to fit our unique needs.",
    href: "https://twitter.com/soniagandhi"
  },
  {
    author:{
      name: "Amit Shah",
      handle: "@amitshah",
      avatar: "https://etnowgbs.com/wp-content/uploads/2024/12/AMIT-SHAH-1.jpg"
    },
    text: "Our productivity has soared since we started using this AI platform. The automation features are a game-changer.",
    href: "https://twitter.com/amitshah",
    },
  {
    author:{
      name: "Arvind Kejriwal",
      handle: "@arvindkejriwal",
      avatar: "https://archive.aamaadmiparty.org/wp-content/uploads/2017/07/Arvind-Kejriwal-2.jpg"
    },
    text: "The insights we gain from this AI tool have been invaluable. It's like having a team of data scientists at our fingertips.",
    href: "https://twitter.com/arvindkejriwal",
  },
  {
    author:{
      name: "Mamata Banerjee",
      handle: "@mamata_banerjee",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Official_portrait_of_Mamata_Banerjee.jpg"
    },
    text: "Implementing this AI solution was one of the best decisions we've made. The ROI has been phenomenal.",
    href: "https://twitter.com/mamata_banerjee",
  },
  {
    author:{
      name: "Yogi Adityanath",
      handle: "@myogiadityanath",
      avatar: "https://up.bjp.org/filesup/SPG-image/yogi_1.jpg"
    },
    text: "The scalability of this AI platform is impressive. It has grown with our business seamlessly.",
    href: "https://twitter.com/myogiadityanath",
  },
  {
    author:{
      name:"Jay Shah",
      handle: "@jay_shah",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/BCCI_Secretary_Shri_Jay_Shah_in_PMO_New_Delhi.jpg/250px-BCCI_Secretary_Shri_Jay_Shah_in_PMO_New_Delhi.jpg"
    },
    text: "The user interface is intuitive and easy to navigate. Our team was up and running in no time.",
    href: "https://twitter.com/jay_shah",
  }
]

export default function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Trusted by Pioneers Worldwide"
      description="Join the Har ghar internet revolution. See why innovators across industries rely on our AI solutions to drive success."
      testimonials={testimonials}
    />
  )
}