import { BlogPosts } from "app/components/posts";
import Education from "./components/education";
import { education, experience } from "./resume";
import Experience from "./components/experience";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <aside>
        <section className="mb-12">
          <h2 className="mb-4 text-4xl font-semibold tracking-tighter border-b-3 pb-4 border-black">
            about me
          </h2>
          <div className="mb-4 text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              vero tenetur minima distinctio doloribus enim cumque a, itaque
              consequatur aliquid nesciunt tempore ut aliquam voluptatibus sequi
              corrupti! Dolores atque rerum explicabo a! Corporis illo
              consequuntur corrupti quam at in velit?
            </p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 text-4xl font-semibold tracking-tighter border-b-3 pb-4 border-black">
            education
          </h2>
          <div>
            {education.map((item, i) => (
              <Education
                key={i}
                date={item.date}
                school={item.school}
                degree={item.degree}
              />
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 text-4xl font-semibold tracking-tighter border-b-3 pb-4 border-black">
            skills
          </h2>
          <p className="mb-4">
            Grid based web design, Vim, TypeScript, Dark mode, Tabs over spaces
          </p>
        </section>
      </aside>
      <section className="col-span-2">
        <h2 className="mb-4 text-4xl font-semibold tracking-tighter border-b-3 pb-4 border-black">
          work experience
        </h2>
        <p className="mb-4">
          {experience.map((item, i) => (
            <Experience
              key={i}
              title={item.title}
              company={item.company}
              date={item.date}
              description={item.description}
            />
          ))}
        </p>
        {/* <div className="my-8">
          <BlogPosts />
        </div> */}
      </section>
    </div>
  );
}
