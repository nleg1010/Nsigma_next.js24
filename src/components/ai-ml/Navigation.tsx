import Link from "next/link";

const SECTIONS = [
  {
    title: "AI/ML and Predictive Analytics",
    id: "AI/ML and Predictive Analytics",
  },
  { title: "What Are AI/ML", id: "What Are AI/ML" },
  { title: "Our Process", id: "Our Process" },
  { title: "Signs you need AI/ML", id: "Signs you need AI/ML" },
  { title: "Benefits", id: "Benefits" },
  { title: "Examples", id: "Examples" },
  { title: "Why Us", id: "Why Us" },
];

function Navigation() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="container w-fit mx-4 px-4 bg-Gray flex-wrap flex items-center justify-center rounded-[42px] py-2 text-white gap-x-8 gap-y-2">
        {SECTIONS.map(({ title, id }) => (
          <Link href={`#${id}`} key={id} className="text-nowrap">
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Navigation;
