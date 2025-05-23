import { useIntersectionObserver } from "./useIntersectionObserver";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { About } from "./About";
import { Contact } from "./Contact";

export function Main({ selectedNav }) {
  const articleRef = useIntersectionObserver({
    threshold: 0.1, 
     rootMargin: "0px 0px -10% 0px",
  });


  return (
    <main className="main">
      
      <article ref={(el) => (articleRef.current[0] = el)}>
        <About />
      </article>
      <article ref={(el) => (articleRef.current[1] = el)}>
        <Projects />
      </article>
      <article ref={(el) => (articleRef.current[2] = el)}>
        <Resume />
      </article>
      <article ref={(el) => (articleRef.current[3] = el)}>
        <Skills />
      </article>
      <article ref={(el) => (articleRef.current[4] = el)}>
        <Contact />
      </article>


      {/* {(selectedNav === 'about' || selectedNav === "home") && <About />}
      {selectedNav === 'projects' && <Projects />}
      {selectedNav === 'resume' && <Resume />}
      {selectedNav === 'skills' && <Skills />}
      {selectedNav === 'contact' && <Contact />}  */}
    </main>
  );
}



