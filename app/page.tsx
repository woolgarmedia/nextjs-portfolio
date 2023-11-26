import { FaceImageComponent } from "./components/image";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Cal Woolgar</h1>
      <p className="prose prose-neutral">
      Hi, I’m Callam Woolgar, a passionate and creative fullstack developer with over 7 years of experience in software development. This site is dedicated to showing off the projects I've done and will do, whilst also providing insightful blog posts about software and my personal development.
      </p>

      <FaceImageComponent/>
    </section>
  );
}
